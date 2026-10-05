#!/usr/bin/env node
// Finds GitHub repos that mention Jev/TypeSafe and are not in data/projects.json yet.
// Prints candidates by default; with --add, appends the ones that pass the inclusion bar.
import { readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { categorize, RELEVANT, JEV_LAUNCH } from "./categorize.mjs";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const file = resolve(root, "data/projects.json");
const data = JSON.parse(readFileSync(file, "utf8"));
const exclude = JSON.parse(readFileSync(resolve(root, "data/exclude.json"), "utf8"));
const args = process.argv.slice(2);
const add = args.includes("--add");
const days = Number((args.find((a) => a.startsWith("--days=")) || "--days=7").slice(7));
const since = new Date(Date.now() - days * 86400e3).toISOString().slice(0, 10);
const today = new Date().toISOString().slice(0, 10);

const known = new Set(data.projects.filter((p) => p.repo).map((p) => p.repo.toLowerCase()));
const skip = new Set(exclude.repos.map((r) => r.toLowerCase()));
const names = new Set(data.projects.map((p) => p.name));
const token = process.env.GITHUB_TOKEN;
const headers = { Accept: "application/vnd.github+json", "User-Agent": "awesome-jev-discover" };
if (token) headers.Authorization = `Bearer ${token}`;

const queries = [
  `jev typesafe pushed:>=${since}`,
  `typesafe.ai pushed:>=${since}`,
  `"system one" jev pushed:>=${since}`,
  `jev in:name,description typesafe pushed:>=${since}`,
  `jev in:name created:>=${JEV_LAUNCH} pushed:>=${since}`,
];
const found = new Map();
for (const q of queries) {
  for (let page = 1; page <= 5; page++) {
    const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(q)}&sort=updated&per_page=100&page=${page}`;
    const res = await fetch(url, { headers });
    if (!res.ok) {
      console.warn(`${q} p${page}: ${res.status}`);
      break;
    }
    const body = await res.json();
    for (const r of body.items || []) {
      const text = `${r.full_name} ${r.description || ""} ${(r.topics || []).join(" ")}`;
      if (r.fork || r.archived || !RELEVANT.test(text)) continue;
      if (r.created_at.slice(0, 10) < JEV_LAUNCH) continue;
      const key = r.full_name.toLowerCase();
      if (known.has(key) || skip.has(key)) continue;
      found.set(r.id, r);
    }
    if ((body.items || []).length < 100) break;
    await new Promise((r) => setTimeout(r, 1500));
  }
}

const description = (r) => (r.description || "").trim().replace(/\s+/g, " ");
const qualifies = (r) => {
  if (description(r).length < 20) return false;
  const stars = r.stargazers_count;
  if (categorize(r) === "lists") return stars >= 5;
  return stars >= 2 || (stars >= 1 && /^https?:\/\//.test(r.homepage || ""));
};
const site = (r) => {
  const h = (r.homepage || "").trim();
  if (!/^https?:\/\//.test(h) || /github\.com|docs\.typesafe\.ai|^https?:\/\/typesafe\.ai/.test(h)) return null;
  return h;
};
const uniqueName = (r) => {
  const base = r.full_name.split("/")[1];
  const name = names.has(base) ? `${base} (${r.full_name.split("/")[0]})` : base;
  names.add(name);
  return name;
};

const rows = [...found.values()].sort((a, b) => b.stargazers_count - a.stargazers_count);
if (!add) {
  console.log(`${rows.length} candidates pushed since ${since} not yet listed:\n`);
  for (const r of rows) {
    const mark = qualifies(r) ? "+" : " ";
    console.log(`${mark}${String(r.stargazers_count).padStart(5)}  ${r.full_name.padEnd(45)} ${(r.language || "-").padEnd(12)} ${categorize(r)}\n        ${description(r)}${site(r) ? `\n        ${site(r)}` : ""}`);
  }
  console.log(`\n${rows.filter(qualifies).length} would be added with --add.`);
  process.exit(0);
}

const added = [];
for (const r of rows) {
  if (!qualifies(r)) continue;
  added.push({
    name: uniqueName(r),
    repo: r.full_name,
    site: site(r),
    description: description(r),
    category: categorize(r),
    language: r.language || null,
    stars: r.stargazers_count,
    added: today,
    created: r.created_at.slice(0, 10),
    pushed: r.pushed_at.slice(0, 10),
  });
}
data.projects.push(...added);
data.updated = today;
writeFileSync(file, JSON.stringify(data, null, 2) + "\n");
console.log(`Added ${added.length} of ${rows.length} candidates (pushed since ${since}).`);
for (const p of added) console.log(`  + ${p.repo} [${p.category}] ★${p.stars}`);

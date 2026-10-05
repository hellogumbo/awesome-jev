#!/usr/bin/env node
import { readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const file = resolve(root, "data/projects.json");
const data = JSON.parse(readFileSync(file, "utf8"));
const token = process.env.GITHUB_TOKEN;
const headers = { Accept: "application/vnd.github+json", "User-Agent": "awesome-jev-refresh" };
if (token) headers.Authorization = `Bearer ${token}`;

let changed = 0;
const merged = new Set();
for (const p of data.projects) {
  if (!p.repo) continue;
  const res = await fetch(`https://api.github.com/repos/${p.repo}`, { headers });
  if (res.status === 404 || res.status === 451) {
    console.warn(`gone: ${p.repo} (${res.status})`);
    p.gone = true;
    continue;
  }
  if (!res.ok) {
    console.warn(`skip ${p.repo}: ${res.status} ${res.statusText}`);
    continue;
  }
  const r = await res.json();
  if (r.full_name !== p.repo) {
    const target = data.projects.find((q) => q !== p && !merged.has(q) && (q.repo || "").toLowerCase() === r.full_name.toLowerCase());
    if (target) {
      console.log(`renamed into existing entry, merging: ${p.repo} -> ${r.full_name}`);
      for (const k of ["site", "post"]) if (!target[k] && p[k]) target[k] = p[k];
      merged.add(p);
      changed++;
      continue;
    }
    console.log(`renamed: ${p.repo} -> ${r.full_name}`);
    p.repo = r.full_name;
  }
  const next = {
    stars: r.stargazers_count,
    language: r.language || p.language || null,
    pushed: r.pushed_at.slice(0, 10),
  };
  if (!p.site && r.homepage && /^https?:\/\//.test(r.homepage) && !/github\.com/.test(r.homepage)) next.site = r.homepage;
  if (!p.description && r.description) next.description = r.description;
  for (const [k, v] of Object.entries(next)) {
    if (p[k] !== v) {
      p[k] = v;
      changed++;
    }
  }
  delete p.gone;
}

data.projects = data.projects.filter((p) => !merged.has(p));
data.updated = new Date().toISOString().slice(0, 10);
writeFileSync(file, JSON.stringify(data, null, 2) + "\n");
console.log(`Refreshed ${data.projects.filter((p) => p.repo).length} repos, ${changed} field updates.`);

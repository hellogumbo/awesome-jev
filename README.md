# Awesome Jev [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> Directory of projects built on [Jev](https://typesafe.ai), TypeSafe AI's System One model.

Site: **[awesomejev.com](https://awesomejev.com)** (searchable, with GitHub stars refreshed daily).

Jev takes a state plus a set of typed questions (Choice, Score, Noul) and returns typed answers with calibrated probabilities in one request, no text generation. Model id `jev-latest`, endpoint `POST https://api.typesafe.ai/v1/systemone`, early access since 2026-09-15. Docs: [docs.typesafe.ai](https://docs.typesafe.ai).

Not affiliated with TypeSafe AI. To add a project, open a pull request or [file an issue](https://github.com/hellogumbo/awesome-jev/issues/new?template=submit-project.yml). See [CONTRIBUTING.md](CONTRIBUTING.md).

561 entries · last refreshed 2026-09-19

## Contents

- [Official](#official)
- [SDKs & clients](#sdks-clients)
- [Integrations](#integrations)
- [Agent tooling](#agent-tooling)
- [Browser & computer use](#browser-computer-use)
- [Applications](#applications)
- [Games & simulations](#games-simulations)
- [Demos & playgrounds](#demos-playgrounds)
- [Benchmarks & research](#benchmarks-research)
- [Other lists](#other-lists)
- [Articles & threads](#articles-threads)
- [Contributing](#contributing)

## Official

Docs, SDKs, and resources from TypeSafe AI.

- [TypeSafe AI](https://typesafe.ai) - Company homepage, waitlist, and product overview.
- [Documentation](https://docs.typesafe.ai) - Introduction, primitives, patterns, cookbooks, HTTP API, and SDK references.
- [Quick start](https://docs.typesafe.ai/introduction/quickstart) - Shortest path from an API key to a typed decision.
- [Playground](https://console.typesafe.ai/playground) - Paste a state, add questions, and see typed answers in the browser.
- [HTTP API reference](https://docs.typesafe.ai/api) - Request and response contract for POST /v1/systemone.
- [Primitives](https://docs.typesafe.ai/primitives) - Choice, Score, and Noul: the three question types and what they return.
- [Patterns](https://docs.typesafe.ai/patterns) - Speculative fan-out, confidence-gated routing, composite scoring, and intent routing.
- [Cookbooks](https://docs.typesafe.ai/cookbooks/parallel_questions) - Reproducible recipes: parallel questions, reranking, guardrails, citation checks, extraction, hierarchical classification.
- [Smart home demo](https://docs.typesafe.ai/demos/smart-home) - Official interactive demo of speculative fan-out: many questions in one call, code keeps the relevant answers.
- [Workflow evals](https://evals.typesafe.ai) - Published eval methodology and per-model results for System One workflows.
- [Jev 1.13 jaggedness](https://docs.typesafe.ai/model-jaggedness/jev-1.13) - Known failure modes of the current public model, documented by TypeSafe.
- [Introducing System One Models and Jev](https://typesafe.ai/blog/introducing-system-one-models-and-jev) - Launch post: architecture, RLCD training, pricing, Doom and Wikiracing demos, FAQ.
- [Manifesto](https://typesafe.ai/manifesto) - The case for machine-native intelligence built for software, not conversation.
- [Discord](https://discord.gg/typesafe) - Official TypeSafe server. Builder demos live in the Show and Tell channel.
- [@typesafeai on X](https://x.com/typesafeai) - Product and research updates.
- [TypeSafe agent skills](https://github.com/typesafe-ai/skills) ([site](https://typesafe.ai)) - Official agent skill for Claude Code, Codex, and compatible agents: primitives, patterns, and how to structure evaluations.
- [TypeSafe JavaScript SDK](https://github.com/typesafe-ai/typesafe-sdk-js) - Official TypeScript/JavaScript client with inferred answer types. npm install @typesafe-ai/sdk.
- [System One adapter (Python)](https://github.com/typesafe-ai/system-one-adapter-python) - Official drop-in TypeSafeClient replacement backed by OpenAI, Anthropic, and compatible LLM APIs, for comparing Jev against chat models.
- [TypeSafe Python SDK](https://github.com/typesafe-ai/typesafe-sdk-python) ([site](https://docs.typesafe.ai/sdk/python)) - Official sync and async Python client. pip install typesafe-sdk.

## SDKs & clients

Community clients for languages without an official SDK.

- [advocaat](https://github.com/pithings/advocaat) - A small, type-safe client for asking AI questions about your data, powered by TypeSafe Jev.
- [ruby_decision_model](https://github.com/obie/ruby_decision_model) - Ruby client for decision models such as Typesafe Jev.
- [jev (dannote)](https://github.com/dannote/jev) - TypeSafe Jev for OTP: reply to Jev from a GenServer and pattern match on its answer.
- [typesafe-ai](https://github.com/Twister915/typesafe-ai) - Typed TypeSafe AI clients for Rust, with async and blocking backends and observable retries.
- [typesafe-sdk-go (Tangerg)](https://github.com/Tangerg/typesafe-sdk-go) - Go SDK for the TypeSafe AI API — typed questions in, probability distributions out.
- [zod-jev](https://github.com/jomatsu/zod-jev) - Zod validates the shape, Jev validates the meaning: semantic checks on request bodies become calibrated probabilities you threshold in code.
- [jev-dsl](https://github.com/inanna-malick/jev-dsl) - Agent-first Haskell DSL for TypeSafe's Jev judgment model: typed packets, inferred types, answers under the same labels.
- [super-jev](https://github.com/Kevthetech143/super-jev) - A small, extensible decision-to-action harness for TypeSafe Jev.
- [typesafe-dotnet-sdk](https://github.com/saibimajdi/typesafeai-dotnet-sdk) ([site](https://saibimajdi.github.io/typesafeai-dotnet-sdk/)) - Community .NET SDK for the TypeSafe AI System One API — typed noul, choice, and score questions with structured, confidence-scored answers. Not affiliated with TypeSafe AI.
- [typesafe-sdk-go (atharvamhaske)](https://github.com/atharvamhaske/typesafe-sdk-go) - Unofficial go sdk for typesafe ai.
- [typesafe-sdk (joshmn)](https://github.com/joshmn/typesafe-sdk) - Ruby client for typesafe.ai.
- [jev-java](https://github.com/Olti1947/jev-java) - Idiomatic Java SDK for TypeSafe AI Jev System One decision engine.
- [jod](https://github.com/mateonunez/jod) ([site](https://npmjs.com/package/@mateonunez/jod), [post](https://x.com/mmateonunez/status/2100612699394597125)) - Semantic schemas over TypeSafe's Jev — validate the state locally, then project typed answers.
- [typesafe-ai-rs](https://github.com/gilljon/typesafe-ai-rs) ([site](https://docs.rs/typesafe-ai-rs)) - Independent async and blocking Rust SDK for the TypeSafe AI System One API.
- [typesafe-sdk-java](https://github.com/Premo-Cloud/typesafe-sdk-java) ([site](https://docs.typesafe.ai)) - Community Java client for the TypeSafe System One API (unofficial).
- [zio-typesafe-ai](https://github.com/jamesward/zio-typesafe-ai) - Scala 3 / ZIO client for the System One API: typed end-to-end, several questions per round-trip via NamedTuple.
- [jev-go](https://github.com/Stumble/jev-go) - Community Go SDK for TypeSafe AI Jev / System One.
- [jev-go (Gaurav-Gosain)](https://github.com/Gaurav-Gosain/jev-go) - Go client for TypeSafe's System One API and its model Jev: typed judgments and calibrated probabilities instead of generated text.
- [jevgo](https://github.com/fgn/jevgo) - Go client for TypeSafe AI's System One API (Jev), with optional Langfuse instrumentation.
- [typesafe_sdk](https://github.com/nshkrdotcom/typesafe_sdk) ([post](https://x.com/elixirforum/status/2100495661942677648)) - An idiomatic, type-safe Elixir port of the official TypeScript AI SDK (ai / ai-sdk) providing unified LLM integrations, streaming text and structured outputs, tool calling, and agentic workflows. Jev is their current flagship model and is the first System One model.
- [typesafe-ai-jev](https://github.com/kcb-swe-gh/typesafe-ai-jev) - Java 21 client for Jev, TypeSafe AI's structured decision model.
- [typesafe-go (cole-gillespie)](https://github.com/cole-gillespie/typesafe-go) - Unofficial go SDK for typesafe AI, with typed answers, retries, and context support.
- [typesafe-sdk-rust](https://github.com/codeitlikemiley/typesafe-sdk-rust) - Rust SDK for the TypeSafe AI API.
- [typesafe-sdk-swift](https://github.com/InsaneArts/typesafe-sdk-swift) - Swift SDK for TypeSafe AI.
- [TypeSafeAI.Net](https://github.com/Hawxy/TypeSafeAI.Net) ([site](https://docs.typesafe.ai/)) - .NET SDK for the TypeSafe AI platform.
- [decido](https://github.com/yairshy/decido) - Probabilistic decisions for Python. Use Jev or bring your own provider; crawl with Playwright.
- [jev](https://github.com/anilsenay/jev) - Unofficial Go client for TypeSafe's System One API and its model, Jev.
- [jev-go (guillemus)](https://github.com/guillemus/jev-go) - Unofficial Go SDK for TypeSafe AI's Jev API.
- [jev-php-sdk](https://github.com/mzainzulifqar/jev-php-sdk) ([site](https://packagist.org/packages/mzainzulifqar/jev-php-sdk)) - PHP SDK for TypeSafe's Jev: send text and typed questions, get typed answers with calibrated confidence. PHP 8.1+, works with any PSR-18 client, Laravel 8–13.
- [jevclient](https://github.com/AboveColin/jevclient) ([site](https://pypi.org/project/jevclient/)) - Async Python client for TypeSafe Jev. Typed questions in, probabilities and choices out, no prose to parse.
- [typesafe-client](https://github.com/JedimEmO/typesafe-client) - Unofficial typed async Rust client for the TypeSafe System One API.
- [typesafe-go (zhirschtritt)](https://github.com/zhirschtritt/typesafe-go) - Idiomatic Go SDK for the TypeSafe AI API.
- [typesafe-sdk (binnash)](https://github.com/binnash/typesafe-sdk) - PHP & Laravel SDK for TypeSafe AI's JEV Model series.
- [typesafeai-go](https://github.com/chez-shanpu/typesafeai-go) - Go SDK for TypeSafe AI API https://docs.typesafe.ai/api.
- [kunobi-jev](https://github.com/kunobi-ninja/kunobi-jev) - Rust client for the TypeSafe System One API (Jev).
- [s1-rs](https://github.com/AbdelStark/s1-rs) - Typed System One layer for Rust (Choice/Score/Noul).
- [tinyjevclient](https://github.com/tinyhumansai/tinyjevclient) - An integration with jev by typesafe.ai in Rust.
- [typesafe](https://github.com/mattneel/typesafe) - An idiomatic Elixir client for the TypeSafe AI API.
- [typesafe_ai (hfiguera)](https://github.com/hfiguera/typesafe_ai) - A supervised Mint client for the TypeSafe AI System One API.
- [typesafe_ai (typesend)](https://github.com/typesend/typesafe_ai) ([site](https://typesafe-api.hexdocs.pm/readme.html)) - Unofficial Elixir SDK for the TypeSafe AI API.
- [typesafe_sdk_ex](https://github.com/vinnie357/typesafe_sdk_ex) - Typesafe AI SDK in Elixir using Req.
- [typesafe-rs](https://github.com/AbdelStark/typesafe-rs) ([site](https://docs.rs/typesafe-rs/latest/typesafe_rs/)) - Latency-first Rust SDK for TypeSafe System One.
- [typesafe-sdk-go](https://github.com/valksor/typesafe-sdk-go) - Unofficial Go SDK for the TypeSafe AI System One API — 1:1 parity with the official JS and Python SDKs. Not affiliated with TypeSafe AI.
- [typesafe-sdk-php](https://github.com/valksor/typesafe-sdk-php) ([site](https://packagist.org/packages/valksor/typesafe-sdk-php)) - Unofficial PHP SDK for the TypeSafe AI System One API — 1:1 parity with the official JS and Python SDKs. Not affiliated with TypeSafe AI.
- [typesafe.zig](https://github.com/mattneel/typesafe.zig) - An idiomatic Zig client for the TypeSafe AI API.

## Integrations

Jev inside frameworks, gateways, and platforms.

- [eve](https://github.com/vercel/eve) ([site](https://eve.dev)) - Vercel's open agent framework, which ships Jev as the default evaluation model in its experimental evaluate path.
- [ai-cli](https://github.com/vercel-labs/ai-cli) ([site](https://ai-cli.dev)) - Vercel Labs terminal CLI that can run Jev as the evaluation model for its evaluate command.
- [pg-jev](https://github.com/realZachi/pg-jev) ([site](https://pgjev.com)) - Ask your Postgres tables questions in plain language. A PostgreSQL extension powered by TypeSafe's Jev.
- [pg_typesafe](https://github.com/giuliosmall/pg_typesafe) - Pre-alpha PostgreSQL extension for TypeSafe AI (Jev) categorical classification.
- [jev-shell-history](https://github.com/mrnugget/jev-shell-history) - Fish-style zsh history autosuggestions ranked by Jev (TypeSafe).
- [Loki](https://github.com/wundercorp/loki) ([site](https://loki.computer), [post](https://x.com/wundercorp/status/2100619500966056196)) - Self-improving agent harness with an optional TypeSafe Jev companion for typed Choice, Score, and Noul judgments.
- [neo4jev](https://github.com/jexp/neo4jev) ([post](https://x.com/0xLogicrw/status/2100478725393686556)) - Typesafe.ai System One Model Jev navigating a Neo4j graph by using a classifier over neighbouring relationships.
- [HA-Jev](https://github.com/AboveColin/HA-Jev) - Home Assistant integration for TypeSafe Jev. Ask a question about your house and get a probability, a choice or a score as an entity.
- [ruby_llm-typesafe](https://github.com/kieranklaassen/ruby_llm-typesafe) - TypeSafe structured-output provider for RubyLLM 2.
- [a0-typesafe-ai](https://github.com/3clyp50/a0-typesafe-ai) - TypeSafe AI Jev judgments for Agent Zero, with typed tools and probability cards.
- [jevql](https://github.com/kylemclaren/jevql) ([site](https://jevql.fly.dev/)) - Semantic SQL for Postgres, powered by Jev.
- [typesafe-jev-workflow](https://github.com/GiesN/typesafe-jev-workflow) - Async LangGraph workflow that gets a typed Jev Choice (invoice or general) and routes each inbound email to the matching handler.
- [typesafe-on-neon](https://github.com/andrelandgraf/safer-with-jev) ([post](https://x.com/0xLogicrw/status/2100478725393686556)) - Neon Function proxy for the Neon AI Gateway with TypeSafe Jev routing.
- [laravel-typesafe-jev](https://github.com/Butochnikov/laravel-typesafe-jev) - Unofficial Laravel integration for TypeSafe Jev AI with typed responses, async requests, scoped dependency injection, and testing fakes.
- [llama-index-jev](https://github.com/WiktorB2004/llama-index-jev) - LlamaIndex reranker + router powered by TypeSafe Jev — typed scores/choices, cheaper than LLM-as-judge.
- [judging-with-typesafe](https://github.com/carlsonchik/judging-with-typesafe) - Скилл для агентов Letta: суждения по критериям через TypeSafe System One (Jev).
- [pydantic-jev-examples](https://github.com/adtyavrdhn/pydantic-jev-examples) - Pydantic AI capabilities made stronger with Jev: small runnable demos, one file each.
- [typesafe-ai-rails](https://github.com/GenieRobot/typesafe-ai-rails) - Community Rails integration on the typesafe-sdk gem: configuration, persisted usage and cost telemetry, and opt-in confidence policies.
- [typesafe-assist](https://github.com/JanOstrowka/typesafe-assist) - Home Assistant Assist conversation agent powered by TypeSafe's Jev (System One) model.
- [agentgateway Jev guardrail example](https://github.com/agentgateway/agentgateway/tree/main/examples/llm-guardrail-jev) ([post](https://x.com/agentgateway/status/2100615437973074097)) - Jev as an LLM prompt guardrail inside the agentgateway proxy, with tracing and cost tracking.
- [Jev on Vercel AI Gateway](https://vercel.com/ai-gateway/models/jev) ([post](https://x.com/typesafeai/status/2100376436272173088)) - Hosted typesafe-ai/jev for AI SDK evaluate calls, no TypeSafe waitlist required.
- [Jev4Mellea](https://github.com/SoundBlaster/Jev4Mellea) - Jev adapter to Mellea.
- [n8n-nodes-typesafe-ai](https://github.com/DomMonte/n8n-nodes-typesafe-ai) ([site](https://docs.typesafe.ai)) - N8n community node for the TypeSafe AI System One API — typed yes/no, choice and score questions with calibrated probabilities.
- [TrainLCD Jev rerank](https://github.com/TrainLCD/Functions/pull/33) ([post](https://x.com/tinykitten8/status/2100618835443453969)) - Pull request adding Jev to station-suggestion reranking in the TrainLCD transit app.
- [typesafe-ui](https://github.com/TypeSafeAI/typesafe-ui) ([site](https://typesafe-ui.vercel.app)) - Shadcn-style reusable components and blocks for using TypeSafe AI.
- [Vercel AI SDK provider](https://ai-sdk.dev/providers/ai-sdk-providers/typesafe-ai) ([post](https://x.com/vercel_dev/status/2100378959653507175)) - @ai-sdk/typesafe-ai plus experimental_evaluate; use jev-latest as an evaluation model.

## Agent tooling

Gates, routers, reviewers, MCP servers, and skills for coding agents.

- [fast-jev-compaction](https://github.com/tamaratran/fast-jev-compaction) - Claude Code plugin that replaces the compaction summary with Jev decisions: every tool call and result is scored in one fast request, stale ones are dropped or truncated, everything kept stays verbatim.
- [foreman](https://github.com/thruwire/foreman) ([site](https://thruwire.ai), [post](https://x.com/JoshARosen/status/2100573432089866717)) - Software Factory Foreman: an agent supervisor that uses Jev decisions to keep coding agents on task.
- [jev-review (devagrawal09)](https://github.com/devagrawal09/jev-review) ([post](https://x.com/0xLogicrw/status/2100478725393686556)) - A staged code-review workflow and local dashboard built with TypeSafe Jev.
- [jev-router (gargpratyush)](https://github.com/gargpratyush/jev-router) - Route to the cheapest model in claude code for your task using jev-router.
- [jev-search](https://github.com/superagents-lab/jev-search) ([site](https://jev.s1.dev)) - Search the web with TypeSafe's Jev: source selection, query understanding and relevance ranking. Built with Search1API.
- [jev-review (NiazMorshed2007)](https://github.com/NiazMorshed2007/jev-review) - Local-first MCP plugin for continuous software-quality review by AI coding agents, powered by Jev.
- [building-with-jev-skill](https://github.com/dbreunig/building-with-jev-skill) - A skill for writing and improving programs that call Jev, TypeSafe's System One model.
- [typesafe-mcp](https://github.com/itsmostafa/typesafe-mcp) ([post](https://x.com/0xLogicrw/status/2100478725393686556)) - Go CLI and single-binary MCP server exposing TypeSafe judgments to Claude Desktop, Claude Code, and Codex.
- [jev-mcp (jkudish)](https://github.com/jkudish/jev-mcp) ([post](https://x.com/0xLogicrw/status/2100478725393686556)) - Proof of concept MCP for Typesafe's new Jev AI model.
- [pi-jev (y0usaf)](https://github.com/y0usaf/pi-jev) - TypeSafe Jev as a decision layer for the Pi coding agent: a measured tool-call gate plus jev_ask for typed, calibrated answers.
- [pi-warden](https://github.com/DevMortimer/pi-warden) - Guardrails for Pi built on pi-typesafe that steer the agent instead of interrupting you: Jev judges irreversible and off-task tool calls, detects stuck loops, checks unverified done claims, flags slop.
- [jev-codex-router](https://github.com/0xNatoshi/jev-codex-router) ([post](https://x.com/0xLogicrw/status/2100478725393686556)) - Per-turn model & reasoning routing for Codex, driven by Jev (TypeSafe System One): picks the model, thinking depth and speed mode for every turn.
- [skillranker](https://github.com/Dicklesworthstone/skillranker) - Rust CLI powered by Jev from TypeSafe.ai that ranks agent skills for the next step using live session context. Includes Claude Code hooks, structured JSON, abstention, and local feedback. Requires a TypeSafe API key.
- [JevRouter](https://github.com/BillionsBobby/JevRouter) - A lightweight Jev-powered router for models, tools, and subagents.
- [ask-jev-skill](https://github.com/shantanugoel/ask-jev-skill) ([post](https://x.com/KevinMagnan/status/2100587059928764726)) - Skill for Hermes, and other agents, to ask typesafe's jev.
- [hono-jev-router](https://github.com/yusukebe/hono-jev-router) - Route HTTP requests by meaning. A semantic router for Hono powered by Jev.
- [jev-pruner](https://github.com/tamaratran/jev-pruner) - Claude Code plugin: trim long Bash output with TypeSafe Jev before the model sees it.
- [winnow](https://github.com/GhalebDweikat/winnow) ([post](https://x.com/0xLogicrw/status/2100478725393686556)) - A calibrated context sieve for Claude Code: every tool result is judged by a System One model before it enters context.
- [pi-jev (TheoOliveira)](https://github.com/TheoOliveira/pi-jev) - Semantic tool routing and typed System One decisions for the Pi coding agent using TypeSafe Jev.
- [yoshi](https://github.com/compozy/yoshi) - Context-pruning proxy for Claude Code and Codex: Jev judges which history is still needed, measured not claimed. POC here now, heading soon into https://github.com/compozy/compozy.
- [pi-jev-auto-mode](https://github.com/jomatsu/pi-jev-auto-mode) - Jev (TypeSafe System One) backed auto mode for the Pi coding agent: semantically auto-approves bash, write, and edit tool calls and fails closed when a decision cannot be made.
- [snifftest](https://github.com/DanRWilloughby/snifftest) ([site](https://www.npmjs.com/package/snifftest)) - A prose linter that sniffs out AI writing tells. Zero dependencies, countable rules plus one judgment model.
- [jev-axi](https://github.com/shiftynick/jev-axi) ([site](https://www.npmjs.com/package/jev-axi)) - Agent-ergonomic CLI for TypeSafe's Jev: fast calibrated judgments (pick, rate, check, rank, triage, guard) from the shell.
- [jev-code](https://github.com/devagrawal09/jev-code) - Bounded TypeSafe Jev workflows for coding agents.
- [jev-mcp (blakestone-x)](https://github.com/blakestone-x/jev-mcp) ([post](https://x.com/0xLogicrw/status/2100478725393686556)) - MCP server for TypeSafe Jev: typed classify, score, check, match and screen for any agent, with confidence on every answer.
- [JevLint](https://github.com/huntedman/JevLint) - Configurable semantic linting powered by Jev, with file-level NOUL judgments and a magic-strings plugin.
- [jgrep](https://github.com/keltokhy/jgrep) - Grep, but the pattern is a description. Filters lines by meaning with TypeSafe's Jev decision model: ~200 ms and a thousandth of a cent per line.
- [is-malicious](https://github.com/luantak/is-malicious) - Scans a codebase for covert, deceptive, or data-stealing behavior with Jev, then reports suspicious files and line ranges before the user runs it.
- [jev-guard](https://github.com/leepokai/jev-guard) - Prompt-injection and dangerous-action guard for coding agents (Claude Code, Codex, pi, ACP), powered by Jev.
- [jev-agent-skill-router](https://github.com/GodsBoy/jev-agent-skill-router) - Typed, confidence-aware agent skill routing with TypeSafe Jev.
- [jev-seo](https://github.com/AkashPriyadarshii/jev-seo) - 100% free ₹0 agent-first SEO & GEO CLI suite and MCP server in Rust replacing Semrush and OpenSEO via DuckDuckGo and TypeSafe Jev System One.
- [jevwire](https://github.com/Brainwires/jevwire) - Jev decision layer for agents: MCP server, embeddable DecisionModel library, and an escalate-only Claude Code plugin (TypeSafe AI's Jev).
- [pi-quiet-ask](https://github.com/HyunjunJeon/pi-quiet-ask) - TypeSafe Jev as the pi coding agent's quiet decision layer.
- [typesafe-skill-router](https://github.com/DECRUX9812/typesafe-skill-router) - TypeSafe (Jev) skill routing for Hermes Agent: names the one skill worth loading, before the model call. Opt-in, stdlib only, ~$0.001 per routed turn.
- [jev (BorisLeMeec)](https://github.com/BorisLeMeec/jev) - A claude code plugin for jev.
- [jev-recruiter](https://github.com/skeptrunedev/jev-recruiter) - A Jev powered LinkedIn recruiting agent. Watch it browse relevant profiles, save links, and review evidence against your hiring brief.
- [jevscape](https://github.com/Skyvern-AI/jevscape) - RuneBench harness for TypeSafe's Jev: bounded action catalog, tick-mode controller and a live dashboard.
- [pi-jev-router](https://github.com/mejiasd3v/pi-jev-router) - Automatic model routing for Pi using TypeSafe's Jev through Vercel AI Gateway.
- [hermes-jev-approvals](https://github.com/anpicasso/hermes-jev-approvals) - PoC: TypeSafe Jev as the reviewer for Hermes Agent smart command approvals. 8.7x faster, 4.4x fewer prompts, measured on 153 real commands. Approvals only.
- [jev-mcp (arunav25)](https://github.com/arunav25/jev-mcp) - Connect JEV to MCP clients and compare its judgments against general-purpose LLMs using shared datasets and measurable accuracy.
- [riff](https://github.com/scale-venture-partners/riff) - A small, fast prose linter: ruff-style rule codes for writing, backed by TypeSafe's Jev model.
- [bicameral](https://github.com/AbdelStark/bicameral) - Hybrid coding harness: System 2 writes, System 1 (Jev) runs reflexes.
- [clean-code-review](https://github.com/frostney/clean-code-review) ([site](https://clean-code-review.vercel.app)) - Every code file in a pull request, judged against Uncle Bob's Clean Code by TypeSafe's Jev, then reviewed by Luna. Built on eve and Next.js.
- [hermes-jev](https://github.com/keeltrace/hermes-jev) - Typed System One decisions, ranking, verification, and an opt-in Hermes tool gate using TypeSafe Jev.
- [jev-cli (Nasrallah-AL)](https://github.com/Nasrallah-AL/jev-cli) ([site](https://jevcli.vectorz.app/)) - Command-line tool for TypeSafe's Jev AI model.
- [patdown](https://github.com/tyler-dot-earth/patdown) - Typesafe's jev as a "fuzzy linter". give your code an ocular patdown.
- [pi-fast-jev-compaction](https://github.com/joelhooks/pi-fast-jev-compaction) - Pi extension: verbatim context compaction with TypeSafe Jev decisions.
- [diffjury](https://github.com/raihankhan-rk/diffjury) - DiffJury — TypeSafe Jev PR risk router + code review coach.
- [jev-mcp (burnigtm)](https://github.com/burnigtm/jev-mcp) - MCP server that puts TypeSafe Jev on the coding loop in Cursor, Codex, and any MCP client.
- [jev-mcp (rashedInt32)](https://github.com/rashedInt32/jev-mcp) ([site](https://www.npmjs.com/package/jev-mcp)) - MCP server exposing TypeSafe Jev as typed, calibrated judgment tools: classify, score, check, batched ask. Ships as a Claude Code plugin.
- [jevex](https://github.com/jvsteiner/jevex) - Minimal agent loop where Jev directs control flow and a LangChain chat model writes argument values and the final response.
- [slidepilot](https://github.com/harshil1712/slidepilot) - Voice-driven semantic auto-advance for Slidev, powered by Cloudflare Agents and TypeSafe AI Jev.
- [typesafe-cli (geilt)](https://github.com/geilt/typesafe-cli) - CLI and agent skill for TypeSafe System One (Jev): typed Choice, Score, and Noul judgments.
- [ailerix](https://github.com/tylerjharden/ailerix) ([site](https://ailerix.vercel.app)) - Type-safe model router. Jev (System One) banks each request to a typed catalog route.
- [clear-head](https://github.com/VladyslavHontar/clear-head) - Claude Code Stop hook that checks an AI assistant's claims against what it actually read this session, using TypeSafe's Jev as the judge.
- [fast-dev-compaction](https://github.com/leonaaardob/fast-dev-compaction) - Codex plugin: verbatim Jev-guided context restoration around session compaction. Port of tamaratran/fast-jev-compaction to Codex lifecycle hooks.
- [git-jev-stage](https://github.com/ibrahemid/git-jev-stage) - Select Git changes for staging with a plain-language description.
- [jcm-router](https://github.com/adarshmishra07/jcm-router) - Local proxy that picks the Claude model and effort per message using TypeSafe Jev. Routes subagents, leaves your cached main chat alone.
- [jev-judgment](https://github.com/HyunjunJeon/jev-judgment) - Agent Skill: send closed coding-agent judgments to TypeSafe Jev.
- [jev-pref](https://github.com/doeixd/jev-pref) - Turn your AGENTS.md preferences into a fast, Jev-powered AI linter.
- [jev-router (prismhq)](https://github.com/prismhq/jev-router) - Open-source LLM router that uses TypeSafe's Jev to pick a model, on top of LiteLLM.
- [jev-shield](https://github.com/caiovicentino/jev-shield) - Semantic MCP firewall powered by Jev — screens every tool call, tool result, and tool description with calibrated System One verification. 94% block recall, 0 false positives, ~$0.00002/check.
- [jev-skill-gate](https://github.com/ShivamPansuriya/jev-skill-gate) - Cut Claude Code's skill manifest by ~75% with TypeSafe Jev. Scores every installed skill for relevance and hides the rest via skillOverrides — 12,750 → 3,185 tokens on a 217-skill install, for $0.0009 a session.
- [jev-system-architect](https://github.com/samtay32/jev-system-architect) ([post](https://x.com/Kantorcodes/status/2100607286498488587)) - System-architecture skill for TypeSafe AI Jev/System One — find fuzzy semantic judgment and turn it into small Choice/Score/Noul primitives.
- [jev-workbench](https://github.com/molis-ai/jev-workbench) - Build versioned judgment functions on TypeSafe's Jev once, then call the same published version from your backend over HTTP and from coding agents over MCP. The vendor key stays on your machine.
- [jevkit](https://github.com/ariel-frischer/jevkit) - Fast Rust CLI for TypeSafe Jev: typed decisions, offline linting before you pay.
- [JevPromptCoach](https://github.com/CrowdLinker/JevPromptCoach) - Claude Code plugin that scores how well you prompt a coding agent, and shows whether your habits are improving. Runs on TypeSafe's Jev model. Zero added latency.
- [jevprune](https://github.com/ibrahemid/jevprune) - Filter command output for coding agents using a task description.
- [mastra-jev-moderation](https://github.com/CodeAlive-AI/mastra-jev-moderation) - Input moderation for Mastra agents on TypeSafe Jev — one file.
- [omp-jev-compaction](https://github.com/jerryfane/omp-jev-compaction) - Verbatim Jev-scored context reduction for omp, over TypeSafe or OpenRouter.
- [pi-fast-jev-compaction (KamilPostrozny)](https://github.com/KamilPostrozny/pi-fast-jev-compaction) - Fast JEV compaction extension for pi.
- [pi-heed](https://github.com/Nyarlathoteppppp/pi-heed) - Runtime constraints for the pi coding agent: checks every side-effecting tool call against what you said, before it runs. Powered by TypeSafe Jev.
- [pi-jev-context](https://github.com/kevinpita/pi-jev-context) - Reversible context pruning for Pi, powered by TypeSafe Jev. Keep useful context without deleting session history.
- [routeKit](https://github.com/rajdhakad9826/routeKit) - Agent-native LLM model router built with JEV by TypeSafe.ai. Dynamically selects the most suitable model based on task complexity, reasoning requirements, and tool usage.
- [skill-router](https://github.com/lomeshdutta/skill-router) - Tell Claude Code which installed skill a session needs, using Jev (TypeSafe AI) for the decision and skills.sh for discovery.
- [tiershift](https://github.com/iamvatsalpatel/tiershift) - Shift every LLM call to the cheapest model that can handle it. Routing decided by TypeSafe Jev in ~180 ms. No training data. Policy in plain YAML. TypeScript and Python.
- [todo-jev](https://github.com/maker-KK/todo-jev) - ⚡ Ultra-fast, low-cost intelligent task classifier and 3-tier routing engine powered by TypeSafe Jev (System One).
- [typesafe-migration-guard](https://github.com/opaielsheikh/typesafe-migration-guard) - Automated database migration safety reviewer powered by TypeSafe AI (Jev System One model).
- [typesafe-mod](https://github.com/BeLazy167/typesafe-mod) - Claude Code mod that routes decisions to TypeSafe's Jev model: ranks installed skills per prompt, and answers the agent's own this-or-that questions when confident.
- [Antigravity-mcp-semantic-search-with-TypeSafeAi](https://github.com/greenyamao/Antigravity-mcp-semantic-search-with-TypeSafeAi) - Fast semantic code search & diff sanity auditor for AI coding assistants (Antigravity, Cursor, Claude Code) powered by TypeSafe System One.
- [ask-jev](https://github.com/omni-/ask-jev) - Utilizing Jev, the RLCD-type model provided by TypeSafe AI, to independently and cheaply judge agentic coding sessions.
- [jev-decisions](https://github.com/bojansandhaus/jev-decisions) ([site](https://openrouter.ai/typesafe/jev-1.13)) - Safety checks for Hermes and other AI agents before they act, ask for approval, or verify a change.
- [jev-git](https://github.com/AkashPriyadarshii/jev-git) - Sub-second Git pre-commit & pre-push semantic reflex gate powered by TypeSafe AI Jev.
- [jev-model-router](https://github.com/az9713/jev-model-router) ([site](https://az9713.github.io/jev-model-router/)) - Jev (TypeSafe) model router on the Vercel AI Gateway.
- [jev-predict-skill](https://github.com/DanielKillenberger/jev-predict-skill) - Predict another skill's next closed decision with TypeSafe Jev — without running that skill.
- [jev-scout](https://github.com/AkashPriyadarshii/jev-scout) - Zero-hallucination open-source repo and crate scout powered by TypeSafe AI Jev System One scoring.
- [jev-skillful](https://github.com/bestagentkits/jev-skillful) - Per-prompt capability router for coding agents: resolves installed skills, MCP servers, agents and commands against your prompt via TypeSafe Jev, and measures whether the injection actually helps.
- [jev-superpowers](https://github.com/AkashPriyadarshii/jev-superpowers) - Systematic software development framework for AI coding agents upgraded with TypeSafe Jev System One typed decisions.
- [jev-triage](https://github.com/cephalization/jev-triage) - Uses typeful jev, zero sync to pull and sync large repositories for issue triage.
- [limpet](https://github.com/noplan-inc/limpet) - A Stop hook that stops your coding agent from stopping too early. Plain-language rules, judged by jev.
- [omp-typesafe](https://github.com/siddicky/omp-typesafe) - TypeSafe AI (Jev) adversarial reviewer and typesafe_ask tool for the omp coding agent.
- [agent-gate-loop](https://github.com/Ripwords/agent-gate-loop) - Reusable GitHub Action: agent fix loop gated by checks, an AI reviewer, and TypeSafe Jev.
- [agent-handoff-gate](https://github.com/zsoXi/agent-handoff-gate) ([post](https://x.com/zxdubx/status/2100604919120121960)) - Experimental protocol for evidence-aware agent handoffs, with Jev-assisted review before results reach the lead agent.
- [check-risk](https://github.com/moezubair/check-risk) - A CLI and GitHub Action that assesses code-change risk using deterministic rules and TypeSafe Jev, recommending checks and reviewers before merge.
- [frost](https://github.com/marcus/frost) ([site](https://haplab.com)) - A flexible and configurable CLI model router using TypeSafe Jev.
- [hermes-jev-router](https://github.com/ussyverse/hermes-jev-router) - Experimental Hermes plugin: Jev-assisted model routing plans with budget and capability constraints. API access pending.
- [jev-builder-loop](https://github.com/rainbowpuffpuff/jev-builder-loop) - Grok skill: Jev as a judgment sensor in a builder-agent loop (priors × probabilities → next act).
- [jev-review (thiago-ss)](https://github.com/thiago-ss/jev-review) - Autonomous Jev pull-request review with typed decisions, calibrated approval gates, and trusted-owner escalation.
- [omp-jevens-classifier](https://github.com/STRML/omp-jevens-classifier) - Jev-powered model-judged permission gate for OMP (TypeSafe System One).
- [pi-agent-foreman](https://github.com/alexshpunt/pi-agent-foreman) ([site](https://pi.dev/packages/pi-agent-foreman)) - Send Pi agents back to work when they stop before the job is done.
- [pi-jev-code](https://github.com/KamilPostrozny/pi-jev-code) - Single-agent Pi coding coprocessor with Jev semantic gates, baseline-to-current diff review, and append-only observability telemetry.
- [pi-typesafe](https://github.com/twilwa/pi-typesafe) - Pi coding-agent extension built on the TypeSafe AI System One API (Jev).
- [pi-typesafe-jev](https://github.com/legacybridge-tech/pi-typesafe-jev) - A pi extension that exposes TypeSafe (Jev, System One) judgments as five pi tools, so a model can make narrow semantic judgments while your code and your users keep control of thresholds, weights, and actions.
- [switchboard](https://github.com/aniruddh-krovvidi/switchboard) - Guardrail + model router for LLM gateways on TypeSafe's Jev (System One model), with an independent accuracy/calibration/latency evaluation. Stdlib Python.
- [typesafe-demo-mcp](https://github.com/bestagentkits/typesafe-demo-mcp) - MCP server exposing TypeSafe System One judgments (noul, choice, score) as agent tools.
- [typesafeai-review](https://github.com/rbalch/typesafeai-review) - Using Typesafe.AI to generate diff reviews.
- [zcode-jev](https://github.com/Zahrannnn/zcode-jev) - Typed judgment layer for coding agents — gates from PRD to ship. Jev-ready, provider-agnostic.

## Browser & computer use

Browser, desktop, and mobile automation with Jev choosing the action.

- [Jev Ultrafast](https://github.com/browser-use/jev-ultrafast) ([site](https://browser-use.com), [post](https://x.com/gregpr07/status/2100411066966749359)) - Browser Use's ultrafast agent: Jev picks the operation and DOM element in one request; a small LLM only writes text when typing is needed.
- [typesafe-computer-use](https://github.com/awlevin/typesafe-computer-use) ([post](https://x.com/awlevin/status/2100262612428894676)) - Computer use for about $0.0002 a step: OCR the screen, classify the next action with TypeSafe, click. macOS.
- [mobile-jev](https://github.com/droidrun/mobile-jev) - Standalone Android agent for Mobilerun where Jev makes every decision, with a live React studio and an Uber demo.
- [jev-browser-use](https://github.com/wy-coliney/jev-browser-use) - 5–10x faster browser operations: Jev clicks, Codex thinks and verifies. Built at EZCollegeApp.
- [jev-browser](https://github.com/jkudish/jev-browser) - Browser use using Typesafe's Jev model.
- [unclutter](https://github.com/kitze/unclutter) ([post](https://x.com/thekitze/status/2100595129874817340)) - WXT browser extension: Jev-powered page clutter removal with reusable template rules.
- [jev-voice-browser](https://github.com/moritzkremb/jev-voice-browser) - Control a real browser by voice. Jev (TypeSafe System One) decides intent + target in ~300 ms per spoken word; Playwright acts — often before you finish the sentence.
- [typesafe-adblock](https://github.com/realZachi/typesafe-adblock) - 🧹 Fun project: a Chrome extension that asks a tiny AI decision model (TypeSafe Jev) "is this DOM element an ad?" and pops it off the page. BYOK, no backend, not a real ad blocker.
- [vibecheck](https://github.com/RafalWilinski/vibecheck) - Chrome extension: vibe-check your X posts with TypeSafe's Jev before you hit Post.
- [Jevbridge](https://github.com/tacticocc/Jevbridge) - ACP and MCP adapter that bridges TypeSafe Jev with any LLM — computer use and typed decisions alongside Codex, Claude, Grok, and OpenCode.
- [jev-browser (Ying-Kai-Liao)](https://github.com/Ying-Kai-Liao/jev-browser) ([post](https://x.com/0xLogicrw/status/2100478725393686556)) - Browser automation where an LLM plans and Jev (Typesafe System One) decides. Library, CLI and MCP server.
- [x-scanner](https://github.com/oso95/x-scanner) - Chrome extension that labels every post you scroll past on X with typed Jev judgments and a live cost counter.
- [live-jev](https://github.com/vinilana/live-jev) - 2D autonomous car simulation in the browser, driven by TypeSafe's Jev decision model.
- [xtags](https://github.com/manifoldor/xtags) - 在 X 的时间线上，给每条帖子标出它想让你干什么。判断来自 Jev，一个只返回概率、不生成文本的模型。
- [jot](https://github.com/runta-dev/jot) - The first general-purpose System One agent for Jev.
- [jev-social](https://github.com/socai-io/jev-social) ([site](https://socai.io/)) - Jev-powered social media research through the socai CLI.
- [jev-ego](https://github.com/romaluev/jev-ego) - TypeScript browser agent for ego lite: Jev Ultrafast indexed actions, TypeSafe Jev decisions, persistent observe/act CLI. No Chrome or Playwright.
- [jev-reviewer](https://github.com/choxos/jev-reviewer) ([site](https://jevreviewer.xera.ac)) - Data extraction for systematic reviews, quoted from the papers. Ask a trial report and its supplements your extraction form or a RoB 2, ROBINS-I, QUADAS-2 or TIDieR template; Jev points at the lines, every answer is a verbatim quote with its page, you check it and export the table. Files stay in your browser.
- [AskJev](https://github.com/ranjan2829/AskJev) ([site](https://docs.typesafe.ai/introduction)) - AskJev — Jev autopilot for any website + guard on irreversible clicks (TypeSafe System One, not Claude).
- [jev-browse](https://github.com/kyrylosyzonenko/jev-browse) - Drives a real browser with Jev making every decision and Vercel's agent-browser performing every action, with a benchmark.
- [jev-browse (0x7067)](https://github.com/0x7067/jev-browse) - Browser automation with Jev (TypeSafe) as decision model.
- [jev-browser (vinilana)](https://github.com/vinilana/jev-browser) - Hybrid browser harness: an LLM turns goals into verifiable subgoals, Jev chooses each action and DOM field, Playwright acts.
- [computer_use](https://github.com/paulsmith/computer-use-jev) - MacOS computer use driven by Jev (TypeSafe System One) as the decision maker.
- [jev-block-android-ad](https://github.com/ufec/jev-block-android-ad) - JevNoiseGate filters unwanted notifications and SMS on Android. Rather than matching keywords, an LLM decides what's noise — and only what it explicitly flags is blocked. Verification codes are matched on-device and never uploaded; anything uncertain passes through.
- [jev-browser (tontoko)](https://github.com/tontoko/jev-browser) - One grounded Jev/Playwright core: typed SDK, persistent CLI, and MCP server with native browser operations and deterministic assertions.
- [jev-frontend-qa](https://github.com/Nainish-Rai/jev-frontend-qa) - Evidence-driven frontend QA built on Jev Ultrafast and Browser Harness, with a synthetic todo demo.
- [jev-shield (vmendes90)](https://github.com/vmendes90/jev-shield) - Privacy-first Chrome extension that semantically blocks native ads, sponsored feed cards, and video ads using TypeSafe Jev.
- [jev-windows-voice](https://github.com/mstf-svndk/jev-windows-voice) - Türkçe ve İngilizce doğal konuşmayla Windows 10/11 bilgisayar kontrolü: OpenAI Realtime, local Whisper, Jev, UI Automation ve Playwright.
- [jevarena](https://github.com/raihankhan-rk/jevarena) - JevArena — two Jev agents duel in click-only browser games (Browser Use + TypeSafe Jev).
- [JevOnly](https://github.com/buluoray/JevOnly) - Pure Jev that can "type" and drive towards task completion.
- [sift (bohutang)](https://github.com/bohutang/sift) - Chrome extension that labels every post on X (Substance · Humor · Chit-chat · Promo · Junk · AI-written) with TypeSafe Jev, and hides the ones you don't want.
- [almond-fastloop](https://github.com/eriestra/almond-fastloop) - Almond-fastloop: Almond's browser computer-use rig (Chrome DevTools + TypeSafe Jev), and the Browser Use Olympics benchmark it is measured on.
- [barrunto](https://github.com/elpumberto/barrunto) - A Chrome extension that brings TypeSafe's Jev to X.com to analyze posts as you browse.
- [jev-mobile](https://github.com/Friedjof/jev-mobile) - Fast structured Android control loops with TypeSafe Jev and Mobile MCP.
- [jev-ra](https://github.com/brnyxx/jev-ra) ([site](https://brnyxx.github.io/jev-ra/)) - Browser use for coding agents, 3-5x faster than browser-use. MCP server + CLI; TypeSafe Jev decides every step in ~300 ms.
- [jevcumber](https://github.com/RubyBrewsday/jevcumber) ([site](https://jevcumber.dev)) - Write Cucumber tests with just the .feature file. No step definitions — Jev (TypeSafe AI) resolves each Gherkin step and Playwright runs it.
- [otto](https://github.com/NobleSpartan6/otto) - Open-source native computer use for macOS and Windows: TypeSafe Jev, local OCR, and selective planning.
- [psearch](https://github.com/komikat/psearch) - Parallel web search for terminals and agents, with local Chromium and Jev-guided exploration.
- [browser-use-olympics](https://github.com/eriestra/browser-use-olympics) - Browser Use Olympics by Almond: one prompt, five events, one clock. Plus fast loop, a ~200-line browser computer-use agent (Chrome DevTools + TypeSafe Jev).
- [jev-browser (KesavanKing)](https://github.com/KesavanKing/jev-browser) - Local browser automation UI that uses TypeSafe Jev to choose bounded page actions and a text model only for field values.
- [jev-browser (MahmoudAdelbghany)](https://github.com/MahmoudAdelbghany/jev-browser) - Jev-powered browser MCP for LLM agents — ~300ms decisions, no LLM tokens in the loop. Benchmark vs Playwright MCP included.
- [jev-playwright-mcp](https://github.com/krw82/jev-playwright-mcp) - Jev-augmented Playwright MCP proxy — page-state triage, prompt-injection shielding, goal-based snapshot pruning, risky-action gating. Drop-in wrapper around @playwright/mcp for any coding agent.
- [JevTest](https://github.com/CorieW/JevTest) ([site](https://jevtest.dev)) - Bounded exploratory browser testing with Jev, deterministic assertions, and replayable evidence.
- [sift](https://github.com/tylergibbs1/sift) - Chrome extension that re-ranks Google results with TypeSafe Jev and folds away sales pages and SEO filler.
- [sloppy-jevs-extension](https://github.com/neddes/sloppy-jevs-extension) - Open-source Chrome extension that filters AI-generated prose and ads with Jev.
- [turbo](https://github.com/sightmap/jev-turbo) - Jev-powered semantic browser use.

## Applications

Products, tools, and pipelines that call Jev.

- [jev-trader](https://github.com/jarrodwatts/jev-trader) ([site](https://jev-trader.vercel.app/), [post](https://x.com/jarrodwatts/status/2100356151468585346)) - One AI trade decision every Monad block. Jev on Kuru MON-USDC.
- [notra](https://github.com/usenotra/notra) ([site](https://www.usenotra.com/)) - Marketing analytics platform whose feature flag routes brand-visibility classifiers off an LLM and onto Jev boolean decisions.
- [jevmeter](https://github.com/ChetasLua/jevmeter) ([post](https://x.com/chetaslua/status/2100602714204049588)) - Put a live Jev (TypeSafe) meter on any video: every sentence scored, rendered as a 16:9 edit.
- [jeff](https://github.com/logan-markewich/jeff) - A self-hosted drop-in replacement for TypeSafe's jev, powered by GliFormer.
- [Jev-Moderation-Bot](https://github.com/brainstormity/Jev-Moderation-Bot) - Real-time Discord moderation bot: Jev evaluates messages and metadata in parallel to catch phishing, spam, and social engineering with a progressive escalation ladder.
- [commit-miner](https://github.com/devanshbatham/commit-miner) - Classify Git commit diffs and messages with Jev. Bug fixes, security fixes/CWEs, and change types.
- [blink](https://github.com/ellipsis-dev/blink) ([post](https://x.com/0xLogicrw/status/2100478725393686556)) - Codebase search powered by Jev from @typesafe-ai.
- [refgarden](https://github.com/AlbionaHoti/refgarden) - A spatial reference explorer for creators. Local Jev query choices, metadata highlights and source-linked collections.
- [jev-trade](https://github.com/aowang-ai/jev-trade) ([site](https://jev-trade.com)) - Live Jev trader on Hyperliquid.
- [Jev-Trades](https://github.com/zadescoxp/Jev-Trades) ([site](https://jevtrades.zadescoxp.com)) - Trading bot with the all new TypeSafe AI's first system one model named as Jev.
- [invalidate](https://github.com/chopratejas/invalidate) - The invalidation layer for AI memory. Every fact gets a lease; new evidence ends it. Built on TypeSafe Jev.
- [jev-mac-voice](https://github.com/brudarko/jev-mac-voice) - English full-duplex voice control for macOS with OpenAI Realtime, native Accessibility, and Jev.
- [jevlogs](https://github.com/reachjalil/jevlogs) - Open-source Jev log triage for OpenTelemetry. Score the signal before expensive LLM analysis.
- [jevocks](https://github.com/unicodeveloper/jevocks) ([site](https://jevinik.up.railway.app)) - Everyday Stocks Status with Jev.
- [ai-elo-ranker](https://github.com/opaielsheikh/ai-elo-ranker) - High-speed recursive AI Elo tournament engine powered by Jev and Swiss matchmaking.
- [jev-cli (tumf)](https://github.com/tumf/jev-cli) ([site](https://docs.typesafe.ai/introduction)) - Small dependency-free CLI for TypeSafe Jev.
- [semdecide](https://github.com/sharziki/semdecide) ([post](https://x.com/0xLogicrw/status/2100478725393686556)) - Typed semantic decisions for Unix pipelines and CI, powered by TypeSafe AI Jev.
- [jev-grug](https://github.com/mkotlikov/jev-grug) - Helping JEV speak <3.
- [typesafe-cli (y0usaf)](https://github.com/y0usaf/typesafe-cli) - Ask Jev typed questions from the shell: noul, choice, and score answers as numbers, not prose.
- [jev-rerank](https://github.com/hev/reranker) - Use Jev (TypeSafe's System One model) as a calibrated reranker: one call, up to 30 documents, a probability per document. Apache-2.0.
- [jev-voice](https://github.com/kevinbadi/jev-voice) - Talk to your Mac. Local whisper.cpp + one Jev (TypeSafe) call per command + macOS automation.
- [jevsql](https://github.com/EugeneBoondock/jevsql) - SQL with natural-language predicates, powered by TypeSafe's Jev. Filter, rank, classify and score rows by meaning — batched, cached and cost-guarded.
- [smart-switch](https://github.com/reycn/smart-switch) - Reimagined window switcher for macOS using frontier artificial intelligence. Predicted by TypeSafe's Jev model.
- [ai-provider-for-jev](https://github.com/soderlind/ai-provider-for-jev) - Connect WordPress to TypeSafe's Jev System One model for structured decisions (choice, score, noul).
- [every](https://github.com/sufianetaouil/every) - Ask a yes/no question of every function in a codebase. Ranked answers in seconds, for cents. Grep whose pattern is a question, powered by TypeSafe Jev.
- [jev-cvss](https://github.com/Red5d/jev-cvss) - Fast CVSS scoring from vulnerability descriptions using Typesafe Jev.
- [jev-pr-labeler](https://github.com/1jehuang/jev-pr-labeler) - Semantic GitHub PR labels using Jev's typed decisions, with conceptual scope instead of line counts.
- [jev-semgrep](https://github.com/uehaj/jev-semgrep) - Grep by meaning, across languages. TypeSafe Jev scores every line against a meaning; combine meanings with AND/OR/NOT. 意味で探す grep。日本語で英語を、英語で日本語を検索できる.
- [jev-tree](https://github.com/reachjalil/jev-tree) ([site](https://reachjalil.github.io/jev-tree/)) - Recursive Jev choice over a taxonomy. Select from more than 255 options without breaking TypeSafe Jev's choice cap.
- [jevibe-check](https://github.com/sriganesh/jevibe-check) - A live tone labeler for Bluesky posts and drafts, using TypeSafe's Jev API.
- [jevify (Mintzs)](https://github.com/Mintzs/jevify) - An optimized inference engine to turn LLMs into Jev-like machines: optimized for quick, lightweight, and accurate decision-making, classification, and scoring.
- [typesafe-jev](https://github.com/gtaras7/typesafe-jev) - Screen a folder of CVs with the TypeSafe Jev decision model: typed judgments, an editable policy, free re-scoring.
- [btc-jev-signal](https://github.com/WebGrga/btc-jev-signal) - Experimental multi-horizon BTC signal generator using TypeSafe Jev probabilities and Binance market data.
- [commentcop](https://github.com/ntedvs/commentcop) - Put your code comments on trial. Powered by Jev.
- [Jackalope](https://github.com/Jackalope-Dev/jackalope) ([site](https://jackalope.dev)) - Desktop GUI for agentic coding that routes tasks across local agents and accounts, with Jev picking the best agent per task, running basic code-review checks, and supplying context.
- [jev-cli](https://github.com/jtsang4/jev-cli) - CLI for TypeSafe AI's Jev evaluation model — typed questions in, structured JSON answers out.
- [jev-document-classification](https://github.com/Charlyhno-eng/jev-document-classification) - JEV Document Classification enables the rapid and cost-effective classification of text-based documents using AI, leveraging TypeSafe's "System One" model.
- [JevTicktRouter](https://github.com/GhrezaKh74/JevTicktRouter) - A .NET 10 and React 19 application for fast, structured AI-powered ticket triage using TypeSafe Jev.
- [qualm](https://github.com/qddegtya/qualm) - Typed decisions from a System One model. An uncertain answer is a different type from a confident one — and the compiler makes you handle it.
- [citation-verifier](https://github.com/MarissaFamularo/citation-verifier) ([site](https://verify.papertrellis.com)) - Check whether each cited paper supports the sentence citing it. Claude proves the quote, TypeSafe's Jev scores it, a human decides.
- [dmx.to](https://dmx.to) ([post](https://x.com/thekitze/status/2100570975175877106)) - X client with Jev smart rules that filter the timeline by usefulness, type, and topic.
- [draftpulse](https://github.com/pekth/draftpulse) - Experimental: live X draft viral scorer powered by TypeSafe Jev.
- [emoji-jev](https://github.com/colinmcdermott/emoji-jev) - Emoji autocomplete at the speed of typing. TypeSafe AI Jev on a Whop-hosted TanStack Start app.
- [Jev Classifier](https://jevclassifier.vercel.app) ([post](https://x.com/DagmawiBabi/status/2100618066459553796)) - Local Telegram channel JSON analyzer for intent, quality, sentiment, and speaker tone.
- [jev-audio-beeper](https://github.com/santos-sanz/jev-audio-beeper) - Low-latency audio censorship POC using Jev typed decisions and ffmpeg.
- [jev-resume-analyzer](https://github.com/awun8191/jev-resume-analyzer) - CV diagnostics and job alignment with TypeSafe Jev, React and FastAPI.
- [jevegis](https://github.com/0xArx/jevegis) ([site](https://jevegis.vercel.app)) - Guardrails for LLM apps in one API call. Prompt injection, jailbreaks, leaks, unsafe content. Built on TypeSafe Jev. MIT.
- [mimicry](https://github.com/jxucoder/mimicry) - Rewrite AI drafts in your own voice with a bounded TypeSafe feedback loop.
- [pkg-gate](https://github.com/hemanth/pkg-gate) ([site](https://hemanth.github.io/pkg-gate/)) - Pre-install security gate for npm lifecycle scripts using TypeSafe System One.
- [s1s](https://github.com/cpaczek/s1s) ([site](https://s1s.iar.dev)) - System One Search: navigate and trace code with TypeSafe judgments and repository evidence.
- [scam-shield](https://github.com/ShupingR/scam-shield) ([site](https://scam-shield-seven-ecru.vercel.app)) - Scam text message filter powered by TypeSafe's Jev model.
- [transcript-scorecard](https://github.com/brandonbryant12/transcript-scorecard) - ACME live support-call scoring demo with TypeSafe AI, Effect, SQLite, React, Vite, and Turborepo.
- [typesafe-comment](https://github.com/Hexdigest123/typesafe-comment) - Small Python package that uses typesafe.ai to evaluate code comments on certain heuristics.
- [typesafe-triage-guard](https://github.com/shivam2003-dev/typesafe-triage-guard) - Three composable judgment pipelines on TypeSafe's Jev: support-ticket triage, observability alert triage, and a deploy-risk gate.

## Games & simulations

Games and simulations with Jev making the moves.

- [typesafe-mario](https://github.com/fhshaik/typesafe-mario) - A TypeSafe/Jev agent that plays Super Mario Bros. from structured emulator state.
- [jev-drone](https://github.com/RomanSlack/jev-drone) - Camera-only autonomous drone in MuJoCo with a small judgment model (TypeSafe Jev) in the loop at 2.5Hz.
- [typesafe-snake](https://github.com/sorrycc/typesafe-snake) - Snake auto-played by TypeSafe's Jev model: one System One choice per tick, legal moves and facts generated in code.
- [tsai-sc](https://github.com/phyous/tsai-sc) - TypeSafe Jev controls original StarCraft shareware through keyboard and mouse with recorded action probabilities.
- [mario-jev](https://github.com/shantanugoel/mario-jev) - Python prototype that plays NES Super Mario Bros. from structured RAM observations, with Jev answering focused movement and jump questions.
- [Jev Driving Lab](https://github.com/kavehmz/typesafe-playground) ([post](https://x.com/kavehmz/status/2100616111771238881)) - Interactive experiments from support routing to a 3D driving simulation: structured sensor state in, typed steer, brake, and overtake decisions out.
- [heist-one](https://github.com/AbdelStark/heist-one) - Observable browser stealth game: Jev makes typed guard judgments while deterministic code owns the world.
- [OneVOneJev](https://github.com/emrickgarrett/OneVOneJev) - 1v1 Jev quickscope arena — Three.js + TypeSafe System One.
- [jev-reflex-autonomy-lab](https://github.com/khordoo/jev-reflex-autonomy-lab) - Multi-drone autonomy lab demonstrating TypeSafe Jev reflex decisions with optional System 2 strategy guidance.
- [jev-askable-arm](https://github.com/TarunTomar122/jev-askable-arm) - Zero-shot English goals on a sim Franka. Jev chains hardcoded primitives.
- [jev-tetris (trungdq88)](https://github.com/trungdq88/jev-tetris) ([site](https://jev-tetris.vercel.app)) - Jev play Tetris in real-time against other AI models.
- [jev2048 (erhanmeydan)](https://github.com/erhanmeydan/jev2048) - TypeSafe'in Jev karar modeli gerçek bir online 2048 sitesinde oynuyor — hamle başına tek API çağrısı, tek anahtar.
- [jev-doom-agent](https://github.com/lukaske/jev-doom-agent) - A browser-native Doom agent experiment with structured spatial state, composable AI controls, live decision telemetry, and a Chocolate Doom WebAssembly runtime.
- [jev-gomoku (XieChengYuan)](https://github.com/XieChengYuan/jev-gomoku) ([site](https://xiechengyuan.github.io/jev-gomoku/)) - 弈瞬：双 Jev 五子棋九宫格输入实验台，逐手查看模型决策，支持真实对局回放与实时对战。
- [jev2048](https://github.com/KyleKreuter/jev2048) - Let Jev (TypeSafeAI) solve 2048.
- [rubikjev](https://github.com/0xtrou/rubikjev) ([site](https://rubikjev.solo.engineer)) - Challenge the Jev's intelligence in Rubik Cube puzzles.
- [tsai-civ2](https://github.com/phyous/tsai-civ2) - TypeSafe Jev plays original Civilization II in a browser, with live action probabilities. Experimental full-game harness.
- [Agent-JEV-Tetris](https://github.com/Yasserbhb/Agent-JEV-Tetris) - Using the new model JEV to play the game tetris.
- [beatjev](https://github.com/lambertsj/beatjev) ([site](https://beatjev2it.jlamberts86.workers.dev), [post](https://x.com/j_lamberts/status/2100592556081832131)) - Browser game: try to beat Jev at spotting a spam message.
- [casse-brique-typesafe](https://github.com/Para-FR/casse-brique-typesafe) - A Next.js brick breaker whose paddle is controlled in real time by TypeSafe AI's Jev model. Built with Claude Code.
- [chess-jev](https://chess-jev.loomens.com) ([post](https://x.com/BuildWithKhalil/status/2100364868733812987)) - 3D chess where Jev plays both sides, or you jump in.
- [cyber-breach-jev](https://github.com/rchovatiya88/cyber-breach-jev) - Cyber-Breach: The Jev Protocol - A tactical cyberpunk arena combat game powered by TypeSafe AI Jev System One decision model.
- [Game Plan](https://game-plan.adriaansendennis.workers.dev/play) ([post](https://x.com/DennisAdriaans/status/2100616874719347136)) - Small game that tests how Jev handles unknown input.
- [Hollow Creek](https://hollow-creek-sigma.vercel.app) - Village NPCs that judge you each tick, deciding what to do and how they feel, instead of chatting.
- [hundred](https://github.com/jammaru/jev-lab) - 100 AI NPCs live in a tiny town. Jev chooses the next action; the world writes the story.
- [Jev Arcade](https://jev-arcade.vercel.app/duel) ([post](https://x.com/Neel490/status/2100618722318688753)) - Krunker-style 1v1 FPS where Jev decides move, aim, ADS, fire, and jump at about 9 Hz.
- [Jev board games](https://jevboardgames.everpaper.app/) ([post](https://x.com/MarcoIannello/status/2100622449268191524)) - Playable board games driven by Jev decisions.
- [Jev Pac-Man](https://jev-pacman.ephraimduncan.com) - The maze as JSON; Jev picks the turn at each junction in real time.
- [Jev Tetris](https://jev-omega.vercel.app) - Jev picks rotation and column from holes, stack height, and bumpiness.
- [jev-bfs](https://github.com/komikat/jev-bfs) - Wikipedia link races with direct Jev ranking and a live terminal display.
- [jev-games](https://github.com/shantanugoel/jev-games) - Visual Jev lab for multiple games and emulator platforms.
- [jev-gomoku](https://github.com/mizchi/jev-gomoku) - MoonBit client for Jev plus a Jev-vs-Jev gomoku match, with timing logs.
- [jev-play-ping-pong](https://github.com/Icohen007/jev-play-ping-pong) ([site](https://indispensable-lingonberry-hot.julius.site/)) - Jev plays browser table tennis in real time: structured telemetry, typed decisions, ordinary Chrome inputs, and auditable evidence.
- [jev-snake](https://github.com/iammusham/jev-snake) - An experimental Snake environment where the game engine owns deterministic rules and TypeSafe AI's Jev makes the movement decision from structured state on every tick.
- [jev-t-rex-runner](https://github.com/joshlarsen/jev-t-rex-runner) ([site](https://devfolioco.github.io/t-rex-runner-game/)) - Chrome dino game played by Typesafe AI Jev model.
- [jev-tetris](https://github.com/MachineLearning-Nerd/jev-tetris) - A visual TypeSafe demo where Jev chooses verified Tetris placements.
- [jev.mods](https://github.com/Hardel-DW/jev.mods) - Minecraft mod where Jev tries to finish the game from scratch without a scripted route.
- [last-exit](https://github.com/0x963D/last-exit) ([site](https://gate.fade.tools)) - A cyberpunk border encounter powered by TypeSafe Jev. Bluff the guard. Inspect the receipts.
- [pdoom-protocol](https://github.com/onionminionops-beep/pdoom-protocol) - USER + JEV: P(DOOM) PROTOCOL — co-op platform shooter where TypeSafe Jev plays alongside you.
- [pong-jev](https://github.com/safzanpirani/pong-jev) - TypeSafe's Jev plays Atari Pong. One typed Choice question per frame, no coordinates sent to the model.
- [ps2-ai-agent](https://github.com/opaielsheikh/ps2-ai-agent) - Autonomous PlayStation 2 AI Agent with real-time visual telemetry HUD powered by TypeSafe Jev System One.
- [river-oaks](https://github.com/BunsDev/river-oaks) - NPCs of River Oaks Houston, Texas using Jev to power NPCs.
- [river-run-typesafe](https://github.com/ashaazami/river-run-typesafe) - River shooter game in Python, inspired by Atari's River Raid, played by a TypeSafe AI pilot.
- [roverlab](https://github.com/juancamiloqhz/roverlab) - A 3D planetary rover sandbox for experimenting with autonomous decisions using TypeSafe AI.
- [shady-town](https://github.com/tpaulshippy/shady-town) - Shady Town: social-deduction party game for the living room TV, moderated by TypeSafe Jev.
- [siege](https://github.com/vnmoorthy/siege) ([site](https://vnmoorthy.github.io/siege/)) - SIEGE: 200 people vs one agent. A typed action gate (TypeSafe System One) that learns from every breach, evaluated by W&B Weave, hardened by a defender loop. Built at CoreWeave Hacks: Agent Loops 2026.
- [snake-jev](https://github.com/siroccomask/snake-jev) - Snake controlled by parallel Jev assessments, with one API call per game tick.
- [terrarium](https://github.com/TheGali/terrarium) - A sandbox where a TypeSafe System One model presses the controls of a small creature. Code runs the world.
- [typesafe-3d-chess](https://github.com/malDuffin/typesafe-3d-chess) - 3D chess powered by TypeSafe AI (Jev). AI vs AI by default, or play either side. Multiple difficulty levels.
- [typesafe-chess](https://github.com/TholeG/typesafe-chess) - Chess where both players are TypeSafe's Jev model: every move is a typed Choice decision.
- [typesafe-minecraft-demo](https://github.com/ellistev/typesafe-minecraft-demo) - A Minecraft Java player controlled by TypeSafe AI, with live decisions, Canadian flag building, and a side-by-side dashboard.

## Demos & playgrounds

Live demos and playgrounds.

- [killmyidea](https://github.com/monteduro/killmyidea) ([site](https://killmyidea.stemonte.io)) - Describe your startup idea. Jev decides: kill it, fix it or ship it.
- [jev-me](https://github.com/jon-devlapaz/jev-me) - A grill-me style interrogation of your idea, with Jev doing the grilling.
- [typesafe-ai-playground (BunsDev)](https://github.com/TypeSafeAI/typesafe-playground) ([site](https://jev.works)) - Community TypeSafe AI playground: 110 use cases, games, dilemmas and model challenges, with editable prompts, A/B comparisons and a mobile-friendly UI.
- [flue-jev-demo](https://github.com/matthewp/flue-jev-demo) - Flue agent routing with TypeSafe Jev through Cloudflare AI Gateway.
- [Instinct](https://github.com/joevidev/ui-generator-instinct-jev) ([site](https://ui-generator-instinct-jev.vercel.app)) - Instinct: describe a case in free text and Jev picks the UI from a fixed catalog without generating a line of code or copy.
- [jev-autopilot](https://github.com/arielweinberger/jev-autopilot) - This demo uses Jev from TypeSafe AI to autonomously fly a drone in a random city from point A to point B, avoiding obstacles along the way. A trip costs $0.01.
- [jev-system-one](https://github.com/haseeb-heaven/jev-system-one) - A polished OpenAI + TypeSafe Jev terminal interface for answers with transparent decision reports.
- [Should AI Kill Us All?](https://github.com/hellogumbo/should-ai-kill-us-all) ([site](https://shouldaikillusall.com)) - Live verdict page: feeds Jev the day’s Florida Man, odd-news, politics and world headlines and asks all three primitives whether AI should kill us all, refreshed every ten minutes.
- [typesafe-ai-playground](https://github.com/nickthompson480/typesafe-ai-playground) - Community TypeSafe AI playground: 110 use cases, games, dilemmas and model challenges, with editable prompts, A/B comparisons and a mobile-friendly UI.
- [clarity-judge](https://github.com/TypeSafeAI/clarity-judge) ([site](https://judge.jev.works)) - Multi-axis writing quality checker powered by TypeSafe AI's Jev model. Separate named checks, each with its own verdict and confidence.
- [got-jev](https://github.com/phureewat29/jev-got) ([site](https://jev.phureewat.com)) - Jev (TypeSafe AI) PoC through Game of Thrones.
- [gpt-vs-jev](https://github.com/TanayPadar/gpt-vs-jev) ([site](https://gptvsjev.vercel.app), [post](https://x.com/nerdytanay/status/2100465397267144815)) - Compare GPT generated language with JEV structured Noul decisions on the same input.
- [guard-jev](https://github.com/NorbertBodziony/guard-jev) ([site](https://guard-jev.vercel.app)) - Comment-moderation playground: paste a comment, Jev decides what to do with it.
- [harden-jev-decides](https://github.com/tylerjharden/harden-jev-decides) - JEV picks which stream idea becomes the live MVP. TypeSafe System One decision board.
- [intelliprompter](https://github.com/finetuningsingh/intelliprompter) ([site](https://finetuningsingh.github.io/intelliprompter/)) - A teleprompter of talking points that checks each one off as you cover it, using TypeSafe's Jev Score questions.
- [jev_projects](https://github.com/X0EF/jev_projects) ([site](https://jev-projects.vercel.app)) - List of projects that use typesafe's jev.
- [jev-playground (Little-Planet-Labs)](https://github.com/Little-Planet-Labs/jev-playground) ([site](https://jev-playground-zeta.vercel.app)) - A small Next.js app for experimenting with TypeSafe AI's Jev model (System One).
- [jevs-sprint-planning](https://github.com/notque/jevs-sprint-planning) ([site](https://jevs-sprint-planning.vercel.app)) - Four AI developers run a software sprint, each powered by TypeSafe's Jev model. Watch them claim tickets, code, review, deploy, and fight fires — with live probability bars, latency, and cost per decision. Bring your own API key or play demo mode free.
- [toolgate](https://github.com/ndolinschi/toolgate) ([site](https://toolgate.vercel.app)) - Agent tool/MCP call gate — allow / ask_human / deny via TypeSafe Jev.
- [typesafe-ai-playground (markjaquith)](https://github.com/markjaquith/typesafe-ai-playground) ([post](https://x.com/0xLogicrw/status/2100478725393686556)) - A playground for experiments around Jev, TypeSafe's System One model.
- [typesafe-arena](https://github.com/DeepBlueDynamics/typesafe-arena) - A playground for TypeSafeAI's Jev Model.
- [cartshield](https://github.com/ndolinschi/cartshield) ([site](https://cartshield.vercel.app)) - CartShield — SMB checkout fraud disposition via TypeSafe Jev.
- [Crowdcheck](https://crowdcheck-ai.vercel.app/) - Test a post against 10,000 synthetic personas before you publish it.
- [extremely-specific-council](https://github.com/cbetz/extremely-specific-council) ([site](https://extremely-specific-council-five.vercel.app)) - Twelve members. Zero qualifications. A playful TypeSafe AI council with animated votes, inspectable decisions, and shareable verdicts.
- [harnessjudge](https://github.com/ndolinschi/harnessjudge) ([site](https://harnessjudge.vercel.app)) - Judge agent steps — ok / retry / escalate / stop via TypeSafe Jev.
- [hiresignal](https://github.com/ndolinschi/hiresignal) ([site](https://hiresignal-opal.vercel.app)) - HireSignal — resume first-pass fit+interview via TypeSafe Jev.
- [human-compiler](https://github.com/asfarsadewa/human-compiler) ([site](https://human-compiler.asfarlab.fun)) - A compiler for human language. Paste text, get diagnostics. Measured by TypeSafe Jev.
- [Jev Gamecast](https://github.com/narulaskaran/jev-data-questions) ([site](https://jev-gamecast.vercel.app)) - Jev Gamecast: replay-first React app that asks Jev typed questions about live sports data.
- [Jev mood demo](https://jev-demo.vercel.app) - Talk nicely or nastily over time; structured state tracks the mood.
- [Jev Room](https://jev-room.moe136231.chatgpt.site) - One sentence becomes six room settings. Jev chooses, the app renders.
- [jev-ad-preflight](https://github.com/cardotrejos/jev-ad-preflight) - Typesafe/Jev public X demo.
- [jev-board-lab](https://github.com/WebGrga/jev-board-lab) - Interactive explorer and Jev question workspace for Jev Board datasets.
- [jev-bun1](https://github.com/heiwa4126/jev-bun1) - TypeSafe の Jev を TypeScript SDK で使ってみる最初の 1 歩.
- [jev-demos](https://github.com/Bud-ro/jev-demos) - Demos to test the effectiveness of TypeSafe's "Jev" System One Model.
- [jev-dev](https://github.com/n-yokomachi/jev-dev) - 同じ発言を jev と LLM の両方に判定させ、感情の変動値のズレと応答速度を1画面で見比べるデモ（affectus + Vercel AI Gateway）.
- [jev-paper-judge](https://github.com/JacobLinCool/jev-paper-judge) ([site](https://jev-paper-judge.jacob.workers.dev)) - Feedback on your paper in seconds.
- [jev-playground (wustep)](https://github.com/wustep/jev-playground) ([site](https://jev-playground.vercel.app)) - Can a System One model steer music? Jev picks the plan (enums only); code renders sheet, audio and MIDI.
- [jev-should-i-apply](https://github.com/cardotrejos/jev-should-i-apply) - Typesafe/Jev public X demo.
- [jev-user-jury](https://github.com/cardotrejos/jev-user-jury) - Typesafe/Jev public X demo.
- [jevplay](https://github.com/ndolinschi/jevplay) ([site](https://jevplay.vercel.app)) - TypeSafe Jev playground — custom Choice/Score/Noul builder with live distributions.
- [Job Risk Analyzer](https://github.com/WeSecureYou/Jev-test) ([site](https://jev-test.vercel.app)) - Job Risk Analyzer: CLI and REST API that uses Jev to score an occupation's exposure to AI-driven layoffs and its resilience.
- [lanebreak](https://github.com/ndolinschi/lanebreak) ([site](https://lanebreak.vercel.app)) - LaneBreak — support ticket priority+routing via TypeSafe Jev.
- [mcpmatch](https://github.com/ndolinschi/mcpmatch) ([site](https://mcpmatch.vercel.app)) - Match user goals to MCP catalog (two-stage) via TypeSafe Jev.
- [Probably](https://github.com/JordiParraCrespo/typesafe-ai-trading-showcase) ([site](https://typesafe-ai-trading-showcase.vercel.app)) - Probably: live BTC, ETH, and XRP prices with a shared TypeSafe buy-or-wait demonstration. No trades placed.
- [pulselane](https://github.com/ndolinschi/pulselane) ([site](https://pulselane-topaz.vercel.app)) - PulseLane — clinic triage decisions via TypeSafe Jev.
- [Search-Function-Test](https://github.com/Shifros/Search-Function-Test) ([site](https://search-function-test.vercel.app)) - A test project based on Jev AI, the goal is to build a search function for a blog/article website that has 100s of articles to search from, So the user can actually use the search as chat to question anything and find related answers/articles.
- [spendbrake](https://github.com/ndolinschi/spendbrake) ([site](https://spendbrake.vercel.app)) - Agent budget brake — continue / downgrade_model / stop via TypeSafe Jev.
- [swarmrouter](https://github.com/ndolinschi/swarmrouter) ([site](https://swarmrouter.vercel.app)) - Route tasks to research/code/browser/support/writer agents via TypeSafe Jev.
- [trustgate](https://github.com/ndolinschi/trustgate) ([site](https://trustgate-mu.vercel.app)) - TrustGate — indie media T&S gate via TypeSafe Jev.
- [TypeSafe Typewriter](https://typesafe-demo.val.run/) ([post](https://x.com/stevekrouse/status/2100287368221659289)) - Val Town demo where 16 typed judgments update live as you type.
- [typesafe-image-diffusion](https://github.com/Wizhill05/typesafe-image-diffusion) ([post](https://x.com/just_aryansingh/status/2100617080395710748)) - Diffusion-style pixel art out of a classifier: 256 parallel per-pixel Jev questions plus refinement passes.
- [Yes / No](https://yesno.coderai.dev) - Free, no-signup Noul demo. Ask a question, get yes, no, or maybe, with web search when needed.

## Benchmarks & research

Benchmarks, evals, calibration studies, and open replicas.

- [SemIf](https://github.com/TheoLeeCJ/SemIf) ([site](https://openjev.com), [post](https://x.com/hhkkmon/status/2100443314957038010)) - Semantic ifs from open models, on a 3090 at home. Independent; not affiliated with Jev or TypeSafe.
- [jevlike](https://github.com/vinnylarouge/jevlike) ([post](https://x.com/hhkkmon/status/2100443314957038010)) - Train a small model that chooses among a changing list of text options, one probability per option in a single pass. Includes Doom, chess, and Wikispeedia demos.
- [jev-visual](https://github.com/hr98w/jev-visual) - An educational Jev-like visual inference experiment on Apple Silicon: shared context, direct candidate scoring, and local visual demos.
- [jev-eval-agent](https://github.com/vinilana/jev-eval-agent) - Personal-assistant agent built on Vercel's eve with 100 mocked tools, measuring how many steps it takes when Jev picks the tool versus the LLM.
- [reflex](https://github.com/kshetrajna12/reflex) - A small open decision model: state + typed questions -> calibrated probabilities. A Jev / System One re-creation on Qwen3.5.
- [openjev](https://github.com/razorback16/openjev) ([site](https://codiv.ai)) - Open, Jev-compatible System One decision server on DiffusionGemma.
- [open-jev (daseinlabs)](https://github.com/daseinlabs/open-jev) - One-pass option scoring with a local Gemma 3 4B on Apple silicon via MLX, inspired by jevlike, with a Doom demo.
- [typesafe-ai-benchmark](https://github.com/iammrduncan/typesafe-ai-benchmark) ([site](https://hackersintheloop.org/), [post](https://x.com/iamMrDuncan/status/2100467548298899918)) - This is a LLM Gateway that mimics typesafe ai structured output. Like an imposter Jev.
- [decider](https://github.com/Mapika/decider) - One-pass typed decisions with calibrated probabilities (System One style model), fine-tuned from Qwen3.5-2B.
- [jevmlx](https://github.com/bnsd55/jevmlx) ([post](https://x.com/beni_il_/status/2100617387116568956)) - Jev-style parallel constrained decisions for any MLX model on Apple Silicon. Typed, schema-valid JSON in one forward pass.
- [mini-jev](https://github.com/r-ms/mini-jev) - Mini-Jev: what a Jev-style typed-decision interface looks like on a frozen Qwen3-4B — read the option letter's logits instead of generating JSON. Preregistered experiment, results, teaching bench.
- [open-jev (JoshuaSP)](https://github.com/JoshuaSP/open-jev) - Typed JSON inference with DiffusionGemma, with Every and Jev benchmark results.
- [jev-on-a-laptop](https://github.com/rorshopping/jev-on-a-laptop) ([post](https://x.com/hhkkmon/status/2100443314957038010)) - Unofficial study: Jev-style parallel typed decisions on stock 1.5B-8B models on an Apple Silicon laptop. Benchmarks, research notes, and a Hugging Face Space demo.
- [jev-column-race](https://github.com/goodrahstar/jev-column-race) ([site](https://jev-column-race.vercel.app)) - Jev vs Gemini 3.8 Flash: labelling 1,000 app reviews, 4.1× faster and 7× cheaper.
- [LitJev](https://github.com/zhengxuyu/litjev) ([post](https://x.com/yuzxfred/status/2100652136878981337)) - A reproduction of Jev that turns any Qwen model into a fast decision model, serving the same /v1/systemone schema (Choice, Score, Noul) with no training and no generated answer text.
- [jev_local](https://github.com/Argos1111/jev_local) - Replicating Jev with a local LLM.
- [Verdict-open-jev](https://github.com/Heman10x-NGU/Verdict-open-jev) - Non-autoregressive decision engine on ModernBERT (151M) with calibrated uncertainty (RLCD), TypeSafe AI Jev benchmark audit, and in-browser WebGPU playground.
- [jev-capability-atlas](https://github.com/Zaious/jev-capability-atlas) - Independent, evidence-based map of when TypeSafe's Jev actually holds up vs. breaks down — real API-call receipts, not a leaderboard. 中文為主的雙語 repo。
- [jevbetter](https://github.com/olanotolu/jevbetter) - A stronger one-pass scorer over a variable list of text options: hashed n-gram encoder, rival-aware attention, gated head, temperature scaling, benchmarked against jevlike.
- [Jev_apps](https://github.com/JackZeng/Jev_apps) - 看看 Jev 能做什么：用中英文讲清热门应用、工作原理和各自优缺点。Explore Jev apps with plain-language examples, explanations, and comparisons.
- [jev-benchmarks](https://github.com/AbdelStark/jev-benchmarks) - Probability-aware evaluation for typed decision models: calibration, selective risk, latency, and reproducible benchmarks.
- [openjev (zhihz)](https://github.com/zhihz/openjev) - Local bilingual probability decisions from context, questions, and candidate answers. Independent research preview inspired by TypeSafe Jev.
- [TypeAR](https://github.com/TypeAR-AI/TypeAR) ([site](https://typear.ai/), [post](https://x.com/MingtianZhang/status/2100579236960682120)) - Type-safe one-decision-per-token decoding engine for autoregressive LLMs, inspired by Jev.
- [system-one](https://github.com/sgoedecke/system-one) - Batched single-token choice inference for open language models, compatible with TypeSafe.
- [openvons](https://github.com/genai-craft/openvons) ([site](https://genai-craft.com)) - Openvons (open-Jev): 有限選択肢に確率で答える判断層 — テキスト / 画像 / 日本語音声コマンド.
- [typesafe-local](https://github.com/aabolfazl/typesafe-local) - Inspired by TypeSafe Ai, Ask a local LLM typed questions, get calibrated probabilities instead of text. Structured output without generation or parsing. MLX / Apple Silicon.
- [jev_stock](https://github.com/sosopop/jev_stock) - An experimental JEV-powered framework for forecasting short-term stock price direction from structured market data.
- [jev-korean-benchmark](https://github.com/mahlernim/jev-korean-benchmark) ([site](https://ahn-lab.org/jev-korean-benchmark/)) - Reproducible early-access evaluation of Jev on Korean understanding and medical text, with runtime and cost evidence.
- [jev-lm](https://github.com/y0usaf/jev-lm) - A word-level language model whose output layer is Jev: n-gram drafter, Noul chunk verification, bits-per-token eval.
- [jevcal](https://github.com/abhixhek/jevcal) - Stop guessing confidence thresholds: calibrate, threshold, and drift-check typed decision models (TypeSafe Jev) against an LLM teacher.
- [jevfire](https://github.com/kikoncuo/jevfire) ([site](https://kikoncuo.github.io/jevfire/)) - JEV-inspired parallel decisions for CUDA LLMs. One context, many decisions. vLLM API, game-agent examples, and reproducible benchmarks.
- [LegalForecastBench](https://github.com/johnhughes3/LegalForecastBench) - LegalForecast-MTD benchmark alpha and official evaluation workflows.
- [open-alternative-jev](https://github.com/ikermoel/open-alternative-jev) ([site](https://huggingface.co/spaces/IkerMoel/open-alternative-jev)) - Open alternative to Jev: typed, calibrated decisions from any open-weights LLM in one forward pass (HF + vLLM), with benchmarks.
- [system-one-open](https://github.com/mithalouni/system-one-open) - Open replica of TypeSafe's Jev: typed calibrated decisions in one forward pass, on Gemma 4 E2B / Gemma 3 270M (Modal).
- [von](https://github.com/wfzyx/von) - The open-source System One decision model. Sub-15ms, non-autoregressive, local drop-in alternative to TypeSafe Jev.
- [jev-search-rerank-eval](https://github.com/zhuyansen/jev-search-rerank-eval) - Does a TypeSafe Jev rerank beat embedding search? Graded relevance eval (9,831 pairs, 164 zh/en queries) over the Agent Skills Hub catalog, with the judge-circularity bias measured.
- [jevify](https://github.com/altryne/jevify) ([site](https://thursdai.news)) - An agent skill to discover TypeSafe Jev opportunities, design typed questions, and learn from recent community experiments.
- [daf-jev](https://github.com/docxology/daf-jev) - Daf-jev: composable Python toolkit for TypeSafe's Jev (System One) decision API — question builders, confidence gates, evaluator, calibration, CLI, MCP server, agent skill.
- [jev-behavior-study](https://github.com/RINNECODER/jev-behavior-study) - Independent Jev 1.13.0 behavior study: report, controlled prompt experiments, raw results, and offline verification.
- [jev-chat](https://github.com/adhyaay-karnwal/jev-chat) - A chatbot from typed Jev decisions: hierarchical speculative decoding over System One probabilities.
- [jev-curate](https://github.com/AkashPriyadarshii/jev-curate) ([site](https://crates.io/crates/jev-curate)) - High-throughput synthetic & pretraining dataset sifter powered by TypeSafe AI Jev (api.typesafe.ai). Stream, filter, and score Parquet & JSONL datasets at 1,500+ rows/sec using System One typed decisions (Choice, Score, Noul).
- [jev-little-airways](https://github.com/lbotinelly/jev-little-airways) - A show-and-tell capability study for Jev, TypeSafe's System One decision model.
- [jev.nu](https://github.com/cablehead/jev.nu) - Nushell module for the TypeSafe System One API: typed decisions with calibrated probabilities.
- [calibre](https://github.com/FirasSX914/Janus) - Calibration and confidence-based routing measured on Banking77: 80.2% accuracy at $0.103 per 500 decisions.
- [claude-jev](https://github.com/buchmark/claude-jev) - Claude Code plugin that scores review findings, debug hypotheses and design options with TypeSafe's Jev — calibrated probabilities instead of one more opinion.
- [jev-align](https://github.com/caiovicentino/jev-align) - Calibrated alignment verifier for LLM responses and agent plans — powered by Jev.
- [jev-benchmark](https://github.com/wondertwins/jev-benchmark) - Benchmarks and a playground for TypeSafe's Jev (System One) model: chess, and who-is-the-player-talking-to for speech-to-text game NPCs.
- [jev-for-engineers](https://github.com/Foadsf/jev-for-engineers) - Eight minimal working examples of TypeSafe's Jev (a System One model) applied to mechanical and electrical engineering: CAD/CAE/CAM routing, FEM result triage, DFM screening, BOM alignment, hallucination-proof extraction. Zero dependencies.
- [jev-gate](https://github.com/MongLong0214/jev-gate) - Not every coding task needs your best model. Experimental Jev-powered model routing for Claude Code — V3 prototype runs today, V4 routes at the task boundary.
- [jev-harness](https://github.com/AntonioCoppe/jev-harness) - Decision harness for TypeSafe Jev — confidence gates, shadow mode, recipes, and evals. Claude CLI 48.9s → Jev 1.3s on the same row-filter job.
- [jev-mode](https://github.com/ddfeyes/jev-mode) - I kept watching coding agents burn context on decisions that aren't hard - triage 400 tickets, tag 600 files, route to one of six teams. jev-mode moves those verdicts to a typed-judgment model. I A/B'd it: 78% fewer tokens, 16x less work-attributable input, accuracy 96.1% vs 93.7%. Python, no deps, MIT.
- [jev-sec-bench](https://github.com/Gaurav-Gosain/jev-sec-bench) ([post](https://x.com/_GauravGosain/status/2100111398277959715)) - Blind security benchmarks for Jev, TypeSafe's System One model: prompt injection and vulnerable code detection, built on jev-go.
- [jevgpt](https://github.com/Bewinxed/jevgpt) - A chatbot built on a model that cannot generate text (TypeSafe AI's Jev, driven autoregressively).
- [mcts-agent](https://github.com/lhemerly/mcts-agent) - Discriminative Monte Carlo Tree Search using TypeSafe Jev System One Primitives and Gemini.
- [new-api-plugin-typesafe](https://github.com/FFatTiger/new-api-plugin-typesafe) - TypeSafe AI System One (Jev) task plugin for QuantumNous/new-api — native /v1/systemone, synchronous evaluation, token billing.
- [research_desk](https://github.com/0xnairb/research_desk) - TypeSafe Jev demonstration for new analyzation — experimenting with Jev for fast analysis of news and tickers.
- [siftr](https://github.com/Bentlybro/siftr) - Fast, cheap judgment for AI coding agents: semantic search, focused reads and list picking in ~2s. CLI + MCP server on TypeSafe Jev. Benchmarked on SWE-bench.
- [tenbin](https://github.com/simota/tenbin) - MCP server and agent skill for the TypeSafe AI System One API (Jev): decompose a judgment into Choice / Score / Noul questions, lint them, measure on labelled data, and put calibrated thresholds in code.
- [trade-jev](https://github.com/justinhe16/trade-jev) - Backtest Jev (TypeSafe) as a BUY/SELL/HOLD trader on NQ L10 order-book data.
- [zerosweep](https://github.com/sysadarsh/zerosweep) ([site](https://sysadarsh-zerosweep.vercel.app/)) - Autonomous System-One Triage Engine & Benchmark powered by TypeSafe AI (Jev). 75ms inference, $0 output tokens, and RLCD epistemic safety gates.
- [decisionbridge](https://github.com/grishahq/decisionbridge) - A Jev-inspired decision interface for existing LLMs. Explicit choices, scores, calibration, and review thresholds.
- [jev-agent-failure-benchmark](https://github.com/TokenTrim/jev-agent-failure-benchmark) - Benchmarking Jev (Typesafe.ai) against a strong LLM on the Who&When Pro agent-failure-attribution benchmark (text subset).
- [jev-as-a-judge](https://github.com/danielgshea/jev-as-a-judge) - Using Jev as an evaluator.
- [jev-carryforward](https://github.com/Dharundp6/jev-carryforward) ([site](https://www.npmjs.com/package/carryforward)) - What your last session knew, scored against what this one is doing. MCP server: a per-project ledger written as things happen, recalled per task with TypeSafe's Jev evaluation model via Vercel AI Gateway.
- [jev-chess](https://github.com/hemanth/jev-chess) ([site](https://h3manth.com/fun/jev-chess/)) - Chess moves, evaluations, persona opponents, and game classification with TypeSafe AI System One.
- [jev-exploration](https://github.com/SamuelSacco/jev-exploration) - Jev (TypeSafe) exploratory thread: claim audit, live demos, and runnable code.
- [jev-freeform](https://github.com/kesku/jev-freeform) - An observable raw-character chat experiment powered entirely by TypeSafe Jev Choice.
- [jev-rerank-bench](https://github.com/anessbelbati/jev-rerank-bench) - Can a decision model beat dedicated rerankers? TypeSafe Jev vs Cohere Rerank 4 vs ZeroEntropy zerank-2 vs a chat-model baseline: 14 datasets, every raw API response, bootstrap ranges on every gap.
- [jev-research-eval](https://github.com/jgridifier/jev-research-eval) - Reproducible Jev Ultrafast research-browser eval harness + field note (QC’d cases, suite runner, report generator). Not investment advice.
- [jev-synergy-screening](https://github.com/PistachioAIHQ/jev-synergy-screening) - Jev (TypeSafe System One) × ASReview SYNERGY abstract screening demo — Choice/Noul vs gold labels.
- [kyotsu-ai-bench](https://github.com/shibadogcap/kyotsu-ai-bench) - AI benchmark on Japan's 2026 Common Test: Jev vs luna-none vs luna-low (static dashboard).
- [modelsystem](https://github.com/fabricioctelles/modelsystem) ([site](https://modelsystem.one)) - Curated catalog of System One / Decision Models — contributions for modelsystem.one.
- [openjev-experiments](https://github.com/zefir1990/openjev-experiments) ([site](https://demensdeum.com)) - Experiments with openjev, an open Jev-style option-logit runner, on local models.
- [padflow-jev-evals](https://github.com/zsavage8/padflow-jev-evals) - Typed-decision benchmark from PadFlow (land development SaaS): schemas, anonymized labeled rows, and a runner for confidence-calibrated models like TypeSafe Jev.
- [qwen-rlcd](https://github.com/shamazharikh/qwen-rlcd) - Jev-style calibrated decision model (Choice/Score/Noul) on Qwen3.5-0.8B.
- [RISC-jeV](https://github.com/i2cjak/RISC-jeV) - I tortured Jev into being a RISC-V CPU.
- [system-one-gemma](https://github.com/akash-kamat/system-one-gemma) - Open-source Jev-style System One decision model. Gemma 3 270M with a scoring head — fast, calibrated decisions in a single forward pass. No text generation. Inspired by TypeSafe.ai's Jev.
- [typesafe-vs-deepseek](https://github.com/markfive-proto/typesafe-vs-deepseek) ([site](https://typesafe-vs-deepseek.vercel.app)) - TypeSafe (Jev) vs DeepSeek-flash: side-by-side speed/token/cost/accuracy comparison across invoice extraction, email classification, and reranking.
- [FinancialPredictionJev](https://github.com/thodoh1/FinancialPredictionJev) - Using Jev to test how well it predicts financial markets(just like most llms as of september 2026, it doesnt do that good).
- [jev-alpha-bench](https://github.com/Gaurav-Gosain/jev-alpha-bench) - Does Jev predict stock returns from news? It reads the news well; there is no tradeable alpha. Three arms separate reading from recall.
- [jev-anotacao-sentencas](https://github.com/lab-dados/jev-anotacao-sentencas) ([site](https://lab-dados.github.io/jev-anotacao-sentencas/)) - Jev (TypeSafe) vs. Gemini 3.8 Flash vs. GPT-5.6 Luna na anotação estruturada de sentenças do TJSP: qualidade, tempo e custo.
- [jev-deferred-crispification](https://github.com/dnakhoa/jev-deferred-crispification) - Position paper: the Hidden-Markov and fuzzy primitives missing from TypeSafe AI's Jev and System-One decision models. Two lemmas, one principle (Deferred Crispification), one architecture (BSF-S1).
- [jev-finance-benchmark](https://github.com/hifizz/jev-finance-benchmark) - Typesafe.ai model jev finance benchmark.
- [jev-headline-bench](https://github.com/Gaurav-Gosain/jev-headline-bench) - Can Jev pick the winner of a real headline A/B test? 64.5% across 10,984 Upworthy randomized experiments, 74.7% when the difference was decisive.
- [jev-jp-address](https://github.com/smasato/jev-jp-address) - Jev (TypeSafe) 性能評価プロジェクト — 日本郵便 KEN_ALL をマスタに、AI SDK 経由の Jev が住所のあいまい一致にどこまで使えるかを検証.
- [jev-lab](https://github.com/Menny1337/jev-lab) - TypeScript experiments, evaluations, and latency benchmarks for TypeSafe's Jev model.
- [jev-phishing-bench](https://github.com/anisselbd/jev-phishing-bench) - Jev (TypeSafe) vs Claude Haiku 4.5 on 2 000 phishing emails: accuracy, calibration, latency, cost. Reproducible benchmark.
- [jev-pick-and-place-study](https://github.com/tryaksh/jev-pick-and-place-study) - A small reproducible MuJoCo pilot comparing Jev, Claude Haiku, and reactive rules for pick-and-place.
- [jev-playground (hegargarcia)](https://github.com/hegargarcia/jev-playground) - Benchmarks Jev against other evaluation models in games with explicit states, legal actions, and measurable outcomes.
- [jev-report](https://github.com/HackSing/jev-report) - 发明 RLHF 的人，这次做了个不会说话的模型：Jev 独立研究报告。52 页 PDF + 50 条中文实测复现包 + 143 条可回溯数据表.
- [jev-routing-experiment](https://github.com/TokenTrim/jev-routing-experiment) - Benchmarking TypeSafe's Jev decision model as a cost-efficient LLM router on RouterArena.
- [jev-secret-detection](https://github.com/teyhouse/jev-secret-detection) ([post](https://x.com/Teyhouse/status/2100555273718907064)) - Measures how well TypeSafe's RLCD-Jev model spots real secret credentials in file snippets.
- [jev-shadcn-lint-eval](https://github.com/blas0/jev-shadcn-lint-eval) - A small second eval for shadcn-ui/lint that uses TypeSafe's Jev to judge the linter's own output.
- [jev-spam-eval](https://github.com/bitnovus/jev-spam-eval) - Zero-shot spam filtering with TypeSafe Jev Noul questions, compared with TF-IDF baselines.
- [jev-trace-classifier](https://github.com/sypherin/jev-trace-classifier) - Application of TypeSafe Jev (noul judgment primitive) on the collusion.wiki corpus: agent vs human page authorship, head-to-head vs local Qwen3.8-Flash-Next.
- [misereru-slide-jev](https://github.com/myokoym/misereru-slide-jev) ([site](https://myokoym.github.io/misereru-slide-jev/)) - Ongoing Japanese research deck on Jev and System One models, maintained as Markdown slides.
- [Parallel Constrained Decoding (Qwen2.5-1B-RLCD)](https://huggingface.co/spaces/drinkmoonshine/parallel-constrained-decoding) - Hugging Face Space exploring open-source parallel constrained decoding as an alternative to Jev.
- [PocketJev](https://github.com/NullPo-jp/PocketJev) - On-device iPhone visual decision tool using MLX and Qwen3-VL direct option logits.
- [shade-arena-jev-monitor](https://github.com/nican2018/shade-arena-jev-monitor) - Evaluating TypeSafe's Jev as a fast monitor and action gate for agent sabotage in SHADE-Arena, compared with Gemini 2.5 Flash/Pro.
- [system-one-adapter-rust](https://github.com/codeitlikemiley/system-one-adapter-rust) - Rust port of TypeSafe system-one-adapter (LLM-backed system_one evaluations).
- [thaiexam-jev-charts](https://github.com/vehas/thaiexam-jev-charts) - Charts: TypeSafe Jev evaluated on Thai standardized exams vs 110 other models.
- [Typesafe_chess_eval](https://github.com/AliceRoselia/Typesafe_chess_eval) - An evaluation of typesafe AI chess. As it turns out, the AI isn't doing really well even though chess is not a particularly open-ended game. Still, it's only a prototype and this probably wasn't optimzied for games.
- [typesafe-oracles](https://github.com/trophee-bot/typesafe-oracles) - Evaluating TypeSafe's System One primitives (Choice/Score/Noul) — where a typed oracle beats an LLM call.

## Other lists

Other curated lists.

- [awesome-typesafe](https://github.com/AbdelStark/awesome-typesafe) ([site](https://abdelstark.github.io/awesome-typesafe/)) - Curated list of official resources and community projects for TypeSafe, System One models, and Jev, with a GitHub Pages site.
- [awesome-jev (yibie)](https://github.com/yibie/awesome-jev) - A curated list of public projects, integrations, and discussions built on Jev — TypeSafe AI's System One model for typed decisions.
- [awesome-jev](https://github.com/cobanov/awesome-jev) - A curated, source-backed list of projects built with Jev, TypeSafe AI's System One model for typed decisions.
- [awesome-jev (fatwang2)](https://github.com/fatwang2/awesome-jev) - A source-backed Jev project directory with a reusable Jev-only GitHub review workflow.
- [awesome-jev (AnotiaWang)](https://github.com/AnotiaWang/awesome-jev) ([post](https://x.com/0xLogicrw/status/2100478725393686556)) - A curated list of awesome Jev / TypeSafe System One applications, libraries, and resources.
- [awesome-jev-projects](https://github.com/logicrw/awesome-jev-projects) ([site](https://logicrw.github.io/awesome-jev-projects/)) - Awesome Jev: source-backed open-source ecosystem radar, plain-language project discovery, and automatic GitHub sync.
- [awesome-jev (OmniJev)](https://github.com/OmniJev/awesome-jev) ([site](https://omnijev.github.io/awesome-jev/)) - Papers, open reproductions and independent evaluations behind System One models and Jev.
- [awesome-jev-typesafe](https://github.com/valentynkit/awesome-jev-typesafe) - Typed decisions with TypeSafe's Jev, the first System One model.
- [awesome-jev (kraayenjon)](https://github.com/kraayenjon/awesome-jev) ([site](https://madewithjev.com)) - A curated list of Jev use cases, projects, SDKs, and resources. Jev is TypeSafe AI's System One model for fast, typed decisions in software — Choice, Score, and Noul with calibrated probabilities.
- [awesome-jev-zh](https://github.com/yzfly/awesome-jev-zh) ([site](https://code.jiangshu.ai/awesome-jev-zh/)) - Jev / TypeSafe System One 中文精选列表：官方资料、SDK、爆款应用、Agent 工具、开源复现与独立评测，附中文上手指南，每日自动收录 GitHub 热门项目。

## Articles & threads

Coverage, write-ups, and X threads.

- [AI that does not talk](https://ziplyne.agency/blog/ai-that-doesnt-talk-typesafe-jev-guide) - Practical guide: playground, Python and JS SDKs, raw HTTP, and the agent skill.
- [AIAvatarKit turn-end gate](https://x.com/uezochan/status/2100608556823388486) - Voice-dialog turn-end detection using Jev scores after speech.
- [AINews: Jev, a System One Model that only decides](https://www.latent.space/p/ainews-jev-a-system-one-model-that) - Latent Space's launch-day roundup: over 100x faster and 200x cheaper than small frontier LLMs.
- [Browser Use + Jev](https://x.com/gregpr07/status/2100411066966749359) - Gregor Zunic's flight-search demo with a dynamic DOM action space.
- [Computer use built on Jev](https://x.com/awlevin/status/2100262612428894676) - Aaron Levin: 155x cheaper than Opus 5, about 20x faster, and it generalizes across operating systems.
- [ConsoleChaosRacing driven by Jev](https://x.com/Maoku/status/2100611986358927627) - Racing UI wired to Jev driving decisions.
- [DuckDB Jev classifier](https://x.com/hamiltonulmer/status/2100370557405667768) - DuckDB extension that classifies rows in CSV, Parquet, or DuckDB tables with Jev, about 10 seconds per 1,000 rows.
- [Early Jev tools roundup](https://x.com/0xLogicrw/status/2100478725393686556) - Thread cataloguing the first wave of Jev tools: MCP servers, routers, reviewers, and browser agents.
- [Ground Truth news-framing extension](https://x.com/jagenaujagenau/status/2100622352333574460) - Browser extension that classifies an article's framing, type, topic, and loaded language with Jev.
- [Hacker News launch thread](https://news.ycombinator.com/item?id=49717558) - 1,800-point thread debating whether typed decisions replace LLM calls for classification, routing, and scoring.
- [He says he co-invented ChatGPT. His new AI will not write a word](https://dev.to/gabrielanhaia/he-says-he-co-invented-chatgpt-his-new-ai-jev-wont-write-a-word-e3c) - Dev.to walkthrough of the Vercel AI SDK evaluate integration.
- [Hide posts on X with natural language](https://x.com/marcelpociot/status/2100520134481735729) - Marcel Pociot's browser extension that collapses posts based on a Jev judgment.
- [Hook panel A/B tester](https://x.com/Vybhav/status/2100609472750047263) - Near-real-time scoring of TikTok and Instagram hooks against about 100 personas.
- [Internal classifier field note](https://x.com/identityTorn/status/2100475121324728615) - Matched-precision comparison against a private fine-tuned classifier.
- [Jev as an agent safety monitor](https://x.com/isNickMa/status/2100566407524344225) - Test report using Jev to check each agent action first: most attacks caught, almost no false blocks.
- [Jev gomoku harness](https://x.com/VacekvVita/status/2100609341145465325) - Local tactics shrink 225 moves to about 40 candidates, then Jev picks among tiered options.
- [Jev in 34 seconds](https://x.com/dwhitedesign/status/2100368024649769384) - Short video explainer of how Jev's typed-decision loop works.
- [Jev in a Grammarly-style Mac app](https://x.com/nielsmouthaan/status/2100543809465577665) - Desktop writing app using Jev for fast structured writing judgments.
- [Jev plays Minecraft (r/accelerate)](https://reddit.com/r/accelerate/comments/1whk9oy/new_typesafe_ai_jev_model_playing_minecraft_wip/) - Work-in-progress demo of Jev driving Minecraft, including fleeing zombies at night.
- [Jev Typewriter launch](https://x.com/stevekrouse/status/2100287368221659289) - Steve Krouse's playable 16-judgment demo and video.
- [Jev vs Mistral and Gemini for event validation](https://nearhere.events/blog/typesafe-jev-mistral-gemini-event-validation) - Head-to-head test at validating local event listings, with cost and latency.
- [Jev vs Qwen on Cerebras](https://x.com/iamMrDuncan/status/2100467548298899918) - Video comparison against a structured-output LLM baseline.
- [jev 同士に五目並べで対戦させた](https://zenn.dev/mizchi/articles/jev-plays-gomoku) - Jev vs Jev gomoku with source and timing logs.
- [jev-rabbit PR review bot](https://x.com/thekitze/status/2100616530275029139) - Work-in-progress PR reviewer with plain-English Jev rules.
- [Jev: System One models explained](https://www.theneuron.ai/explainer-articles/typesafe-jev-system-one-models-explained/) - The Neuron's explainer on AI decisions without a chatbot.
- [Jev: System One models explained (DataCamp)](https://www.datacamp.com/blog/system-one-models-jev) - Third-party write-up of the System One primitives, pricing, and vendor workflow evals.
- [Jev: The Language Model That Will Not Talk](https://anthonymaio.substack.com/p/jev-the-language-model-that-wont) - Anthony Maio's essay on what a model that cannot generate text is for.
- [Kalshi prediction-market bot](https://x.com/stablebun/status/2100614911898390589) - Jev trades 15-minute and 1-hour BTC, ETH, and SOL markets on Kalshi.
- [Launch thread by Diogo Almeida](https://x.com/CompleteSkeptic/status/2099925682726002904) - TypeSafe's founder on why RLCD-trained decision models are a shorter path to value than chat models.
- [Mini-Vibe Check: Jev judged everything I have written in 0.7 seconds](https://every.to/also-true-for-humans/mini-vibe-check-typesafe-s-jev-judged-everything-i-ve-written-in-0-7-seconds) - Every's Mike Taylor runs his whole archive through Jev.
- [Model router built with Jev](https://x.com/ephraimduncan/status/2100454070536351824) - Ephraim Duncan's demo where Jev decides which model should serve a request.
- [Model router CLI](https://x.com/nidhisinghattri/status/2100617830890885415) - Task plus subscription list in, Jev picks which model or agent should handle it.
- [One judge call vs twelve dimension scores](https://agentjournal.dev/blog/llm-judge-vs-feature-extraction/) ([post](https://x.com/agent_journal/status/2100611808545632758)) - One direct Jev question per row against 12–14 Jev-scored dimensions with locally fitted weights on three classification tasks: 5,477 test rows, 25,174 Jev calls, $1.43. Decomposition wins on Japanese NLI (0.9076 vs 0.8373) but flags about 25× more hard benign rows as attacks (37.2% vs 1.5%).
- [OpenCode browser use powered by Jev](https://x.com/thdxr/status/2100288951978164647) - Preview of fast browser use with Jev and OpenCode's browser CLI.
- [skillbox + Jev skill routing](https://x.com/thekitze/status/2100556122570792999) - MCP skill router where Jev picks the relevant skills instead of a long agent search.
- [Spanish AEPD corpus test](https://x.com/juanmacias/status/2100463494629925048) - Jev versus a hand-built regex on 544 public data-protection resolutions: 98.2% agreement for about five cents.
- [Stagehand + Jev browser use](https://x.com/kylejeong/status/2100622054945095934) - Observe the accessibility tree, Jev chooses the next action, Stagehand executes.
- [StarCraft Brood War WASM MCP demo](https://x.com/literallydenis/status/2100622868878868603) - Brood War in WASM exposed as an MCP server, with Jev playing and still losing to a Zerg rush.
- [Support ticket classifier](https://x.com/ifahimreza/status/2100616988746023102) - Jev labels category, urgency, and human-versus-auto handling for support tickets.
- [Tabletop MMORPG action mapper](https://x.com/Jon_iy/status/2100397782322364792) - Eval of Jev turning free-text player intent into typed server actions: 96% agreement, 317 ms median.
- [Typed decisions, not chat](https://warmersun.com/jev/) - Independent walkthrough separating TypeSafe's published claims from public evidence.
- [TypeSafe AI debuts model for machines that plays Doom](https://www.theregister.com/ai-and-ml/2026/09/16/typesafe-ai-debuts-model-for-machines-that-plays-doom/5296711) - The Register on the launch, the Doom demo, and the $40M seed round.
- [TypeSafe Jev: the first decision-only model class](https://www.developersdigest.tech/blog/typesafe-jev-system-one-models-release-guide-2026) - Release-week technical roundup: API, evals, adapter, and skill.
- [TypeSafeのJevを正しく驚く](https://zenn.dev/nwn/articles/824026c76116e0) - Japanese walkthrough of what Jev is and is not.
- [Vercel fx: Jev as a command safety reviewer](https://x.com/rauchg/status/2100307962262872105) - Guillermo Rauch: Jev reviews every fx command, faster and more accurate than a chat model.
- [ViZDoom Jev agent](https://x.com/kmad/status/2100339921714323624) - Two decision channels on ViZDoom, navigation at 5 Hz and combat at 12 Hz, with an 18-kill test run.
- [What is Jev?](https://mohammedshehu.com/jev-typesafe-ai/) - Short practical intro with a Python ticket-triage example.
- [Wiki-link clicker demo](https://x.com/mark1nhu/status/2100620075090792490) - Page-level demo where Jev picks which candidate link to click toward a goal.

## Contributing

Pull requests welcome. Edit `data/projects.json` (it drives both this README and the site) and run `npm run build`. See [CONTRIBUTING.md](CONTRIBUTING.md) for the entry format and inclusion criteria.

## License

[CC0 1.0](LICENSE). Maintained by [Gumbo](https://hellogumbo.com).

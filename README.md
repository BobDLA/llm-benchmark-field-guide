# LLM Benchmark Field Guide

Reference site for standardized benchmark cards that explain what major LLM benchmarks measure, how they work, and when their scores are worth trusting.

[中文 README](./README.zh-CN.md)

## Static Site

This repo is deployed as a GitHub Pages static site.

- Main entry: https://bobdla.github.io/llm-benchmark-field-guide/
- Chinese home: https://bobdla.github.io/llm-benchmark-field-guide/zh/
- English home: https://bobdla.github.io/llm-benchmark-field-guide/en/
- Chinese comparison page: https://bobdla.github.io/llm-benchmark-field-guide/zh/cards/comparison
- English comparison page: https://bobdla.github.io/llm-benchmark-field-guide/en/comparison

Notes:

- The root page redirects to `/zh/` or `/en/` based on the browser language.
- If the GitHub owner or repository name changes, update these links accordingly.

## Current Coverage

The site currently includes 24 cards across 13 capability categories: 17 single-benchmark cards plus 7 vision / multimodal cluster cards.

The site now also includes a vision / multimodal cluster-card expansion across these capability groups:

- General
- STEM
- Document / OCR / Chart
- Grounding
- Multi-Image
- Hallucination
- GUI
- Video Understanding

The currently completed card categories are:

- Knowledge
- Instruction Following
- Long Context
- STEM
- Math
- Hard Reasoning
- Reasoning
- Search Agent
- General Agent
- Coding Agent
- Translation
- Multilingualism
- Vision / Multimodal

## Project Structure

```text
.
|-- docs/
|   |-- index.md                # language redirect entry
|   |-- zh/                     # Chinese site content
|   |-- en/                     # English site content
|   `-- .vitepress/             # VitePress config, theme, build output
|-- .github/workflows/deploy.yml
|-- package.json
`-- README.md
```

Key content paths:

- `docs/zh/cards/`: Chinese benchmark cards
- `docs/en/cards/`: English benchmark cards
- `docs/zh/index.md`: Chinese homepage
- `docs/en/index.md`: English homepage
- `docs/.vitepress/config.ts`: site config, locales, navigation, sidebar
- `docs/.vitepress/theme/`: custom theme entry and CSS

## Local Development

Requirements:

- Node.js 20+
- npm

Install dependencies:

```bash
npm ci
```

Start the local dev server:

```bash
npm run docs:dev
```

Build the static site:

```bash
npm run docs:build
```

Preview the built site locally:

```bash
npm run docs:preview
```

Build output is written to:

```text
docs/.vitepress/dist
```

## Deployment

Deployment is handled by GitHub Actions:

- Workflow file: `.github/workflows/deploy.yml`
- Trigger: push to `main` or manual dispatch
- Hosting target: GitHub Pages
- Published artifact: `docs/.vitepress/dist`

The workflow skips deployment when the repository is private.

## Writing Model

The site follows a consistent card structure:

1. One-Line Definition
2. Quick Reference
3. Navigation
4. How It Works
5. Reliability
6. Should I Use It

There are also guide pages for:

- how to read a card
- how sources are selected
- cross-card comparison

## License

This repository is released under the [Apache License 2.0](./LICENSE).

- Code, documentation, and benchmark-card content are all covered by the same repository-wide license unless a file says otherwise.
- This keeps reuse permissive while preserving the standard Apache 2.0 terms around attribution, notices, and patent grants.

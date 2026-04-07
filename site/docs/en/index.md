---
layout: home
hero:
  name: LLM Benchmark Field Guide
  text: A practical guide to what each benchmark really measures
  tagline: Go beyond leaderboard numbers and understand what a benchmark tests, how it works, and whether you should trust it
  actions:
    - theme: brand
      text: Browse Cards
      link: /en/cards/search-agent/browsecomp
    - theme: alt
      text: How to Read a Card
      link: /en/guide/how-to-read

features:
  - icon: 🔍
    title: Search Agent
    details: Tests a model's ability to persistently search the open web and track down hard-to-find information
    link: /en/cards/search-agent/browsecomp
  - icon: 💻
    title: Coding Agent
    details: Tests a model's ability to read real codebases, understand issues, and generate patches that pass tests
    link: /en/cards/coding-agent/swebench
  - icon: 📚
    title: Knowledge (Coming Soon)
    details: Tests factual QA across general and domain-specific knowledge
  - icon: 🛠️
    title: General Agent (Coming Soon)
    details: Tests tool use, function calling, and multi-turn agent capabilities
---

## What Is This

A practical reference site that builds a standardized **explainer card** for each important LLM benchmark.

Every card answers 4 core questions:

| Question              | Section |
| --------------------- | ------- |
| What is it?           | §1-§2   |
| How does it work?     | §4      |
| Is it reliable?       | §5      |
| Should I use it?      | §6      |

> [!TIP]
> Not sure how to read these cards? Start with the [reading guide](/en/guide/how-to-read).

## Capability Taxonomy

```mermaid
flowchart TD
    ROOT["LLM Capabilities"] --> K["Knowledge"]
    ROOT --> IF["Instruction Following"]
    ROOT --> LC["Long Context"]
    ROOT --> STEM["STEM / Science"]
    ROOT --> R["Reasoning"]
    ROOT --> SA["Search Agent"]
    ROOT --> GA["General Agent"]
    ROOT --> CA["Coding Agent"]
    ROOT --> ML["Multilingualism"]

    SA --> SA1["BrowseComp ✅"]
    CA --> CA1["SWE-bench ✅"]

    style SA1 fill:#27ae60,stroke:#1e8449,color:#fff
    style CA1 fill:#27ae60,stroke:#1e8449,color:#fff
```

✅ = Card available &nbsp;|&nbsp; Other categories coming soon

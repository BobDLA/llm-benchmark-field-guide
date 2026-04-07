# Cross-Card Comparison

The site currently includes 2 core cards:

- `BrowseComp`: Search Agent / Persistent Browsing
- `SWE-bench`: Coding Agent / Autonomous Bug Fix

This page helps you decide which benchmark family to read first.

## At a Glance

| Dimension | BrowseComp | SWE-bench |
| --------- | ---------- | --------- |
| Top-level category | Search Agent | Coding Agent |
| Typical task | Chase down a hard fact on the open web | Fix a real issue in a real repository |
| Input | Short clue-rich question | Repo snapshot + issue description |
| Output | Short answer + explanation + confidence | Git patch |
| Scoring | LLM judge semantic match | Test execution and `% Resolved` |
| Main challenge | Search strategy and evidence synthesis | Repo navigation and executable patching |
| Main risk | Web drift and judge subjectivity | Contamination and scaffold variance |

## Which Questions They Answer Best

### BrowseComp is better for

- persistent web search
- creative query reformulation
- hard factual retrieval over the open web

### SWE-bench is better for

- real-repo bug fixing
- codebase navigation
- patch generation under test constraints

## When to Read Which One First

### Start with BrowseComp if

- you work on research or search agents
- you care about difficult fact finding
- you want to measure browsing persistence

### Start with SWE-bench if

- you work on coding agents
- you care about real repository repair
- you want a hard execution-based signal

## Key Difference in Evaluation Philosophy

| Topic | BrowseComp | SWE-bench |
| ----- | ---------- | --------- |
| Data source | Human-built web benchmark | Real GitHub issues and repo history |
| Environment stability | Low, pages can change | Higher, snapshots are frozen |
| Reproducibility pressure | Web drift | Scaffold variance |
| Tool dependence | Search and browsing | Terminal, editing, and execution |

## Bottom Line

> BrowseComp is mainly a hard open-web search benchmark. SWE-bench is mainly a real-repository patch benchmark. Both matter, but they should not be used as substitutes for each other.

---
name: knowledge-doc-fact-audit
description: Use when the user asks to fact-check, audit, verify, or review the factual accuracy of a knowledge document, explainer, benchmark card, model card, research summary, product brief, or educational doc. Use it to identify concrete factual claims, verify them against primary and current sources, flag contradictions, outdated facts, unsupported statements, and citation gaps, and produce a claim-by-claim audit report or patch plan.
---

# Knowledge Doc Fact Audit

Audit a knowledge document for factual accuracy. Focus on externally verifiable claims, not writing style.

## When To Use

Use this skill when the user wants any of the following:

- 对知识文档做真实性事实审核
- 核验 benchmark 卡、模型卡、知识文章、说明文档里的事实是否准确
- 找出过时信息、幻觉、无来源断言、数字或日期错误
- 审核引文、出处、版本号、发布日期、榜单结果、产品能力说明

Do not use this skill for pure copyediting, tone polish, or structure-only review unless factual verification is also required.

## Core Rules

1. Treat every nontrivial factual statement as untrusted until checked.
2. Prefer primary sources:
   official docs, official repos, papers, dataset cards, standards bodies, company or project pages.
3. If a fact could have changed, browse current sources and use exact dates in the final audit.
4. Separate claim verification from writing quality. Findings should be about truth, support, and freshness.
5. Do not "average" conflicting sources. Call out the conflict and name the stronger source.

## Workflow

### 1. Scope The Audit

Identify:

- the file or text to audit
- whether the user wants a report, inline edits, or both
- whether the document is supposed to be current as of today or tied to a historical snapshot

If the document itself includes a stated date or version, preserve that context during verification.

### 2. Build A Claim Ledger

Extract concrete claims worth checking. Prioritize:

- names, dates, counts, rankings, scores, versions, releases
- "first", "latest", "official", "supports", "deprecated", "state of the art"
- benchmark definitions, scoring rules, dataset sizes, model capabilities
- quotes, policy claims, and anything that affects downstream decisions

Skip trivial statements unless they support a larger claim.

### 3. Verify By Claim Type

Use the source ladder in [references/source-priority.md](references/source-priority.md).

Typical mapping:

- benchmark or dataset facts: paper, official repo, dataset card, official leaderboard
- model or product facts: official model card, vendor docs, release notes
- software behavior: official docs, source code, changelog
- current numbers or leadership claims: current official pages first, then reputable secondary confirmation if needed

For each claim, classify it as one of:

- `confirmed`
- `partially_supported`
- `contradicted`
- `outdated`
- `unverifiable`

### 4. Write Findings First

Default to a review-style output:

- highest-severity factual problems first
- each finding should cite the document location
- each finding should explain what the document says, what the source says, and why it matters

Use absolute dates whenever freshness matters.

### 5. Offer A Patch Path

After findings, provide either:

- a concise patch plan, or
- exact replacement wording, if the user asked for edits

Do not silently rewrite the document unless the user asked for direct fixes.

## Severity Guidance

- `high`: the claim is false, reversed, materially misleading, or likely to change the reader's conclusion
- `medium`: the claim is overstated, underspecified, stale, or missing an important qualifier
- `low`: minor precision issue, weak sourcing, or non-material wording mismatch

## Output Shape

Follow this structure unless the user asks for a different format:

1. `Findings`
2. `Open Questions` if any claim remains unresolved
3. `Patch Suggestions` if useful
4. `Sources`

Keep claims and evidence tightly paired. Do not dump a bibliography without mapping sources to findings.

## Editing Mode

If the user wants the document fixed:

1. finish the claim audit first
2. patch only the claims you can support
3. prefer minimal edits that preserve the document's voice
4. if a claim cannot be verified, either remove it or add an explicit qualifier

## Good Defaults

- When auditing benchmark or model docs, assume dates, leaderboard status, dataset size, and evaluation setup may be stale.
- When auditing product or API docs, assume capabilities and limits may have changed.
- When the document cites "official" information without a source, verify the official source directly.
- When a number appears in multiple places, reconcile it before writing the finding.

## Deliverable Standard

A good audit should let a human answer, for every important claim:

- what the document asserted
- whether it is true
- what source supports that conclusion
- whether the claim should be corrected, qualified, or removed

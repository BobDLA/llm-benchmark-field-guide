# How We Source These Cards

These pages are meant to be structured benchmark explainers, not leaderboard mirrors and not paper-summary rewrites. That means the source policy matters.

We use a fixed **source ladder** and explicitly include repo documentation layers, wiki-style docs, and implementation notes when they help explain how a benchmark really runs.

## Source Ladder

### L1. Official Launch Page or Official Project Page

We use this layer first to answer:

- who released the benchmark
- how the benchmark officially defines its target capability
- which version, subset, or leaderboard the official materials currently emphasize

This layer is best for:

- name
- release date
- benchmark family/versioning
- official claims about "what it measures"

## L2. Official Paper or Preprint

We use this layer first to answer:

- how the data was built
- what the input/output format is
- how scoring works
- which limitations the authors explicitly acknowledge

This layer is best for:

- dataset size
- task distribution
- core metrics
- human or official baselines

## L3. Official Repo, Dataset Card, or Official Harness

We use this layer first to answer:

- how the evaluation is actually organized in code
- what the output fields really look like
- how the scripts compute the score in practice
- what changes when you switch versions or modes

This layer is best for:

- runnable entry points
- answer extraction
- strict/loose or pass@k implementation details
- concrete data field structure

## L4. Repo Wiki, GitHub Pages Docs, DeepWiki-Style Repo Documentation

This is a formal source layer, not a fallback of last resort.

We use it to fill in:

- internal structure that the README does not explain clearly
- hidden assumptions in the evaluation pipeline
- how code directories map to runtime modes
- important implementation details that are real but easy to miss

This layer is **not** the primary place to define a benchmark, but it is often the best place to explain:

- how the benchmark really runs in engineering terms
- why scores depend on certain implementation details
- which directories or scripts actually carry the explanatory weight

> [!TIP]
> This layer is most useful for `§4 How It Works` and for explaining why scores need careful interpretation. It should not be used alone to define the benchmark's core facts.

## L5. Community Issues, Discussion Threads, and Correction Notes

We use this layer only when:

- the official project acknowledges the problem, or
- the community has surfaced a verifiable implementation defect, contamination path, or evaluation loophole

This layer is reserved for:

- `§5.3 Known Defects and Disputes`
- `§5.4 Risk Table`

We do not use it to define the benchmark's basic identity.

---

## How We Resolve Conflicts

When different sources disagree, the default priority is:

1. official launch page or official current leaderboard notes
2. official paper text
3. official repo README, dataset card, or harness implementation
4. repo wiki or documentation layer
5. community sources

If an older paper and a newer repo differ, we try to label both clearly:

- the original paper-era definition
- the current implementation-era definition

This avoids collapsing different versions into one misleading number.

## Four Source Questions Every Card Must Answer

Before we ship a card, we try to verify at least these four questions:

1. What does the official project say the benchmark measures, and what does it explicitly not measure?
2. How do input, output, and scoring actually work in code?
3. Which subset or version is most commonly cited today?
4. Which disputes or risks have already been identified by the official project or by credible external analysis?

## Materials We Explicitly Do Not Treat as Primary Sources

- aggregator leaderboards with no protocol explanation
- secondary blog summaries that do not link the original source
- vendor posters or social screenshots
- marketing claims that only report a best score without prompt, scaffold, or sampling details

## How You Should Use These Cards

If you only want a fast judgment about whether a benchmark is worth reading:

- start with `§2 Quick Reference`
- then read `§5 Reliability`

If you want a reproducible evaluation plan:

- start with `§4 How It Works`
- then go back to the official repo, dataset, and documentation layer

> [!IMPORTANT]
> These cards treat a benchmark as a measurement tool, not as ground truth. Every card is expected to explain both the benchmark's value and the main ways its score can distort reality.

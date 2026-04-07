# How to Read a Benchmark Card

Each card has **6 top-level sections**, grouped by 4 reader paths. You don't need to read top to bottom — jump to the section that answers your question.

## Reading Paths

```mermaid
flowchart LR
    START(("What do you<br/>want to know?"))

    START --> Q1["What is it?"]
    START --> Q2["How does<br/>it work?"]
    START --> Q3["Is it<br/>reliable?"]
    START --> Q4["Should I<br/>use it?"]

    Q1 --> A1["§1 Definition<br/>§2 Quick Reference"]
    Q2 --> A2["§4 How It Works<br/>4.1-4.6"]
    Q3 --> A3["§5 Reliability<br/>5.1-5.4"]
    Q4 --> A4["§6 Should I Use It<br/>6.1-6.2"]

    style START fill:#4a90d9,stroke:#2c5f8a,color:#fff
    style Q1 fill:#f5a623,stroke:#c7841a,color:#fff
    style Q2 fill:#7ed321,stroke:#5a9e18,color:#fff
    style Q3 fill:#d0021b,stroke:#a3011b,color:#fff
    style Q4 fill:#9013fe,stroke:#6a0fba,color:#fff
```

## Section Overview

| Section | Title | Content |
| ------- | ----- | ------- |
| §1 | Definition | Name, creator, release date, what it tests |
| §2 | Quick Reference | Metadata table (size, scoring, links, etc.) |
| §3 | Navigation | Mermaid diagrams for quick orientation |
| §4 | How It Works | What it tests(4.1), Input(4.2), Output(4.3), Data(4.4), Scale(4.5), Scoring(4.6) |
| §5 | Reliability | Limitations(5.1), Difficulty(5.2), Defects(5.3), Contamination(5.4) |
| §6 | Should I Use It | Use cases(6.1), Verdict(6.2) + one-line summary |

## Key Conventions

### Score Source Annotations

Every model score is annotated with:

- **Data date**: When the data was collected
- **Data source**: Official paper / Third-party leaderboard / Vendor self-reported
- **Evaluation protocol**: Single attempt / Multi-sample / Voting

> [!WARNING]
> Scores under different protocols are not directly comparable. Vendor self-reported scores may not be reproducible.

### Defect Source Tags

- 🏛️ = Officially acknowledged issue
- 🗣️ = Discovered by community research/discussion

### Verdict Labels

| Label       | Meaning              |
| ----------- | -------------------- |
| ★ Recommended | Worth referencing    |
| ⚠️ Conditional | Check prerequisites |
| ❌ Not Recommended | Outdated or unreliable |

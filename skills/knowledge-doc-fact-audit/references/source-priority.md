# Source Priority And Audit Template

## Source Priority

Use the highest available source in this order:

1. Official primary source
   project site, vendor docs, standards body, official repo, release notes, maintainer announcement
2. Original research artifact
   paper, dataset card, benchmark card, official leaderboard, source code
3. High-quality secondary source
   reputable technical publication summarizing the primary source
4. Tertiary source
   blog posts, reposts, marketing pages without primary backing

If a lower-tier source conflicts with a higher-tier source, prefer the higher-tier source and note the conflict.

## Claim Types To Prioritize

- Dates: release date, deprecation date, competition year, leaderboard snapshot date
- Counts: dataset size, language count, benchmark tasks, parameter count
- Definitions: what a benchmark measures, what a metric means, supported modalities or tools
- Status claims: latest, official, deprecated, recommended, state of the art
- Comparative claims: better than, broader than, more reliable than

## Recommended Finding Format

```markdown
- High: [file or section]
  Document claim: ...
  Verified against: ...
  Why this is wrong or stale: ...
  Suggested fix: ...
```

## Claim Status Labels

- `confirmed`: source supports the claim as written
- `partially_supported`: source supports the core idea but not the exact wording
- `contradicted`: source directly conflicts with the claim
- `outdated`: claim may once have been true but no longer is
- `unverifiable`: no adequate source found

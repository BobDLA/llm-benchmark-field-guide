---
title: Vision STEM Benchmarks
category: Vision / Multimodal
subcategory: STEM
org: Mixed
date_released: "2023-2025"
dataset_size: "6 benchmark families"
scoring: mixed
verdict: recommended
---

# Benchmark Card: Vision STEM Benchmarks

## 1. One-Line Definition

This cluster card covers the STEM-heavy multimodal benchmarks from the screenshot: `MMMU`, `MathVista`, `MMMU-Pro`, `MathVerse_MINI`, `WeMath`, and `DynaMath`.

## 2. Quick Reference

| Property | Value |
| -------- | ----- |
| Covered benchmarks | `MMMU` / `MathVista` / `MMMU-Pro` / `MathVerse_MINI` / `WeMath` / `DynaMath` |
| Main capability | subject knowledge plus image understanding plus math/science reasoning |
| Common input | charts, geometry figures, textbook visuals, problem screenshots |
| Common output | option, numeric answer, or short response |
| Common scoring | accuracy / exact match |
| Risk tags | split mixing / closed-answer over-interpretation / math-protocol drift |

## 3. Navigation

- `MMMU` is the best-known broad multimodal STEM benchmark in this set.
- `MathVista` is more specifically visual math.
- `MMMU-Pro` is a harder follow-on signal.
- `MathVerse_MINI` is a lighter split from the `MathVerse` family.
- `WeMath` is especially relevant for education-style and Chinese math settings.
- `DynaMath` is useful for robustness against template variation.

#### MMMU

`MMMU` is the broad multimodal STEM entry point in this group.

#### MathVista

`MathVista` is focused on visual math reasoning.

#### MMMU-Pro

`MMMU-Pro` is a harder extension signal.

#### MathVerse_MINI

`MathVerse_MINI` is a lightweight split from the `MathVerse` family.

#### WeMath

The screenshot row `WeMath` is safer to read as belonging to the `We-Math` series; the exact version should be labeled when cited.

#### DynaMath

`DynaMath` is explicitly a robustness-oriented visual math benchmark.

## 4. How It Works

### `MMMU`

- A broad multimodal college/expert-subject benchmark.
- Often used as the main entry point for vision-heavy knowledge and STEM evaluation.
- It is broad, so it should not replace dedicated math benchmarks.
- Source: <https://github.com/MMMU-Benchmark/MMMU>

### `MathVista`

- A benchmark centered on visual math reasoning.
- Typical inputs include geometry figures, plots, tables, and diagram-heavy math problems.
- It is often more informative than broad multimodal QA when the question is specifically "can the model do math from visual context?"
- Source: <https://mathvista.github.io/>

### `MMMU-Pro`

- A harder and more discriminative extension in the `MMMU` family.
- Useful when ordinary `MMMU` scores are already saturating for stronger models.

### `MathVerse_MINI`

- The screenshot row is a lightweight split from the `MathVerse` family.
- Faster to run, but not interchangeable with the full benchmark.

### `WeMath`

- More education- and exam-style than most broad multimodal STEM sets.
- Especially relevant when Chinese math problems matter.

### `DynaMath`

- Emphasizes dynamic or varied visual math problems.
- Its value is in reducing shallow memorization and exposing robustness limits.

## 5. Reliability

- `MMMU` strength does not guarantee strong visual math ability.
- `MathVista`, `MathVerse`, and `WeMath` are all math-heavy, but not interchangeable.
- `MINI`, `Pro`, and dynamic variants must be labeled clearly when quoted.
- Closed-answer scoring is clean, but it can overstate genuine reasoning quality.

## 6. Should I Use It

- Start with `MMMU` for broad multimodal STEM coverage.
- Use `MathVista` for visual math.
- Add `MMMU-Pro` for stronger-model separation.
- Add `WeMath` for education-style and Chinese math settings.
- Add `DynaMath` for robustness checks.

> The practical rule is simple: broad STEM with `MMMU`, visual math with `MathVista`, and always label the exact split or variant.

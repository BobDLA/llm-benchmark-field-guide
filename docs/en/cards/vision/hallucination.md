---
title: Vision Hallucination Benchmarks
category: Vision / Multimodal
subcategory: Hallucination
org: Mixed
date_released: "2023-2024"
dataset_size: "2 benchmark families"
scoring: mixed
verdict: recommended
---

# Benchmark Card: Vision Hallucination Benchmarks

## 1. One-Line Definition

This cluster card covers the hallucination-oriented benchmarks from the screenshot: `HallusionBench` and `MMHal`.

## 2. Quick Reference

| Property | Value |
| -------- | ----- |
| Covered benchmarks | `HallusionBench` / `MMHal-Score` / `MMHal-Hallrate` |
| Main capability | visual factuality / hallucination suppression / calibrated restraint |
| Common input | image plus a potentially misleading question |
| Common output | free-form answer |
| Common scoring | hallucination rate / judge score / accuracy-like metrics |
| Risk tags | judge dependence / wording sensitivity / refusal-policy effects |

## 3. Navigation

- `HallusionBench` is a broad visual-hallucination pressure test.
- `MMHal-Score` and `MMHal-Hallrate` are two common metrics from the same `MMHal` family, not two independent benchmarks.
- These benchmarks are useful for exposing "confidently wrong visual answers" that broad QA benchmarks can hide.

#### HallusionBench

`HallusionBench` is the broad visual hallucination stress test here.

#### MMHal

The screenshot rows `MMHal-Score` and `MMHal-Hallrate` are two metrics from the same `MMHal` family.

## 4. How It Works

### `HallusionBench`

- Tests whether the model invents details that are not actually present in the image.
- The key signal is not just correctness, but whether the model hallucinates under pressure.
- Source: <https://github.com/tianyi-lab/HallusionBench>

### `MMHal`

- Focuses on hallucination in multimodal QA.
- Two common reported metrics are:
  - `MMHal-Score`: an overall answer-quality or judged-quality view
  - `MMHal-Hallrate`: hallucination rate, where lower is usually better
- The screenshot rows should therefore be interpreted together.

## 5. Reliability

- Hallucination benchmarks often depend on judges, annotation rules, or refusal policy.
- "Hallucinates less" is not the same thing as "more useful" if the model becomes too evasive.
- Free-form answers are more realistic than MCQ answers, but also harder to reproduce cleanly.

## 6. Should I Use It

- Yes, if visual trustworthiness matters.
- Yes, even if you already have strong general QA scores, because this cluster measures a different failure mode.

> A good vision model is not just one that sees more. It is also one that knows when not to invent.

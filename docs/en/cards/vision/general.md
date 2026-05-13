---
title: Vision General Benchmarks
category: Vision / Multimodal
subcategory: General
org: Mixed
date_released: "2016-2024"
dataset_size: "4 benchmark families"
scoring: mixed
verdict: recommended
---

# Benchmark Card: Vision General Benchmarks

## 1. One-Line Definition

This cluster card covers the general-purpose vision benchmarks from the screenshot: `MMBench`, `MMStar`, `AI2D`, and `MMT-Bench`.

## 2. Quick Reference

| Property | Value |
| -------- | ----- |
| Covered benchmarks | `MMBench EN v1.1` / `MMBench CN v1.1` / `MMStar` / `AI2D` / `MMT-Bench` |
| Main capability | broad image understanding / multimodal reasoning / diagram understanding / multitask visual QA |
| Common input | one image plus a question, or multiple-choice visual QA |
| Common output | option or short answer |
| Common scoring | accuracy / exact match / benchmark-specific aggregation |
| Risk tags | prompt sensitivity / language-split mixing / overall score hides sub-skill failures |

## 3. Navigation

- `MMBench` is the broad general-vision baseline; the screenshot rows `EN v1.1` and `CN v1.1` are language splits of the same family.
- `MMStar` is a more compact and difficult general multimodal signal.
- `AI2D` is narrow but very informative for textbook-style diagram understanding.
- `MMT-Bench` is a multitask multiple-choice visual benchmark, not a multi-turn chat benchmark.

#### MMBench

The screenshot rows `MMBench EN v1.1` and `MMBench CN v1.1` both belong to the `MMBench` family.

#### MMStar

`MMStar` is a compact general multimodal benchmark.

#### AI2D

`AI2D` is a classic textbook-diagram understanding dataset.

#### MMT-Bench

`MMT-Bench` is better read as a multitask multiple-choice visual benchmark.

## 4. How It Works

### `MMBench`

- A representative broad multimodal QA benchmark.
- It mixes perception, text understanding, commonsense, and light reasoning.
- When citing it, specify the split and version.
- Source: <https://github.com/open-compass/MMBench>

### `MMStar`

- A compact but difficult multimodal benchmark.
- Useful as a high-density general signal for small and mid-sized VLMs.
- It is still a general benchmark, not a document, GUI, or video specialist benchmark.
- Source: <https://github.com/MMStar-Benchmark/MMStar>

### `AI2D`

- AllenAI's diagram understanding dataset built around textbook-style science diagrams.
- It is a diagram benchmark, not an open-world image QA benchmark.
- It often exposes failures on arrows, labels, and structural relations that broad benchmarks miss.
- Source: <https://allenai.org/data/diagrams>

### `MMT-Bench`

- Focuses on multi-turn image-grounded dialogue.
- It is useful for exposing state tracking and consistency issues across turns.
- Read it as a complement to single-turn multimodal QA.

## 5. Reliability

- High scores here do not imply strong document, OCR, GUI, or video ability.
- `MMBench` and `MMStar` overall scores can hide major sub-skill gaps.
- `AI2D` is valuable but should not be over-generalized beyond diagram understanding.
- `MMT-Bench` is more product-like, but also more template-sensitive.

## 6. Should I Use It

- Use `MMBench` or `MMStar` for a broad first-pass visual capability check.
- Add `AI2D` when diagram understanding matters.
- Add `MMT-Bench` when multi-turn multimodal chat matters.

> Treat these as the overview layer, not as substitutes for OCR, GUI, grounding, or video benchmarks.

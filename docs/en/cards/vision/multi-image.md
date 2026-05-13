---
title: Vision Multi Image Benchmarks
category: Vision / Multimodal
subcategory: Multi-Image
org: Mixed
date_released: "2024-2025"
dataset_size: "3 benchmark families"
scoring: mixed
verdict: recommended
---

# Benchmark Card: Vision Multi-Image Benchmarks

## 1. One-Line Definition

This cluster card covers the screenshot's multi-image benchmarks: `BLINK`, `MUIRBench`, and `MMSI-Bench`.

## 2. Quick Reference

| Property | Value |
| -------- | ----- |
| Covered benchmarks | `BLINK` / `MUIRBench` (`MuirBench`) / `MMSI-Bench` |
| Main capability | cross-image retrieval / comparison / information aggregation |
| Common input | multiple images plus a question or instruction |
| Common output | option, ranking, or short answer |
| Common scoring | accuracy / retrieval-style metrics |
| Risk tags | image-order sensitivity / context-budget limits / false aggregation success |

## 3. Navigation

- Multi-image benchmarks are not just single-image benchmarks with extra attachments.
- `BLINK` is useful for quick cross-image lookup and comparison.
- `MUIRBench` is more like broad multi-image understanding and reasoning.
- `MMSI-Bench` is useful for checking stable information selection and aggregation across images.

#### BLINK

`BLINK` is useful for cross-image lookup and matching.

#### MUIRBench

The screenshot row `MUIRBench` corresponds to the official name `MuirBench`.

#### MMSI-Bench

`MMSI-Bench` is more specifically a multi-image spatial-intelligence benchmark.

## 4. How It Works

### `BLINK`

- Typical tasks ask the model to find, match, compare, or identify content across several images.
- It often exposes models that effectively focus on only one image even when several are supplied.

### `MUIRBench`

- A more general multi-image understanding and reasoning benchmark.
- Its value is that it forces real cross-image integration instead of independent single-image answering.

### `MMSI-Bench`

- Typically emphasizes selection, integration, and consistency across multiple visuals.
- It is useful when a model looks fine on single-image tasks but becomes unstable as soon as several images must be combined.

## 5. Reliability

- Multi-image tasks are highly sensitive to image ordering, truncation, and visual-token budgeting.
- Error type matters as much as the average score: missed image, wrong match, partial aggregation, or premature answer.
- This is still a newer benchmark family, so implementation drift is common.

## 6. Should I Use It

- If the product truly consumes several images at once, yes.
- If the product is single-image-only, this can stay second priority.

> Multi-image ability is a real failure mode for many VLMs and should not be inferred from single-image scores.

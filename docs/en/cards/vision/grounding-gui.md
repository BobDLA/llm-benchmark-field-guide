---
title: Vision Grounding and GUI Benchmarks
category: Vision / Multimodal
subcategory: Grounding / GUI
org: Mixed
date_released: "2014-2024"
dataset_size: "2 benchmark families"
scoring: mixed
verdict: recommended
---

# Benchmark Card: Vision Grounding and GUI Benchmarks

## 1. One-Line Definition

This cluster card covers `RefCOCO` and `ScreenSpot`, the screenshot's main grounding-oriented benchmarks for natural images and GUI screenshots.

## 2. Quick Reference

| Property | Value |
| -------- | ----- |
| Covered benchmarks | `RefCOCO` / `ScreenSpot_Mobile` / `ScreenSpot_Desktop` / `ScreenSpot_Web` |
| Main capability | referring-expression grounding / GUI target localization / screen-element grounding |
| Common input | image or screenshot plus a textual instruction |
| Common output | region, point, or target element |
| Common scoring | IoU / accuracy / success rate |
| Risk tags | domain mismatch / UI drift / grounding-planning entanglement |

## 3. Navigation

- `RefCOCO` is classic visual grounding.
- `ScreenSpot` is GUI grounding and is much closer to real screen-use products.
- `Mobile`, `Desktop`, and `Web` are environment splits within `ScreenSpot`.

#### RefCOCO

`RefCOCO` is the classic natural-image grounding reference.

#### ScreenSpot

The screenshot rows `ScreenSpot_Mobile`, `ScreenSpot_Desktop`, and `ScreenSpot_Web` all belong to the `ScreenSpot` family.

## 4. How It Works

### `RefCOCO`

- The task is to locate the object referred to by a natural-language expression.
- It is a strong baseline for grounding, but not a full tool-use or agent benchmark.
- Source: <https://bvisionweb1.cs.unc.edu/referit/>

### `ScreenSpot`

- The task is to localize the correct target in a screenshot from an instruction such as "click the search box."
- The challenge is not long-form answering. It is accurate target grounding in a UI.
- The `Mobile`, `Desktop`, and `Web` splits differ meaningfully in layout density and visual style.

## 5. Reliability

- Strong `RefCOCO` performance does not imply strong GUI grounding.
- Strong `ScreenSpot` performance does not imply strong full-agent performance. It is a grounding sub-capability.
- UI metrics are very sensitive to resolution, screenshot style, and element density.

## 6. Should I Use It

- Use `RefCOCO` for general grounding checks.
- Use `ScreenSpot` for GUI localization checks.
- Pair `ScreenSpot` with broader agent benchmarks when evaluating real GUI agents.

> If the product works on screens, `ScreenSpot` is usually more relevant than a broad image-QA score.

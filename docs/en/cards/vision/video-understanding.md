---
title: Vision Video Understanding Benchmarks
category: Vision / Multimodal
subcategory: Video Understanding
org: Mixed
date_released: "2024-2025"
dataset_size: "5 benchmark families"
scoring: mixed
verdict: recommended
---

# Benchmark Card: Vision Video Understanding Benchmarks

## 1. One-Line Definition

This cluster card covers the video benchmarks from the screenshot: `Video-MME`, `LVBench`, `MLVU`, `LongVideoBench`, and `MotionBench`.

## 2. Quick Reference

| Property | Value |
| -------- | ----- |
| Covered benchmarks | `Video-MME (w/o subs)` / `LVBench` / `MLVU (M-Avg)` / `LongVideoBench (val)` / `MotionBench` |
| Main capability | video understanding / long-video memory / temporal reasoning / motion understanding |
| Common input | video clip, sampled frames, optional subtitles, question |
| Common output | option, short answer, or free-form answer |
| Common scoring | accuracy / benchmark-specific aggregate |
| Risk tags | frame-sampling sensitivity / subtitle mixing / length-reasoning entanglement |

## 3. Navigation

- `Video-MME` is one of the most common general video benchmark entry points; the screenshot uses the `w/o subs` protocol.
- `LVBench` and `LongVideoBench` are more long-video-oriented.
- `MLVU` is a broader multi-dimension video-understanding signal.
- `MotionBench` is more motion-focused than broad video QA.

#### Video-MME

The screenshot row `Video-MME (w/o subs)` is the no-subtitle protocol for the `Video-MME` family.

#### LVBench

`LVBench` is more long-video-oriented.

#### MLVU

The screenshot row `MLVU (M-Avg)` is an aggregate view from the `MLVU` family.

#### LongVideoBench

The screenshot row `LongVideoBench (val)` is the validation-split view.

#### MotionBench

`MotionBench` is more motion-focused.

## 4. How It Works

### `Video-MME (w/o subs)`

- A broad video-understanding benchmark often used as a headline video score.
- `w/o subs` means without subtitles, and that protocol detail must be preserved when comparing results.
- Source: <https://video-mme.github.io/>

### `LVBench`

- More focused on long-video understanding.
- Useful for exposing forgetting, jump-cut reasoning failure, and shallow clip-level reading.

### `MLVU (M-Avg)`

- `M-Avg` is a common aggregate reporting view inside `MLVU`.
- It is useful as a stability summary across multiple sub-tasks, not just one question type.

### `LongVideoBench (val)`

- The screenshot row refers to the validation-split view.
- Long-video numbers should always be labeled with the exact split.

### `MotionBench`

- More focused on motion cues and temporal change.
- Useful when a model looks fine on static-frame tasks but struggles with ordering, direction, or movement.

## 5. Reliability

- Video scores are highly sensitive to frame sampling, sampling budget, and subtitle policy.
- Long-video benchmarks often mix memory capacity and reasoning quality.
- Aggregate scores such as `M-Avg` are convenient but can hide large sub-task failures.

## 6. Should I Use It

- Start with `Video-MME` for a broad video baseline.
- Add `LVBench` and `LongVideoBench` for long-context video stress.
- Add `MLVU` for broader sub-task coverage.
- Add `MotionBench` when motion and temporal fidelity matter.

> The first rule for video benchmarks is to preserve the protocol: subtitle use, frame sampling, and split must be explicit.

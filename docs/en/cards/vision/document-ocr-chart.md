---
title: Vision Document OCR Chart Benchmarks
category: Vision / Multimodal
subcategory: Document / OCR / Chart
org: Mixed
date_released: "2020-2025"
dataset_size: "5 benchmark families"
scoring: mixed
verdict: recommended
---

# Benchmark Card: Vision Document / OCR / Chart Benchmarks

## 1. One-Line Definition

This cluster card covers the document, OCR, and chart benchmarks from the screenshot: `OCRBench`, `OCRBench_v2`, `OmniDocBench_v1.5`, `DocVQA_VAL`, and `CharXiv_Reasoning`.

## 2. Quick Reference

| Property | Value |
| -------- | ----- |
| Covered benchmarks | `OCRBench` / `OCRBench_v2_EN` / `OCRBench_v2_CN` / `OmniDocBench_v1.5` / `DocVQA_VAL` / `CharXiv_Reasoning` |
| Main capability | OCR / page understanding / document QA / chart and scientific-figure reasoning |
| Common input | scanned pages, screenshots, tables, plots, paper figures |
| Common output | extracted text, short answer, or structured field |
| Common scoring | accuracy / ANLS / task-specific metrics |
| Risk tags | OCR vs reasoning entanglement / layout dependence / language-split mixing |

## 3. Navigation

- `OCRBench` and `OCRBench_v2` are more OCR-centric.
- `OmniDocBench` is more document-understanding-centric.
- `DocVQA_VAL` is a validation-split view of the `DocVQA` family.
- `CharXiv_Reasoning` is better read as the reasoning subset within the `CharXiv` family, not as generic OCR.

#### OCRBench / OCRBench_v2

The screenshot row `OCRBench` refers to the earlier benchmark, while `OCRBench_v2_EN` and `OCRBench_v2_CN` refer to the improved bilingual `OCRBench v2` protocol.

#### OmniDocBench_v1.5

`OmniDocBench_v1.5` is more document-task-oriented.

#### DocVQA_VAL

`DocVQA_VAL` is a validation-split view of document QA.

#### CharXiv_Reasoning

`CharXiv_Reasoning` is better read as the reasoning subset from the `CharXiv` family.

## 4. How It Works

### `OCRBench`

- A broad OCR-oriented multimodal benchmark.
- Useful for exposing weaknesses on dense text, tables, receipts, and layout-heavy images.

### `OCRBench_v2_EN` / `OCRBench_v2_CN`

- The screenshot rows are language splits of `OCRBench v2`.
- They are useful for checking cross-language OCR balance.
- They should not be collapsed into one headline number without context.

### `OmniDocBench_v1.5`

- More focused on full document understanding than pure text recognition.
- Better aligned with document AI products than OCR-only tests.

### `DocVQA_VAL`

- A validation-split view of the `DocVQA` family.
- It is about answering questions from documents, not just extracting text.
- Source: <https://www.docvqa.org/>

### `CharXiv_Reasoning`

- Focuses on reasoning over scientific figures, plots, and chart-like materials.
- It is useful for checking whether a model can read research-style visuals instead of only plain text pages.

## 5. Reliability

- Strong OCR is not the same thing as strong chart or document reasoning.
- `DocVQA` and `OmniDocBench` are closer to task completion, while `OCRBench` is more of a capability sweep.
- Image quality, layout style, and language mix can change results materially.

## 6. Should I Use It

- Start with `OCRBench` for OCR baseline checks.
- Add `OCRBench_v2_EN/CN` for cross-language OCR comparison.
- Use `OmniDocBench` and `DocVQA` for document understanding.
- Add `CharXiv_Reasoning` when scientific figures and charts matter.

> Document benchmarks are often misread as "just OCR." In practice, layout, structure, QA, and figure reasoning are separate capability lines.

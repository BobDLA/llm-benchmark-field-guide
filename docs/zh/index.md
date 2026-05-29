---
layout: home
hero:
  name: Benchmark 解读指南
  text: 看懂每个 benchmark 到底在测什么
  tagline: 不只看排行榜数字——读懂测试方法、可信度与适用场景
  actions:
    - theme: brand
      text: 开始阅读
      link: /zh/cards/guide/how-to-read
    - theme: alt
      text: 查看全部卡片
      link: /zh/cards/comparison

features:
  - icon: 🔍
    title: Knowledge · 知识
    details: "MMLU-Pro — 多学科知识 + 多选题推理"
    link: /zh/cards/knowledge/mmlu-pro
  - icon: 📋
    title: Instruction Following · 指令遵循
    details: "IFEval — 显式约束有没有全部做到"
    link: /zh/cards/instruction-following/ifeval
  - icon: 📚
    title: Long Context · 长上下文
    details: "LongBench v2 · LongMemEval · LoCoMo · ConvoMem — 长材料推理与会话记忆"
    link: /zh/cards/long-context/longbench-v2
  - icon: 🔬
    title: STEM · 科学
    details: "GPQA — 研究生难度科学问答"
    link: /zh/cards/stem/gpqa
  - icon: ➗
    title: Math · 数学
    details: "AIME (MathArena) — 竞赛数学 final-answer 推理"
    link: /zh/cards/math/aime
  - icon: 🧩
    title: Hard Reasoning · 硬推理
    details: "HLE — 前沿专家级 closed-ended 硬题"
    link: /zh/cards/hard-reasoning/hle
  - icon: 🧠
    title: Reasoning · 推理
    details: "LiveCodeBench — 新鲜代码题与多场景代码能力"
    link: /zh/cards/reasoning/livecodebench
  - icon: 🌐
    title: Search Agent · 搜索代理
    details: "BrowseComp · WideSearch — 难题追踪与广搜整理"
    link: /zh/cards/search-agent/browsecomp
  - icon: 🛠️
    title: General Agent · 通用代理
    details: "BFCL V4 · TAU2-Bench · MCPMark — 工具调用、对话代理与 MCP"
    link: /zh/cards/general-agent/bfcl-v4
  - icon: 💻
    title: Coding Agent · 代码代理
    details: "SWE-bench · Terminal-Bench 2 — 真实仓库修复与终端执行"
    link: /zh/cards/coding-agent/swebench
  - icon: 🈯
    title: Translation · 翻译
    details: "WMT24++ — 55 语言与方言的真实翻译质量"
    link: /zh/cards/translation/wmt24
  - icon: 🌍
    title: Multilingualism · 多语言
    details: "MMMLU (+ MMLU-ProX) — 语言切换后的知识保持"
    link: /zh/cards/multilingualism/mmmlu
  - icon: 🖼️
    title: Vision / Multimodal · 视觉多模态
    details: "MMBench · MMMU · OCRBench · ScreenSpot · Video-MME 等多模态专题卡"
    link: /zh/cards/vision/general
---

## 项目简介

为每个重要的 LLM benchmark 建立一张标准化的**解读卡片**。每张卡片统一回答 **4 个核心问题**：

| **你想知道什么** | **去看哪里** | **对应章节** |
|----------------|------------|------------|
| **这东西是什么？** | 一句话定义 + 快速参考 | §1 — §2 |
| **它怎么运作？** | 测什么、输入输出、判分 | §4 |
| **它可靠吗？** | 不测什么、缺陷、污染风险 | §5 |
| **我该用它吗？** | 适用场景、是否值得看 | §6 |

> [!TIP]
> 第一次来？先看 [怎么读一张卡片](/zh/cards/guide/how-to-read)，2 分钟搞定阅读路径。

## 13 个能力类目 · 26 张卡片

当前结构包括 `19` 张单 benchmark 卡和 `7` 张视觉 / 多模态专题卡。点击任一卡片直接进入解读。

| **能力类目** | **Benchmark 卡片** | **主要测什么** |
|------------|-------------------|---------------|
| 🔍 Knowledge | [MMLU-Pro](/zh/cards/knowledge/mmlu-pro) | 多学科知识 + 多选推理 |
| 📋 Instruction Following | [IFEval](/zh/cards/instruction-following/ifeval) | 显式约束有没有全部做到 |
| 📚 Long Context | [LongBench v2](/zh/cards/long-context/longbench-v2)、[LongMemEval](/zh/cards/long-context/longmemeval)、[LoCoMo](/zh/cards/long-context/locomo)、[ConvoMem](/zh/cards/long-context/convomem) | 长材料深理解、长期交互记忆与会话记忆 |
| 🔬 STEM | [GPQA](/zh/cards/stem/gpqa) | 研究生难度科学问答 |
| ➗ Math | [AIME (MathArena)](/zh/cards/math/aime) | 竞赛数学 final-answer 推理 |
| 🧩 Hard Reasoning | [HLE](/zh/cards/hard-reasoning/hle) | 前沿专家级 closed-ended 硬题 |
| 🧠 Reasoning | [LiveCodeBench](/zh/cards/reasoning/livecodebench) | 新鲜代码题与多场景代码能力 |
| 🌐 Search Agent | [BrowseComp](/zh/cards/search-agent/browsecomp)、[WideSearch](/zh/cards/search-agent/widesearch) | 难题追踪 / 广搜整理 |
| 🛠️ General Agent | [BFCL V4](/zh/cards/general-agent/bfcl-v4)、[TAU2-Bench](/zh/cards/general-agent/tau2-bench)、[MCPMark](/zh/cards/general-agent/mcpmark) | 工具调用 / 对话代理 / MCP 工具工作流 |
| 💻 Coding Agent | [SWE-bench](/zh/cards/coding-agent/swebench)、[Terminal-Bench 2](/zh/cards/coding-agent/terminal-bench-2) | 真实仓库修复 / 终端执行 |
| 🈯 Translation | [WMT24++](/zh/cards/translation/wmt24) | 多语言真实翻译质量 |
| 🌍 Multilingualism | [MMMLU](/zh/cards/multilingualism/mmmlu) | 语言切换后的知识保持 |
| 🖼️ Vision / Multimodal | [MMBench](/zh/cards/vision/general#mmbench)、[MMStar](/zh/cards/vision/general#mmstar)、[AI2D](/zh/cards/vision/general#ai2d)、[MMMU](/zh/cards/vision/stem#mmmu)、[MathVista](/zh/cards/vision/stem#mathvista)、[OCRBench](/zh/cards/vision/document-ocr-chart#ocrbench--ocrbench-v2)、[DocVQA](/zh/cards/vision/document-ocr-chart#docvqa-val)、[RefCOCO](/zh/cards/vision/grounding-gui#refcoco)、[ScreenSpot](/zh/cards/vision/grounding-gui#screenspot)、[BLINK](/zh/cards/vision/multi-image#blink)、[HallusionBench](/zh/cards/vision/hallucination#hallusionbench)、[MMHal](/zh/cards/vision/hallucination#mmhal)、[Video-MME](/zh/cards/vision/video-understanding#video-mme)、[MLVU](/zh/cards/vision/video-understanding#mlvu) | 通用视觉、视觉 STEM、文档、GUI、多图、幻觉与视频理解 |

## 建议阅读顺序

1. **了解卡片结构** — 先看 [怎么读一张卡片](/zh/cards/guide/how-to-read)，了解每张卡片的章节布局
2. **了解取材方法** — 再看 [来源方法](/zh/cards/guide/how-we-source)，知道每张卡为什么这么写
3. **纵览全局** — 看 [跨卡片对比](/zh/cards/comparison)，先决定你关心的是知识、数学、搜索、agent 还是翻译
4. **深入单卡** — 进入你最关心的能力类目，重点关注 `§4 它怎么运作` 与 `§5 它可靠吗`

> [!NOTE]
> 每张卡片都会同时写 benchmark 的**价值**和**失真来源**，不会只报好消息。

---

<div style="text-align:center; padding: 2.5rem 0;">
<p style="font-size: 1.25rem; font-weight: 600; color: var(--vp-c-text-1); margin-bottom: 1.5rem;">准备好了？</p>
<a class="VPButton medium brand" href="/zh/cards/guide/how-to-read" style="margin-right: 12px;">开始阅读</a>
<a class="VPButton medium alt" href="/zh/cards/comparison">查看全部卡片</a>
</div>

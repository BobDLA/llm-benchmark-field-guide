---
layout: home
hero:
  name: LLM Benchmark Field Guide
  text: Understand what each benchmark is really measuring
  tagline: Go beyond leaderboard numbers and read each benchmark in terms of task design, scoring logic, reliability, and actual use cases
  actions:
    - theme: brand
      text: Start With the Guide
      link: /en/guide/how-to-read
    - theme: alt
      text: Compare All Cards
      link: /en/comparison

features:
  - icon: 🔍
    title: Knowledge
    details: MMLU-Pro measures multi-subject knowledge and harder multiple-choice reasoning
    link: /en/cards/knowledge/mmlu-pro
  - icon: 📋
    title: Instruction Following
    details: IFEval checks whether a model actually obeys explicit constraints
    link: /en/cards/instruction-following/ifeval
  - icon: 📚
    title: Long Context
    details: LongBench v2 stresses deep reasoning over realistic long materials
    link: /en/cards/long-context/longbench-v2
  - icon: 📄
    title: AA-LCR
    details: Real-world multi-document sets around 100k tokens for extraction, calculation, and synthesis
    link: /en/cards/long-context/aa-lcr
  - icon: 🧠
    title: LongMemEval
    details: Long-term interactive memory for chat assistants, including retrieval, updates, temporal reasoning, and abstention
    link: /en/cards/long-context/longmemeval
  - icon: 👤
    title: PersonaMem
    details: Multi-session user profiles, preference evolution, and personalized response selection
    link: /en/cards/long-context/personamem
  - icon: 💬
    title: LoCoMo
    details: Very long open-domain conversation QA, event summarization, and multimodal dialogue
    link: /en/cards/long-context/locomo
  - icon: 🗃️
    title: ConvoMem
    details: Large-scale conversational memory with 75,336 QA pairs across six evidence categories
    link: /en/cards/long-context/convomem
  - icon: 🔬
    title: STEM
    details: GPQA targets graduate-level science QA that is hard to shortcut with casual search
    link: /en/cards/stem/gpqa
  - icon: ➗
    title: Math
    details: AIME is a small but very hard closed-answer competition-math signal
    link: /en/cards/math/aime
  - icon: 🧩
    title: Hard Reasoning
    details: HLE pushes frontier models with expert-written closed-ended questions
    link: /en/cards/hard-reasoning/hle
  - icon: 🧠
    title: Reasoning
    details: LiveCodeBench tracks fresh code problems across generation, repair, and execution
    link: /en/cards/reasoning/livecodebench
  - icon: 🌐
    title: Search Agent
    details: BrowseComp measures persistent open-web fact chasing and evidence assembly
    link: /en/cards/search-agent/browsecomp
  - icon: 🔎
    title: WideSearch
    details: Breadth-first search, missing-field completion, and structured information gathering
    link: /en/cards/search-agent/widesearch
  - icon: 🛠️
    title: General Agent
    details: BFCL V4, TAU2-Bench, and MCPMark cover tool use, business workflows, and MCP-native tasks
    link: /en/cards/general-agent/bfcl-v4
  - icon: 💻
    title: SWE-bench
    details: Real GitHub issues, real repository snapshots, and test-validated patches
    link: /en/cards/coding-agent/swebench
  - icon: 🖥️
    title: Coding Agent
    details: Terminal-Bench 2 measures end-to-end task execution in a real terminal
    link: /en/cards/coding-agent/terminal-bench-2
  - icon: 🈯
    title: Translation
    details: WMT24++ measures real many-language translation quality across 55 directions
    link: /en/cards/translation/wmt24
  - icon: 🌍
    title: Multilingualism
    details: MMMLU measures whether knowledge survives language switching
    link: /en/cards/multilingualism/mmmlu
  - icon: 🖼️
    title: Vision / Multimodal
    details: MMBench, MMMU, OCRBench, ScreenSpot, and Video-MME cluster cards
    link: /en/cards/vision/general
---

## What This Site Does

This site builds a standardized **benchmark card** for each important LLM evaluation we want to keep in working memory.

Every card answers 4 core questions:

| Question              | Section |
| --------------------- | ------- |
| What is it?           | §1-§2   |
| How does it work?     | §4      |
| Is it reliable?       | §5      |
| Should I use it?      | §6      |

> [!TIP]
> New here? Start with [How to Read a Card](/en/guide/how-to-read), then read [How We Source These Cards](/en/guide/how-we-source).

## 13 Capability Categories, 28 Cards

This includes `21` single-benchmark cards and `7` vision / multimodal cluster cards.

| Category | Benchmark Cards | What They Mainly Measure |
| -------- | --------------- | ------------------------ |
| Knowledge | [MMLU-Pro](/en/cards/knowledge/mmlu-pro) | Multi-subject knowledge plus harder MCQ reasoning |
| Instruction Following | [IFEval](/en/cards/instruction-following/ifeval) | Whether explicit constraints are fully satisfied |
| Long Context | [LongBench v2](/en/cards/long-context/longbench-v2), [AA-LCR](/en/cards/long-context/aa-lcr), [LongMemEval](/en/cards/long-context/longmemeval), [PersonaMem](/en/cards/long-context/personamem), [LoCoMo](/en/cards/long-context/locomo), [ConvoMem](/en/cards/long-context/convomem) | Long-context reasoning, multi-document reasoning, long-term interactive memory, and personalized conversational memory |
| STEM | [GPQA](/en/cards/stem/gpqa) | Graduate-level science QA |
| Math | [AIME (MathArena)](/en/cards/math/aime) | Closed-answer competition math reasoning |
| Hard Reasoning | [HLE](/en/cards/hard-reasoning/hle) | Frontier-level expert closed-ended reasoning |
| Reasoning | [LiveCodeBench](/en/cards/reasoning/livecodebench) | Fresh code tasks and multi-scenario code reasoning |
| Search Agent | [BrowseComp](/en/cards/search-agent/browsecomp), [WideSearch](/en/cards/search-agent/widesearch) | Hard fact pursuit and broad information gathering |
| General Agent | [BFCL V4](/en/cards/general-agent/bfcl-v4), [TAU2-Bench](/en/cards/general-agent/tau2-bench), [MCPMark](/en/cards/general-agent/mcpmark) | Tool use, business workflows, and MCP-native tasks |
| Coding Agent | [SWE-bench](/en/cards/coding-agent/swebench), [Terminal-Bench 2](/en/cards/coding-agent/terminal-bench-2) | Real repo repair and terminal execution |
| Translation | [WMT24++](/en/cards/translation/wmt24) | Real many-language translation quality |
| Multilingualism | [MMMLU](/en/cards/multilingualism/mmmlu) | Knowledge retention after language switching |
| Vision / Multimodal | [MMBench](/en/cards/vision/general#mmbench), [MMStar](/en/cards/vision/general#mmstar), [AI2D](/en/cards/vision/general#ai2d), [MMMU](/en/cards/vision/stem#mmmu), [MathVista](/en/cards/vision/stem#mathvista), [OCRBench](/en/cards/vision/document-ocr-chart#ocrbench--ocrbench-v2), [DocVQA](/en/cards/vision/document-ocr-chart#docvqa-val), [RefCOCO](/en/cards/vision/grounding-gui#refcoco), [ScreenSpot](/en/cards/vision/grounding-gui#screenspot), [BLINK](/en/cards/vision/multi-image#blink), [HallusionBench](/en/cards/vision/hallucination#hallusionbench), [MMHal](/en/cards/vision/hallucination#mmhal), [Video-MME](/en/cards/vision/video-understanding#video-mme), [MLVU](/en/cards/vision/video-understanding#mlvu) | General vision, visual STEM, documents, GUI, multi-image, hallucination, and video understanding |

## Suggested Reading Order

1. Start with [How to Read a Card](/en/guide/how-to-read) to understand the 6-section structure.
2. Read [How We Source These Cards](/en/guide/how-we-source) so you know which official materials we trust first.
3. Use [Cross-Card Comparison](/en/comparison) to pick the capability cluster you actually care about.
4. Then open the specific card and focus on `§4 How It Works` and `§5 Reliability`.

> [!NOTE]
> Every card deliberately includes both the benchmark's value and the main ways its numbers can mislead you.

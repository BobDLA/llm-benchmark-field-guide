# Cross-Card Comparison

The site currently includes 24 core cards:

- `MMLU-Pro`: Knowledge / Robust Multi-Subject QA
- `IFEval`: Instruction Following / Verifiable Constraint Satisfaction
- `LongBench v2`: Long Context / Deep Long-Context Reasoning
- `LongMemEval`: Long Context / Long-Term Interactive Memory
- `GPQA`: STEM / Graduate Science QA
- `AIME (MathArena)`: Math / Competition Math
- `HLE`: Hard Reasoning / Frontier Closed-Ended Reasoning
- `LiveCodeBench`: Reasoning / Code Reasoning
- `BrowseComp`: Search Agent / Persistent Browsing
- `WideSearch`: Search Agent / Broad Information-Seeking
- `BFCL V4`: General Agent / Tool Use
- `TAU2-Bench`: General Agent / Real-World Task Completion
- `MCPMark`: General Agent / MCP Tool Use
- `SWE-bench`: Coding Agent / Autonomous Bug Fix
- `Terminal-Bench 2`: Coding Agent / Terminal Operation
- `WMT24++`: Translation / Multilingual Machine Translation
- `MMMLU`: Multilingualism / Multilingual QA
- `Vision General Benchmarks`: Vision / Multimodal / General
- `Vision STEM Benchmarks`: Vision / Multimodal / STEM
- `Vision Document / OCR / Chart Benchmarks`: Vision / Multimodal / Document
- `Vision Grounding and GUI Benchmarks`: Vision / Multimodal / Grounding / GUI
- `Vision Multi-Image Benchmarks`: Vision / Multimodal / Multi-Image
- `Vision Hallucination Benchmarks`: Vision / Multimodal / Hallucination
- `Vision Video Understanding Benchmarks`: Vision / Multimodal / Video

This page is not a substitute for the single-card writeups. Its job is to help you decide which benchmark family to read first.

## At a Glance

| Benchmark | Category | What It Mainly Measures | Main Scoring Signal | Main Interpretation Risk |
| --------- | -------- | ----------------------- | ------------------- | ------------------------ |
| MMLU-Pro | Knowledge | Multi-subject knowledge + harder MCQ reasoning | accuracy | contamination and MCQ saturation |
| IFEval | Instruction Following | Whether explicit constraints are fully obeyed | rule-based checks | content-quality blind spots |
| LongBench v2 | Long Context | Deep reasoning over long realistic context | accuracy | length and reasoning are entangled |
| LongMemEval | Long Context | Long-term chat memory, retrieval, updates, temporal reasoning, and abstention | LLM judge + retrieval recall | cleaned-version, judge, and memory-system protocol mixing |
| GPQA | STEM | Graduate-level science QA | accuracy | subset mixing and narrow domain coverage |
| AIME (MathArena) | Math | Closed-answer competition math reasoning | exact match | tiny sample size and budget mixing |
| HLE | Hard Reasoning | Expert-written frontier closed-ended reasoning | automated grading | answer ambiguity and version drift |
| LiveCodeBench | Reasoning | Fresh code tasks across multiple scenarios | pass@k | release drift and lite/full mixing |
| BrowseComp | Search Agent | Persistent open-web fact pursuit | LLM judge | web drift and judge subjectivity |
| WideSearch | Search Agent | Broad search-space expansion and information organization | mixed evaluation | judge reliance and small sample size |
| BFCL V4 | General Agent | Agentic tool use and function calling | weighted overall score | overall score hides category-level failures |
| TAU2-Bench | General Agent | Multi-turn business task completion | task success / pass^k | simulator and domain narrowness |
| MCPMark | General Agent | Native MCP server use | pass@k / success rate | fast ecosystem drift |
| SWE-bench | Coding Agent | Real-repo bug fixing | test execution | contamination and scaffold variance |
| Terminal-Bench 2 | Coding Agent | End-to-end terminal execution | test execution | beta churn and harness dependence |
| WMT24++ | Translation | Many-language translation quality | automatic MT metrics | metric bias and language-pair heterogeneity |
| MMMLU | Multilingualism | Knowledge retention after language switching | accuracy | translated-data limitations |

## If You Only Want to Answer One Question

### "Will the model obey explicit instructions?"

- Start with [IFEval](/en/cards/instruction-following/ifeval).
- If you care about multilingual constraint following, treat MaXIFE as the natural extension beyond this site.

### "How strong is the model's knowledge, science, and math base?"

- Start with [MMLU-Pro](/en/cards/knowledge/mmlu-pro) for broad knowledge.
- Add [GPQA](/en/cards/stem/gpqa) for graduate-level science.
- Add [AIME](/en/cards/math/aime) for closed-answer competition math.
- Add [HLE](/en/cards/hard-reasoning/hle) if you want a harsher frontier-level ceiling test.

### "Can the model really use long context and fresh reasoning?"

- Read [LongBench v2](/en/cards/long-context/longbench-v2) for long-context reasoning.
- Read [LongMemEval](/en/cards/long-context/longmemeval) for long-term interactive memory.
- Add [LiveCodeBench](/en/cards/reasoning/livecodebench) for fresh code reasoning and code-task breadth.

### "Can the model search or act like a research assistant?"

- Read [BrowseComp](/en/cards/search-agent/browsecomp) for persistence on hard-to-find facts.
- Read [WideSearch](/en/cards/search-agent/widesearch) for breadth-first search and structured information gathering.

### "Can the model use tools, handle workflows, or work inside MCP?"

- Read [BFCL V4](/en/cards/general-agent/bfcl-v4) for tool-use breadth and function-calling fragility.
- Read [TAU2-Bench](/en/cards/general-agent/tau2-bench) for dialogue-plus-backend business workflows.
- Read [MCPMark](/en/cards/general-agent/mcpmark) for MCP-native tool use.

### "Can the model actually complete engineering work?"

- Read [SWE-bench](/en/cards/coding-agent/swebench) for real-repo issue fixing.
- Read [Terminal-Bench 2](/en/cards/coding-agent/terminal-bench-2) for real terminal execution.

### "How strong is the model in multilingual settings?"

- Read [WMT24++](/en/cards/translation/wmt24) for translation quality.
- Read [MMMLU](/en/cards/multilingualism/mmmlu) for cross-language knowledge retention.

## Benchmark Pairs Most Likely to Be Misread

### `AIME` vs `HLE`

- `AIME` is a narrower but cleaner closed-answer competition-math signal.
- `HLE` is broader and tries to stress frontier reasoning across expert domains.

### `LongBench v2` vs `LongMemEval`

- `LongBench v2` is about deep reasoning over long materials provided at once.
- `LongMemEval` is about persistent memory over accumulated chat-assistant interactions.
- One is primarily a long-context reading signal; the other is closer to a memory-system benchmark.

### `BrowseComp` vs `WideSearch`

- `BrowseComp` is mostly about chasing one hard answer.
- `WideSearch` is mostly about covering a broad information need without stopping too early.

### `BFCL V4` vs `TAU2-Bench` vs `MCPMark`

- `BFCL V4` is the broadest tool-use benchmark here.
- `TAU2-Bench` is the most business-workflow-like.
- `MCPMark` is the most protocol-specific and MCP-native.

### `MMMLU` vs `WMT24++`

- `MMMLU` asks whether knowledge survives language switching.
- `WMT24++` asks whether translation quality itself is strong.

### `SWE-bench` vs `Terminal-Bench 2`

- `SWE-bench` is centered on real GitHub issue repair.
- `Terminal-Bench 2` is centered on end-to-end CLI execution.

## Vision / Multimodal Benchmarks Are Now Covered by Cluster Cards

The benchmark rows from the screenshot are now grouped into 7 vision / multimodal cluster cards. This is more usable than flattening every row name into dozens of tiny pages.

### General

- `MMBench EN v1.1`
- `MMBench CN v1.1`
- `MMStar`
- `AI2D`
- `MMT-Bench`

### STEM

- `MMMU`
- `MathVista`
- `MMMU-Pro`
- `MathVerse_MINI`
- `WeMath`
- `DynaMath`

### Document / OCR / Chart

- `OCRBench`
- `OCRBench_v2_EN`
- `OCRBench_v2_CN`
- `OmniDocBench_v1.5`
- `DocVQA_VAL`
- `CharXiv_Reasoning`

### Grounding

- `RefCOCO`

### Multi-Image

- `BLINK`
- `MUIRBench`
- `MMSI-Bench`

### Hallucination

- `HallusionBench`
- `MMHal-Score`
- `MMHal-Hallrate`

### GUI

- `ScreenSpot_Mobile`
- `ScreenSpot_Desktop`
- `ScreenSpot_Web`

### Video Understanding

- `Video-MME (w/o subs)`
- `LVBench`
- `MLVU (M-Avg)`
- `LongVideoBench (val)`
- `MotionBench`

### Cluster Cards

- [General](/en/cards/vision/general)
- [STEM](/en/cards/vision/stem)
- [Document / OCR / Chart](/en/cards/vision/document-ocr-chart)
- [Grounding and GUI](/en/cards/vision/grounding-gui)
- [Multi-Image](/en/cards/vision/multi-image)
- [Hallucination](/en/cards/vision/hallucination)
- [Video Understanding](/en/cards/vision/video-understanding)

## Suggested Reading Order

1. Read [How We Source These Cards](/en/guide/how-we-source) so the evidence policy is clear.
2. Pick the capability cluster you actually care about rather than reading leaderboards left to right.
3. On each card, prioritize `§5 Reliability` before quoting the score to someone else.

## Bottom Line

> The current 17 single-benchmark cards plus 7 vision cluster cards support a fuller evaluation path: knowledge, science, math, and hard reasoning; then long context, memory, and fresh reasoning; then search, tool use, business agents, and coding agents; and finally translation and multilingualism. The biggest recurring mistake is to treat one card as a substitute for an entire capability cluster.

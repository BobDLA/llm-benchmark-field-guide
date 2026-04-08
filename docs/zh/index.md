---
layout: home
hero:
  name: 大模型 Benchmark Field Guide
  text: 一套解释 benchmark 在测什么、怎么测、可不可信的解读卡
  tagline: 不只看排行榜数字，更要看懂一个 benchmark 到底代表什么、能不能信、该怎么用
  actions:
    - theme: brand
      text: 浏览总览
      link: /zh/comparison
    - theme: alt
      text: 怎么读一张卡片
      link: /zh/guide/how-to-read
    - theme: alt
      text: 这些卡片怎么取材
      link: /zh/guide/how-we-source

features:
  - icon: 🔍
    title: Knowledge & Instruction
    details: 从通用知识底盘到指令遵循，先看模型会不会答、会不会照做
    link: /zh/cards/knowledge/mmlu-pro
  - icon: 💻
    title: Coding & Terminal Agent
    details: 从真实仓库修复到真实终端操作，观察模型能不能把任务跑通
    link: /zh/cards/coding-agent/swebench
  - icon: 📚
    title: Long Context & Reasoning
    details: 看模型在超长上下文、代码推理和新鲜代码题上是否真有深理解
    link: /zh/cards/long-context/longbench-v2
  - icon: 🛠️
    title: Agent & Tool Use
    details: 从 BrowseComp 到 BFCL V4，判断模型到底会不会搜、会不会调工具
    link: /zh/cards/general-agent/bfcl-v4
---

## 项目定位

这是一个面向实际阅读的 benchmark 指南站，目标是为每一个重要的 LLM benchmark 建立一张标准化的**解读卡片**。

每张卡片统一回答 4 个核心问题：

| 问题           | 对应章节 |
| -------------- | -------- |
| 它是什么？     | §1-§2    |
| 它怎么运作？   | §4       |
| 它可靠吗？     | §5       |
| 我该用它吗？   | §6       |

> [!TIP]
> 如果你不确定怎么读这些卡片，可以先看[阅读指南](/zh/guide/how-to-read)。

> [!TIP]
> 如果你更关心“这些结论是怎么取材的”，可以再看[来源方法](/zh/guide/how-we-source)。

## 当前已上线 10 张卡片

| 类目 | 卡片 |
| ---- | ---- |
| Search Agent | [BrowseComp](/zh/cards/search-agent/browsecomp) |
| Coding Agent | [SWE-bench](/zh/cards/coding-agent/swebench), [Terminal-Bench 2](/zh/cards/coding-agent/terminal-bench-2) |
| Knowledge | [MMLU-Pro](/zh/cards/knowledge/mmlu-pro) |
| Instruction Following | [IFEval](/zh/cards/instruction-following/ifeval) |
| Long Context | [LongBench v2](/zh/cards/long-context/longbench-v2) |
| STEM | [GPQA](/zh/cards/stem/gpqa) |
| Reasoning | [LiveCodeBench](/zh/cards/reasoning/livecodebench) |
| General Agent | [BFCL V4](/zh/cards/general-agent/bfcl-v4) |
| Multilingualism | [MMMLU](/zh/cards/multilingualism/mmmlu) |

## 能力分类体系

```mermaid
flowchart TD
    ROOT["LLM 能力分类"] --> K["Knowledge"]
    ROOT --> IF["Instruction Following"]
    ROOT --> LC["Long Context"]
    ROOT --> STEM["STEM / Science"]
    ROOT --> R["Reasoning"]
    ROOT --> SA["Search Agent"]
    ROOT --> GA["General Agent"]
    ROOT --> CA["Coding Agent"]
    ROOT --> ML["Multilingualism"]

    K --> K1["MMLU-Pro ✅"]
    IF --> IF1["IFEval ✅"]
    LC --> LC1["LongBench v2 ✅"]
    STEM --> STEM1["GPQA ✅"]
    R --> R1["LiveCodeBench ✅"]
    SA --> SA1["BrowseComp ✅"]
    GA --> GA1["BFCL V4 ✅"]
    CA --> CA1["SWE-bench ✅"]
    CA --> CA2["Terminal-Bench 2 ✅"]
    ML --> ML1["MMMLU ✅"]

    style K1 fill:#27ae60,stroke:#1e8449,color:#fff
    style IF1 fill:#27ae60,stroke:#1e8449,color:#fff
    style LC1 fill:#27ae60,stroke:#1e8449,color:#fff
    style STEM1 fill:#27ae60,stroke:#1e8449,color:#fff
    style R1 fill:#27ae60,stroke:#1e8449,color:#fff
    style SA1 fill:#27ae60,stroke:#1e8449,color:#fff
    style GA1 fill:#27ae60,stroke:#1e8449,color:#fff
    style CA1 fill:#27ae60,stroke:#1e8449,color:#fff
    style CA2 fill:#27ae60,stroke:#1e8449,color:#fff
    style ML1 fill:#27ae60,stroke:#1e8449,color:#fff
```

✅ = 已有卡片

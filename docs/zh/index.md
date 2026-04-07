---
layout: home
hero:
  name: 大模型 Benchmark Field Guide
  text: 一套解释 benchmark 在测什么、怎么测、可不可信的解读卡
  tagline: 不只看排行榜数字，更要看懂一个 benchmark 到底代表什么、能不能信、该怎么用
  actions:
    - theme: brand
      text: 浏览卡片
      link: /zh/cards/search-agent/browsecomp
    - theme: alt
      text: 怎么读一张卡片
      link: /zh/guide/how-to-read

features:
  - icon: 🔍
    title: Search Agent
    details: 测试模型在开放互联网上的持续搜索与信息追踪能力
    link: /zh/cards/search-agent/browsecomp
  - icon: 💻
    title: Coding Agent
    details: 测试模型阅读真实代码库、理解 issue、生成可通过测试的 patch
    link: /zh/cards/coding-agent/swebench
  - icon: 📚
    title: Knowledge（即将上线）
    details: 测试模型在通用知识和专业领域的事实性问答能力
  - icon: 🛠️
    title: General Agent（即将上线）
    details: 测试模型的工具调用、函数调用和多轮 agent 能力
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

    SA --> SA1["BrowseComp ✅"]
    CA --> CA1["SWE-bench ✅"]

    style SA1 fill:#27ae60,stroke:#1e8449,color:#fff
    style CA1 fill:#27ae60,stroke:#1e8449,color:#fff
```

✅ = 已有卡片 &nbsp;|&nbsp; 其余类目陆续上线

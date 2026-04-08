# 跨卡片对比

当前站点已上线 10 张核心卡片：

- `BrowseComp`：Search Agent / Persistent Browsing
- `SWE-bench`：Coding Agent / Autonomous Bug Fix
- `MMLU-Pro`：Knowledge / Robust Multi-Subject QA
- `IFEval`：Instruction Following / Verifiable Constraint Satisfaction
- `LongBench v2`：Long Context / Deep Long-Context Reasoning
- `GPQA`：STEM / Graduate Science QA
- `LiveCodeBench`：Reasoning / Code Reasoning
- `BFCL V4`：General Agent / Tool Use
- `Terminal-Bench 2`：Coding Agent / Terminal Operation
- `MMMLU`：Multilingualism / Multilingual QA

这页不替代单卡阅读，而是帮你先判断“要优先看哪一类 benchmark”。

## 一眼看懂：这 10 张卡分别在测什么

| Benchmark | 类目 | 更像在测什么 | 主要评分 | 使用时最该警惕什么 |
| ---- | ---- | ---- | ---- | ---- |
| BrowseComp | Search Agent | 开放互联网中的持续搜索与证据拼接 | LLM judge | web drift 与 judge 主观性 |
| SWE-bench | Coding Agent | 真实仓库 bug 修复 | 测试执行 | scaffold 与训练污染 |
| Terminal-Bench 2 | Coding Agent | 真实终端中的端到端执行 | 测试脚本 | beta 迭代与 harness 依赖 |
| MMLU-Pro | Knowledge | 多学科知识 + 多选题推理 | accuracy | 多选题饱和与污染 |
| IFEval | Instruction Following | 显式约束有没有全部做到 | rule-based | 内容质量盲区 |
| LongBench v2 | Long Context | 长材料深理解与推理 | accuracy | 长度与推理混杂 |
| GPQA | STEM | 研究生难度科学问答 | accuracy | 子集混用 |
| LiveCodeBench | Reasoning | 新鲜代码题与多场景代码能力 | pass@k | release / lite / full 口径混用 |
| BFCL V4 | General Agent | 函数调用、多轮工具与 agentic tool use | 加权总分 | overall 掩盖分项短板 |
| MMMLU | Multilingualism | 语言切换后的知识保持 | accuracy | 翻译题不等于原生多语能力 |

## 如果你现在只想解决一个问题，先看哪张卡

### 我想知道模型会不会“照要求做”

- 先看 `IFEval`
- 如果是多语种场景，再加看 `MMMLU`

### 我想知道模型到底有没有知识和学科推理底盘

- 先看 `MMLU-Pro`
- 如果关心科学硬题，再加看 `GPQA`

### 我想知道模型是不是真的会处理长材料

- 先看 `LongBench v2`
- 如果材料是代码题的新鲜数据，再加看 `LiveCodeBench`

### 我想知道模型会不会搜、会不会调工具

- 开放互联网搜索先看 `BrowseComp`
- 工具调用 / function calling / memory / multi-turn 先看 `BFCL V4`

### 我想知道模型会不会把工程任务真的跑完

- 仓库修复先看 `SWE-bench`
- 终端环境执行先看 `Terminal-Bench 2`

## 最容易被误读的几组 benchmark

### `MMLU-Pro` vs `GPQA`

- `MMLU-Pro` 更像多学科知识底盘
- `GPQA` 更像高难度自然科学压测
- 前者更宽，后者更硬

### `SWE-bench` vs `Terminal-Bench 2`

- `SWE-bench` 更偏真实 repo issue 修复
- `Terminal-Bench 2` 更偏终端里的端到端任务执行
- 两者都和 coding agent 相关，但不是一回事

### `BrowseComp` vs `BFCL V4`

- `BrowseComp` 更偏开放网页搜索
- `BFCL V4` 更偏工具调用、memory、多轮与 live endpoint
- 一个测“找信息”，一个测“调工具”

### `MMMLU` vs `IFEval`

- `MMMLU` 更偏多语知识保持
- `IFEval` 更偏显式约束服从
- 一个是“会不会答”，一个是“会不会照做”

## 当前建议阅读顺序

1. 先看[来源方法](/zh/guide/how-we-source)，知道每张卡为什么这么写。
2. 再看你最相关的能力簇：
   `Knowledge / Instruction` → `Long Context / Reasoning` → `Agent / Coding`
3. 最后回到单卡的 `§5 它可靠吗`，别直接拿榜单数字做结论。

## 当前结论

> 现在这 10 张卡已经能覆盖一条比较完整的判断路径：  
> 先看知识与服从性底盘，再看长上下文与代码推理，再看搜索、工具调用、仓库修复与终端执行。  
> 真正危险的不是“少看一张卡”，而是“拿一张卡替代全部能力判断”。

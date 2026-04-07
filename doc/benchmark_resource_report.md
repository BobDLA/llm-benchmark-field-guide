# 大模型测评基准解释资源调研报告

日期：2026-04-07  
来源范围：官方 benchmark 页面 / 官方 repo / 聚合站 / GitHub / Reddit / X / Linux.do

## 1. 结论摘要

这次调研的核心结论很明确：

1. 目前没有一个现成网站，能够同时满足这四件事：
   - 覆盖主流 benchmark 足够广
   - 每个 benchmark 都给出典型测试样例
   - 判分方法讲得足够清楚
   - 还能持续跟上 2025-2026 新一代 agent/coding/search benchmark
2. 最接近“可解释 benchmark 入口”的不是单站，而是一套组合：
   - 聚合入口：BenchLM、OpenCompass、Hugging Face Open LLM Leaderboard
   - 方法透明入口：HELM、EleutherAI `lm-evaluation-harness`
   - 样例最强入口：BrowseComp、SWE-bench、Toolathlon、MCPMark、Terminal-Bench 这类 benchmark 官方站/官方 repo
3. 如果目标是“理解榜单里每个 benchmark 到底在测什么”，最有效路径不是只看 leaderboard，而是：
   - 先看聚合站判断 benchmark 属于哪个能力簇
   - 再跳到 benchmark 官方页看样例、输入输出形式、判分逻辑
   - 最后再用 GitHub / Reddit / Linux.do / X 补 benchmark 的争议点和实现坑
4. 这意味着你想做的“解释型 benchmark 汇集报告/网站”确实有空白市场。现有资源要么偏“排行榜”，要么偏“论文/代码仓”，很少偏“讲给人看的 benchmark 教材”。

## 2. 最值得看的现成资源

下面按“是否适合作为解释入口”来排，而不是按学术权威性来排。

| 资源 | 类型 | 优点 | 明显短板 | 适合用途 |
| --- | --- | --- | --- | --- |
| [OpenCompass Dataset Statistics](https://doc.opencompass.org.cn/dataset_statistics.html) | 数据集目录 + 配置入口 | 支持数据集非常广，按类别整理，并直接给论文/Repo/推荐配置链接；中文用户友好 | 几乎不提供典型样例；更像“索引页”而不是“解释页” | 先确定某个 benchmark 属于哪类、在哪里跑 |
| [HELM / HELM Capabilities](https://crfm.stanford.edu/2025/03/20/helm-capabilities.html) | 方法论 + 透明 leaderboard | 强调 prompt-level transparency，给出场景选择逻辑，文章里直接放样例题；不只看 accuracy | 覆盖面没有 OpenCompass 那么宽；更偏研究框架 | 想理解 benchmark 的“测量哲学”和提示/判分细节 |
| [EleutherAI lm-evaluation-harness](https://github.com/EleutherAI/lm-evaluation-harness) | 统一评测框架 | 官方 README 明确说明支持 60+ benchmark、公开 prompt、可复现 | 对普通读者不够友好；样例解释弱 | 查 benchmark 的标准任务实现、prompt、评测差异 |
| [Hugging Face Open LLM Leaderboard](https://huggingface.co/collections/open-llm-leaderboard/open-llm-leaderboard-2) | 开源模型 leaderboard | 社区接受度高，数据可下载，模型细节页可追到明细 | 主要是开源模型；benchmark 解释深度不够 | 看开源模型统一跑分和可复现结果 |
| [BenchLM](https://benchlm.ai/) | 新一代跨模型聚合站 | 2026 年仍在更新；把 benchmark 按 agentic/coding/reasoning/knowledge 等维度重组，并公开加权方法 | 解释深度有限，更多是“决策视图”而不是“教学视图” | 快速扫一眼某模型/某 benchmark 在总盘中的位置 |

### 2.1 为什么这几个资源值得组合着看

- OpenCompass 最强的是“覆盖广”和“入口清楚”。
- HELM 最强的是“方法透明”和“会明确展示样例与评测设定”。
- `lm-evaluation-harness` 最强的是“实际实现细节和 prompt 可追”。
- BenchLM 最强的是“把 2025-2026 的新 benchmark 重新组织成能力地图”。
- Hugging Face Open LLM Leaderboard 最强的是“社区可复现性和结果数据可取”。

换句话说：

- 你要找 benchmark 在哪里：先看 OpenCompass
- 你要知道 benchmark 怎么被实现：看 `lm-evaluation-harness`
- 你要知道 benchmark 为什么这样选、怎么解释：看 HELM
- 你要快速看行业现在用哪些 benchmark：看 BenchLM

## 3. 哪些官方 benchmark 页面最适合拿“典型样例 + 判分逻辑”

如果你的目标是把 benchmark 讲清楚，而不是只列分数，下面这些官方页面比 leaderboard 本身更有价值。

### 3.1 Browse / Search / 信息检索类

#### BrowseComp

- 官方页：[OpenAI BrowseComp](https://openai.com/index/browsecomp/)
- 代码：[openai/simple-evals](https://github.com/openai/simple-evals)

为什么值得看：

- 官方页直接给了例题。
- 明确说明它是 1,266 道“难找但易验证”的题。
- 解释了为什么要做“答案短、唯一、可核验”的题型。
- 对“这类 benchmark 究竟测什么”讲得非常清楚：不是测开放式写作，而是测 persistent browsing 和 creative search。

适合你未来报告中的写法模板：

- 先给一个真实题目
- 再解释为什么这个题“难找但易验”
- 最后说明它测的是“浏览过程中的策略与坚持度”，不是普通 QA

### 3.2 Coding / Agentic Coding 类

#### SWE-bench

- 官方站：[SWE-bench Overview](https://www.swebench.com/SWE-bench/)
- Verified 子集：[SWE-bench Verified](https://www.swebench.com/verified.html)

为什么值得看：

- 官方文档把任务对象讲得很清楚：真实 GitHub issue、真实 repo、生成 patch、跑测试验证。
- 非常适合拿来解释“它和 HumanEval 的差别到底是什么”。
- 文档还清楚列了不同子集：Lite、Verified、Multimodal、Multilingual。

#### Terminal-Bench / Harbor

- 官方 repo：[terminal-bench](https://github.com/laude-institute/terminal-bench)
- 2.0 运行文档：[Running Terminal-Bench on Harbor](https://harborframework.com/docs/running-tbench)

为什么值得看：

- 官方 repo 直接说明任务由 instruction、test script、oracle solution 三部分构成。
- 这类 benchmark 很适合做“输入是什么、验证是什么、为什么比单函数代码题更难”的解释卡片。

### 3.3 Tool Use / Agent 类

#### BFCL V4

- 主页：[BFCL Leaderboard](https://gorilla.cs.berkeley.edu/leaderboard)
- 总体介绍：[UC Berkeley Sky Lab 页面](https://sky.cs.berkeley.edu/project/berkeley-function-calling-leaderboard/)
- V4 Web Search 博客：[BFCL V4 Web Search](https://gorilla.cs.berkeley.edu/blogs/15_bfcl_v4_web_search.html)

为什么值得看：

- BFCL 不只是给分，还把 V1-V4 的演化逻辑讲出来了：
  - V1：AST metric
  - V2：企业/开源贡献函数
  - V3：multi-turn
  - V4：holistic agentic evaluation
- 这很适合在报告里讲“function calling benchmark 是怎么从单次工具调用演进到 agent benchmark 的”。

#### Toolathlon / Tool Decathlon

- 主页：[Toolathlon](https://toolathlon.xyz/introduction)

为什么值得看：

- 官方站直接展示真实任务名、任务简介、trajectory 入口。
- 任务横跨 32 个应用、604 个工具、108 个任务，平均约 20 turns。
- 这类资源非常适合做“典型任务案例截图/拆解”。

#### MCPMark

- 官方站：[MCPMark](https://mcpmark.ai/)
- GitHub：[eval-sys/mcpmark](https://github.com/eval-sys/mcpmark)

为什么值得看：

- 任务已经是现实 MCP workflow，而不是抽象工具调用。
- 官方 repo 明确强调 strict automated verification、isolated environments、pass@k/avg@k 这类指标。
- 如果你后续要单列 “MCP / tool-use / real workflow” 类 benchmark，MCPMark 是很好的样板。

### 3.4 通用推理 / 长上下文 / 指令遵循类

#### LiveBench

- 官方 repo：[LiveBench](https://github.com/LiveBench/LiveBench)

为什么值得看：

- 官方 repo 直接讲清楚它的三件事：持续更新、客观答案、自动判分。
- 很适合用来解释“为什么老 benchmark 容易污染，而新 benchmark 会强调 freshness”。

#### IFEval

- 论文页：[Instruction-Following Evaluation for Large Language Models](https://huggingface.co/papers/2311.07911)
- 官方实现入口：[google-research/instruction_following_eval](https://github.com/google-research/google-research/tree/master/instruction_following_eval)

为什么值得看：

- 它的 instruction type 很适合做“示例型解释”。
- 官方材料明确提到大约 500 条 prompt、25 类可验证 instruction。
- 这是少数“评估目标很容易向非研究者解释清楚”的 benchmark。

#### LongBench v2

- 项目页：[LongBench v2](https://longbench2.github.io)
- 论文页：[LongBench v2 paper](https://huggingface.co/papers/2412.15204)

为什么值得看：

- 论文摘要已经把任务类型、长度区间、题量、人工难度控制说清楚了。
- 很适合用来解释“长上下文 benchmark 不只是针眼取针（needle in a haystack），还包括多文档 QA、对话历史、代码库理解、结构化数据理解”。

#### MMLU-Pro

- 官方 repo：[TIGER-AI-Lab/MMLU-Pro](https://github.com/TIGER-AI-Lab/MMLU-Pro)

为什么值得看：

- 相比只看 MMLU 分数，MMLU-Pro 的 repo 更容易解释“为什么它更难”：
  - 更偏 reasoning
  - 选项从 4 个扩大到 10 个
  - 减少碰运气成分

## 4. 目前最有用的“解释型资源组合”

如果你要真正做一份可读性高的 benchmark 报告，我建议按下面的组合取材，而不是只依赖某一个网站。

### 组合 A：先分类，再追官方样例

适用：做总报告、给老板/团队做 benchmark 地图

1. [BenchLM](https://benchlm.ai/)
   用来快速确定当前行业把 benchmark 怎么归类。
2. [OpenCompass Dataset Statistics](https://doc.opencompass.org.cn/dataset_statistics.html)
   用来确认 benchmark 的论文、repo、推荐配置。
3. 各 benchmark 官方页
   用来补典型题目、输入输出、判分逻辑。

### 组合 B：先看方法透明，再追实现细节

适用：你希望报告里不只是“这个 benchmark 测什么”，而且要回答“这个分数为什么可信/为什么不完全可比”

1. [HELM Capabilities](https://crfm.stanford.edu/2025/03/20/helm-capabilities.html)
2. [lm-evaluation-harness](https://github.com/EleutherAI/lm-evaluation-harness)
3. benchmark 官方 repo / 官方 paper

### 组合 C：专门做 agent / coding / tool-use

适用：你关心的是 2025-2026 新 benchmark，而不是传统 academic QA

1. [SWE-bench](https://www.swebench.com/SWE-bench/)
2. [Terminal-Bench](https://github.com/laude-institute/terminal-bench)
3. [BFCL V4](https://gorilla.cs.berkeley.edu/leaderboard)
4. [Toolathlon](https://toolathlon.xyz/introduction)
5. [MCPMark](https://github.com/eval-sys/mcpmark)
6. [BrowseComp](https://openai.com/index/browsecomp/)

## 5. 社区资源：哪些地方值得看，分别补什么信息

你在 `idea.md` 里特别提到 GitHub、X、Reddit、Linux.do。调研下来，这四类社区资源价值不同，不应该混着看。

### 5.1 GitHub：最适合补“实现坑、污染、规则边界”

推荐看：

- [SWE-bench issue #465: Repo State Loopholes During Agentic Evaluation](https://github.com/SWE-bench/SWE-bench/issues/465)
  - 价值：直接展示 benchmark 泄漏/作弊路径，说明 leaderboard 分数不一定等于真实能力。
- [lm-evaluation-harness issue #3391: mmlu_pro with thinking models](https://github.com/EleutherAI/lm-evaluation-harness/issues/3391)
  - 价值：说明同一个 benchmark 的跑法，可能会因为 harness / thinking model 接口适配问题而失真。

GitHub 的特点：

- 长处：最接近真实实现和真实故障
- 短处：读起来不友好，不适合作为“第一入口”

### 5.2 Reddit：最适合补“社区怀疑点、复现实战、榜单可信度争议”

推荐看：

- [The current state of LLM benchmarks is so polluted](https://www.reddit.com/r/LocalLLaMA/comments/1nqo0oo/the_current_state_of_llm_benchmarks_is_so_polluted/)
  - 价值：代表了社区对 benchmark 污染、榜单和真实场景脱节的普遍焦虑。
- [Let’s talk about the SWE-bench Verified benchmark/leaderboard](https://www.reddit.com/r/LocalLLaMA/comments/1qnt8vp/lets_talk_about_the_swebench_verified/)
  - 价值：讨论 submission policy、上榜门槛、结果发布时间、公平性等治理问题。
- r/LocalLLaMA 上的 SWE-rebench 月更贴
  - 价值：对“新鲜数据、去污染、最近模型表现”很有参考意义。

Reddit 的特点：

- 长处：能看到“大家为什么不信这个分”
- 短处：信息噪声大，需要二次核验

### 5.3 Linux.do：最适合补中文语境下的榜单导航和争议搬运

推荐看：

- [大模型评估榜单集合：挑选适合你的模型](https://linux.do/t/topic/36731)
  - 价值：很像中文用户视角下的榜单导航帖，适合整理中文用户最常看的榜单入口。
- [SWE Bench 被刷分? 部分模型的"聪明智慧" 官方决定不进行重测 下个版本将会修复](https://linux.do/t/topic/951193)
  - 价值：把 GitHub issue 的技术争议翻译成中文社区能迅速理解的叙述。

Linux.do 的特点：

- 长处：中文用户视角强，适合做“中文 benchmark 信息流”补充
- 短处：更多是二次传播，不适合作为第一手证据

注意：

- Linux.do 明确禁止 AI 代写站内内容。这里只能把它作为信息来源，不应生成要发回该站的帖子或评论。

### 5.4 X：最适合补“发布当天的风向”，不适合作为主证据

可参考线索：

- [Melvyn 关于 SWE-Bench / SWE-Rebench 的帖子](https://x.com/melvynxdev/status/2023206976252166589)

X 的特点：

- 长处：最快看到 benchmark 发布、质疑、争论和“这个表该怎么读”
- 短处：帖子极难长期归档、上下文容易丢、引用链脆弱

因此更合理的用法是：

- 把 X 当线索来源
- 再回到官方 paper / repo / GitHub issue 做核验

## 6. 现有资源的关键缺口

这部分对你最重要，因为它基本定义了你自己的报告/网站应该补什么。

### 6.1 缺口一：排行榜多，解释卡片少

现有网站大多能告诉你：

- 某模型在某 benchmark 上多少分

但很少能系统回答：

- 这题是什么输入格式
- 模型到底要输出什么
- 判分靠规则、测试脚本还是 LLM judge
- 为什么这个 benchmark 能代表某种能力
- 它的已知争议是什么

### 6.2 缺口二：样例展示不足

除了 BrowseComp、Toolathlon、MCPMark、部分 HELM 页面，很多 benchmark 站点都没有把“代表性样例”放在足够显眼的位置。

这导致普通读者看分数时很难建立直觉。

### 6.3 缺口三：benchmark 演化史没人系统讲

例如：

- MMLU -> MMLU-Pro
- 简单 coding eval -> SWE-bench -> SWE-bench Verified / Pro / Rebench
- function calling -> BFCL V1/V2/V3/V4
- 静态 benchmark -> LiveBench / fresh benchmark

这些演化逻辑对理解“为什么今天还看这个 benchmark”非常关键，但现有站点通常只放最新分数，不讲历史脉络。

### 6.4 缺口四：社区争议和官方定义是分裂的

官方页面强调：

- benchmark 设计目标
- 数据质量
- 评测 protocol

社区更关心：

- 是否污染
- 是否可作弊
- prompt / harness 差异会不会改变名次
- 上榜治理是否透明

这两部分通常分散在不同地方，没人把它们合在一张 benchmark 卡片里。

## 7. 如果要把这些结果写成你自己的“解释型 benchmark 报告/网站”，建议结构

我建议每个 benchmark 用统一卡片模板，字段如下：

1. benchmark 名称
2. 所属能力类目
3. 它到底在测什么
4. 输入长什么样
5. 模型要输出什么
6. 典型样例
7. 判分方式
8. 为什么这个 benchmark 有代表性
9. 已知缺陷/争议
10. 是否有数据污染/饱和风险
11. 官方实现 / 官方 leaderboard / 常用 harness
12. 当前还值不值得看

这是当前公开资源最缺的一层。

## 8. 一个可执行的落地路线

如果你下一步想继续做，不建议一口气覆盖全部 benchmark。更好的做法是先做一版“高信号 benchmark 卡片集”。

建议优先覆盖这 10 个：

1. MMLU-Pro
2. GPQA / SuperGPQA
3. IFEval
4. LongBench v2
5. LiveBench
6. BFCL V4
7. BrowseComp
8. SWE-bench Verified / Pro
9. Terminal-Bench 2
10. MCPMark / Toolathlon

原因：

- 基本覆盖你在 `idea.md` 里列出的主要能力簇
- 同时代表 old-school academic benchmark 和 2025-2026 新 agent benchmark
- 大多能找到官方页面、实现和社区争议，信息足够丰富

## 9. 参考链接清单

### 聚合与框架

- OpenCompass Dataset Statistics: https://doc.opencompass.org.cn/dataset_statistics.html
- HELM Capabilities: https://crfm.stanford.edu/2025/03/20/helm-capabilities.html
- HELM GitHub: https://github.com/stanford-crfm/helm
- EleutherAI lm-evaluation-harness: https://github.com/EleutherAI/lm-evaluation-harness
- Hugging Face Open LLM Leaderboard 2: https://huggingface.co/collections/open-llm-leaderboard/open-llm-leaderboard-2
- BenchLM: https://benchlm.ai/

### Benchmark 官方页 / Repo

- BrowseComp: https://openai.com/index/browsecomp/
- OpenAI simple-evals: https://github.com/openai/simple-evals
- SWE-bench: https://www.swebench.com/SWE-bench/
- SWE-bench Verified: https://www.swebench.com/verified.html
- BFCL Leaderboard: https://gorilla.cs.berkeley.edu/leaderboard
- BFCL project intro: https://sky.cs.berkeley.edu/project/berkeley-function-calling-leaderboard/
- Toolathlon: https://toolathlon.xyz/introduction
- MCPMark GitHub: https://github.com/eval-sys/mcpmark
- LiveBench GitHub: https://github.com/LiveBench/LiveBench
- Terminal-Bench GitHub: https://github.com/laude-institute/terminal-bench
- Harbor / Terminal-Bench 2.0 docs: https://harborframework.com/docs/running-tbench
- IFEval paper page: https://huggingface.co/papers/2311.07911
- IFEval official implementation: https://github.com/google-research/google-research/tree/master/instruction_following_eval
- LongBench v2 project page: https://longbench2.github.io
- LongBench v2 paper page: https://huggingface.co/papers/2412.15204
- MMLU-Pro official repo: https://github.com/TIGER-AI-Lab/MMLU-Pro

### 社区讨论

- SWE-bench loophole issue: https://github.com/SWE-bench/SWE-bench/issues/465
- lm-eval MMLU-Pro issue: https://github.com/EleutherAI/lm-evaluation-harness/issues/3391
- Reddit benchmark pollution thread: https://www.reddit.com/r/LocalLLaMA/comments/1nqo0oo/the_current_state_of_llm_benchmarks_is_so_polluted/
- Reddit SWE-bench Verified thread: https://www.reddit.com/r/LocalLLaMA/comments/1qnt8vp/lets_talk_about_the_swebench_verified/
- Linux.do 榜单集合贴: https://linux.do/t/topic/36731
- Linux.do SWE-bench 争议贴: https://linux.do/t/topic/951193
- X 线索帖（SWE-Bench / SWE-Rebench）: https://x.com/melvynxdev/status/2023206976252166589

## 10. 最后判断

如果你的目标只是“找几个能看分的网站”，现成资源已经够了。  
如果你的目标是“让人真正理解 benchmark 在测什么、为什么这个分重要、为什么这个分也可能不可靠”，现成资源明显不够。

也就是说：

- 做 leaderboard 汇总，市场已经很拥挤
- 做 benchmark 解释型知识库，仍然有明显空位

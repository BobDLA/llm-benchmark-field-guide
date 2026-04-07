# Benchmark Card 静态站架构设计

## 推荐技术栈：VitePress

### 为什么选 VitePress

| 需求                         | VitePress | MkDocs Material | Jekyll    |
| ---------------------------- | --------- | --------------- | --------- |
| Mermaid 原生支持             | ✅ 插件    | ✅ 插件         | ❌ 需手动  |
| GitHub 风格提示块 `[!NOTE]`  | ✅ 原生    | ✅ 原生         | ❌         |
| 中文友好                     | ✅        | ✅              | ✅         |
| Sidebar 自动生成             | ✅        | ✅              | ✅         |
| GitHub Pages 部署            | ✅ 官方文档| ✅              | ✅ 原生    |
| 自定义组件（对比表/过滤器）  | ✅ Vue    | ⚠️ 受限         | ❌         |
| 构建速度                     | 极快      | 快              | 中         |

**结论**：VitePress 最合适。内容已是结构化 Markdown，Mermaid 和提示块开箱即用，未来还能加 Vue 组件做交互式对比。

---

## 目录结构

```
llm-benchmark-field-guide/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions 自动部署
├── docs/
│   ├── .vitepress/
│   │   ├── config.ts           # VitePress 配置（sidebar/nav/插件）
│   │   └── theme/
│   │       ├── index.ts        # 自定义主题入口
│   │       ├── BenchmarkMeta.vue # 卡片元数据组件（自动渲染 frontmatter）
│   │       └── style.css       # 全局样式覆写
│   ├── index.md                # 首页：项目介绍 + 能力分类导航
│   ├── guide/
│   │   ├── how-to-read.md      # 卡片怎么读（解释 6 个章节结构）
│   │   └── methodology.md      # 卡片制作方法论
│   ├── cards/
│   │   ├── search-agent/
│   │   │   ├── browsecomp.md   # ★ 现有卡片，加 frontmatter 即可
│   │   │   └── widesearch.md
│   │   ├── coding-agent/
│   │   │   ├── swebench.md     # ★ 现有卡片
│   │   │   └── terminal-bench.md
│   │   ├── knowledge/
│   │   │   └── mmlu-pro.md
│   │   ├── reasoning/
│   │   │   └── livecodebench.md
│   │   ├── general-agent/
│   │   │   ├── bfcl-v4.md
│   │   │   └── mcpmark.md
│   │   ├── instruction-following/
│   │   │   └── ifeval.md
│   │   ├── long-context/
│   │   │   └── longbench-v2.md
│   │   ├── stem/
│   │   │   └── gpqa.md
│   │   └── multilingual/
│   │       └── mmmlu.md
│   └── comparison.md           # 跨卡片对比页
├── package.json
└── README.md
```

### 目录设计逻辑

- `cards/` 按能力分类体系的一级类目分文件夹
- 每张卡片就是一个 `.md` 文件，内容结构完全沿用现有模板（§1-§6）
- VitePress Sidebar 自动按文件夹生成导航

---

## 卡片 Frontmatter 规范

每张卡片文件顶部加 YAML frontmatter，VitePress 可用它自动生成元数据组件和索引页：

```yaml
---
title: BrowseComp
category: Search Agent
subcategory: Persistent Browsing
task_type: short-answer web fact finding
scoring: llm_judge
org: OpenAI
date_released: 2025-04-10
dataset_size: 1266
verdict: recommended        # recommended | conditional | deprecated
risks:
  - possible multiple valid answers
  - public-web drift
  - leakage sensitivity
  - judge-based scoring
links:
  official: https://openai.com/index/browsecomp/
  paper: https://cdn.openai.com/pdf/.../browsecomp.pdf
  code: https://github.com/openai/simple-evals
---
```

**作用**：
- 首页可自动生成卡片缩略图列表，按 `category` 分组
- 可自动生成跨卡片对比表
- 搜索、过滤、排序的数据源

---

## 页面设计

### 首页 (index.md)

```
┌────────────────────────────────────────────┐
│  大模型 Benchmark Field Guide              │
│  "理解每个分数背后测的是什么"               │
├────────────────────────────────────────────┤
│  能力分类导航 (Mermaid 能力树)              │
│  点击类目 → 跳到该分类下的卡片列表          │
├────────────────────────────────────────────┤
│  卡片缩略图网格                             │
│  ┌───────────┐ ┌───────────┐ ┌───────────┐ │
│  │BrowseComp │ │SWE-bench  │ │MMLU-Pro   │ │
│  │Search     │ │Coding     │ │Knowledge  │ │
│  │★ 推荐     │ │⚠ 条件看   │ │★ 推荐     │ │
│  └───────────┘ └───────────┘ └───────────┘ │
└────────────────────────────────────────────┘
```

每张缩略图卡显示：名称 / 类目 / 结论标签（推荐/条件看/不推荐）

### 单张卡片页

就是现有的 Markdown 内容直接渲染，VitePress 会自动处理：
- Mermaid 图表 → SVG
- `> [!NOTE]` → 美观的提示块
- 表格 → 响应式表格
- Sidebar → 左侧显示同类目其他卡片

### 对比页 (comparison.md)

跨卡片对比表，可从 frontmatter 自动生成：

| Benchmark   | 类目         | 数据规模 | 评分方式       | 污染风险 | 饱和风险 | 结论 |
| ----------- | ------------ | -------- | -------------- | -------- | -------- | ---- |
| BrowseComp  | Search Agent | 1,266    | LLM judge      | 中       | 低       | ★    |
| SWE-bench V | Coding Agent | 500      | test execution | 高       | 中高     | ⚠️   |
| MMLU-Pro    | Knowledge    | 12,032   | exact match    | 中       | 中       | ★    |

---

## 部署流程

```mermaid
flowchart LR
    A["编辑 cards/*.md"] --> B["git push"]
    B --> C["GitHub Actions"]
    C --> D["vitepress build"]
    D --> E["Deploy to<br/>GitHub Pages"]
```

### GitHub Actions 配置要点

```yaml
# .github/workflows/deploy.yml
name: Deploy VitePress
on:
  push:
    branches: [main]
jobs:
  build-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npm ci
      - run: npm run docs:build
      - uses: actions/deploy-pages@v4
```

**工作流**：编辑 Markdown → push → 自动构建部署。零手动操作。

---

## 从现有 doc/ 迁移的工作量

| 步骤 | 工作量 | 说明 |
| ---- | ------ | ---- |
| 1. 初始化 VitePress 项目 | 5 分钟 | `npx -y create-vitepress@latest ./` |
| 2. 配置 Mermaid 插件 | 5 分钟 | `vitepress-plugin-mermaid` |
| 3. 搬迁现有卡片 | 10 分钟 | 加 frontmatter + 移入 `cards/` 对应目录 |
| 4. 写首页 + 导航配置 | 15 分钟 | 能力分类树 + Sidebar |
| 5. 配置 GitHub Actions | 5 分钟 | 复制模板即可 |
| 6. 测试部署 | 5 分钟 | 验证 Mermaid/提示块渲染 |
| **总计** | **~45 分钟** | |

---

## Open Questions

1. **域名**：使用默认的 `username.github.io/repo-name` 还是绑定自定义域名？
2. **语言**：纯中文还是中英双语？双语需要 VitePress i18n 配置。
3. **是否现在就开始搞**？还是先把剩余 8 张卡片写完再建站？

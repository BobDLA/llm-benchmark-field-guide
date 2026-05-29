import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

const repoSlug = process.env.GITHUB_REPOSITORY
const repoName = repoSlug?.split('/')[1]
const isUserOrOrgPages = repoName?.toLowerCase().endsWith('.github.io')
const base =
  process.env.VITEPRESS_BASE ??
  (repoName ? (isUserOrOrgPages ? '/' : `/${repoName}/`) : '/')
const socialLinks = repoSlug
  ? [{ icon: 'github', link: `https://github.com/${repoSlug}` }]
  : []

export default withMermaid(
  defineConfig({
    title: 'LLM Benchmark Field Guide',
    description: 'A practical guide to what each benchmark really measures',

    base,

    head: [
      ['meta', { name: 'theme-color', content: '#5b8dff' }],
    ],

    locales: {
      zh: {
        label: '中文',
        lang: 'zh-CN',
        link: '/zh/',
        title: '大模型 Benchmark Field Guide',
        description: '一套解释 benchmark 在测什么、怎么测、可不可信的解读卡',
        themeConfig: {
          nav: [
            { text: '首页', link: '/zh/' },
            { text: '开始阅读', link: '/zh/cards/guide/how-to-read' },
          ],
          sidebar: {
            '/zh/cards/': [
              {
                text: '📖 阅读指南',
                collapsed: false,
                items: [
                  { text: '怎么读一张卡片', link: '/zh/cards/guide/how-to-read' },
                  { text: '这些卡片怎么取材', link: '/zh/cards/guide/how-we-source' },
                ],
              },
              {
                text: '🗺️ 跨卡片对比',
                collapsed: false,
                items: [
                  { text: '对比纵览', link: '/zh/cards/comparison' },
                ],
              },
              {
                text: '🔍 Knowledge · 知识',
                collapsed: false,
                items: [
                  { text: 'MMLU-Pro', link: '/zh/cards/knowledge/mmlu-pro' },
                ],
              },
              {
                text: '📋 Instruction Following · 指令遵循',
                collapsed: false,
                items: [
                  { text: 'IFEval', link: '/zh/cards/instruction-following/ifeval' },
                ],
              },
              {
                text: '📚 Long Context · 长上下文',
                collapsed: false,
                items: [
                  {
                    text: '长材料推理',
                    collapsed: false,
                    items: [
                      { text: 'LongBench v2', link: '/zh/cards/long-context/longbench-v2' },
                    ],
                  },
                  {
                    text: '会话记忆',
                    collapsed: false,
                    items: [
                      { text: 'LongMemEval', link: '/zh/cards/long-context/longmemeval' },
                      { text: 'LoCoMo', link: '/zh/cards/long-context/locomo' },
                      { text: 'ConvoMem', link: '/zh/cards/long-context/convomem' },
                    ],
                  },
                ],
              },
              {
                text: '🔬 STEM · 科学',
                collapsed: false,
                items: [
                  { text: 'GPQA', link: '/zh/cards/stem/gpqa' },
                ],
              },
              {
                text: '➗ Math · 数学',
                collapsed: false,
                items: [
                  { text: 'AIME (MathArena)', link: '/zh/cards/math/aime' },
                ],
              },
              {
                text: '🧩 Hard Reasoning · 硬推理',
                collapsed: false,
                items: [
                  { text: 'HLE', link: '/zh/cards/hard-reasoning/hle' },
                ],
              },
              {
                text: '🧠 Reasoning · 推理',
                collapsed: false,
                items: [
                  { text: 'LiveCodeBench', link: '/zh/cards/reasoning/livecodebench' },
                ],
              },
              {
                text: '🌐 Search Agent · 搜索代理',
                collapsed: false,
                items: [
                  { text: 'BrowseComp', link: '/zh/cards/search-agent/browsecomp' },
                  { text: 'WideSearch', link: '/zh/cards/search-agent/widesearch' },
                ],
              },
              {
                text: '🛠️ General Agent · 通用代理',
                collapsed: false,
                items: [
                  { text: 'BFCL V4', link: '/zh/cards/general-agent/bfcl-v4' },
                  { text: 'TAU2-Bench', link: '/zh/cards/general-agent/tau2-bench' },
                  { text: 'MCPMark', link: '/zh/cards/general-agent/mcpmark' },
                ],
              },
              {
                text: '💻 Coding Agent · 代码代理',
                collapsed: false,
                items: [
                  { text: 'SWE-bench', link: '/zh/cards/coding-agent/swebench' },
                  { text: 'Terminal-Bench 2', link: '/zh/cards/coding-agent/terminal-bench-2' },
                ],
              },
              {
                text: '🈯 Translation · 翻译',
                collapsed: false,
                items: [
                  { text: 'WMT24++', link: '/zh/cards/translation/wmt24' },
                ],
              },
              {
                text: '🌍 Multilingualism · 多语言',
                collapsed: false,
                items: [
                  { text: 'MMMLU', link: '/zh/cards/multilingualism/mmmlu' },
                ],
              },
              {
                text: '🖼️ Vision / Multimodal · 视觉多模态',
                collapsed: false,
                items: [
                  { text: '通用视觉', link: '/zh/cards/vision/general' },
                  { text: '视觉 STEM', link: '/zh/cards/vision/stem' },
                  { text: '文档 / OCR / 图表', link: '/zh/cards/vision/document-ocr-chart' },
                  { text: '定位与 GUI', link: '/zh/cards/vision/grounding-gui' },
                  { text: '多图理解', link: '/zh/cards/vision/multi-image' },
                  { text: '幻觉评测', link: '/zh/cards/vision/hallucination' },
                  { text: '视频理解', link: '/zh/cards/vision/video-understanding' },
                ],
              },
            ],
          },
          outline: {
            label: '目录',
            level: [2, 3],
          },
          lastUpdated: { text: '最后更新' },
          docFooter: { prev: '上一篇', next: '下一篇' },
        },
      },
      en: {
        label: 'English',
        lang: 'en-US',
        link: '/en/',
        title: 'LLM Benchmark Field Guide',
        description: 'A practical guide to what each benchmark really measures',
        themeConfig: {
          nav: [
            { text: 'Home', link: '/en/' },
            { text: 'Read First', link: '/en/guide/how-to-read' },
            { text: 'Compare', link: '/en/comparison' },
          ],
          sidebar: {
            '/en/': [
              {
                text: 'Guide',
                collapsed: false,
                items: [
                  { text: 'How to Read a Card', link: '/en/guide/how-to-read' },
                  { text: 'How We Source These Cards', link: '/en/guide/how-we-source' },
                ],
              },
              {
                text: 'Cross-Card Comparison',
                collapsed: false,
                items: [
                  { text: 'Comparison Overview', link: '/en/comparison' },
                ],
              },
              {
                text: 'Knowledge',
                collapsed: false,
                items: [
                  { text: 'MMLU-Pro', link: '/en/cards/knowledge/mmlu-pro' },
                ],
              },
              {
                text: 'Instruction Following',
                collapsed: false,
                items: [
                  { text: 'IFEval', link: '/en/cards/instruction-following/ifeval' },
                ],
              },
              {
                text: 'Long Context',
                collapsed: false,
                items: [
                  {
                    text: 'Long-Context Reasoning',
                    collapsed: false,
                    items: [
                      { text: 'LongBench v2', link: '/en/cards/long-context/longbench-v2' },
                    ],
                  },
                  {
                    text: 'Conversational Memory',
                    collapsed: false,
                    items: [
                      { text: 'LongMemEval', link: '/en/cards/long-context/longmemeval' },
                      { text: 'LoCoMo', link: '/en/cards/long-context/locomo' },
                      { text: 'ConvoMem', link: '/en/cards/long-context/convomem' },
                    ],
                  },
                ],
              },
              {
                text: 'STEM',
                collapsed: false,
                items: [
                  { text: 'GPQA', link: '/en/cards/stem/gpqa' },
                ],
              },
              {
                text: 'Math',
                collapsed: false,
                items: [
                  { text: 'AIME (MathArena)', link: '/en/cards/math/aime' },
                ],
              },
              {
                text: 'Hard Reasoning',
                collapsed: false,
                items: [
                  { text: 'HLE', link: '/en/cards/hard-reasoning/hle' },
                ],
              },
              {
                text: 'Reasoning',
                collapsed: false,
                items: [
                  { text: 'LiveCodeBench', link: '/en/cards/reasoning/livecodebench' },
                ],
              },
              {
                text: 'Search Agent',
                collapsed: false,
                items: [
                  { text: 'BrowseComp', link: '/en/cards/search-agent/browsecomp' },
                  { text: 'WideSearch', link: '/en/cards/search-agent/widesearch' },
                ],
              },
              {
                text: 'General Agent',
                collapsed: false,
                items: [
                  { text: 'BFCL V4', link: '/en/cards/general-agent/bfcl-v4' },
                  { text: 'TAU2-Bench', link: '/en/cards/general-agent/tau2-bench' },
                  { text: 'MCPMark', link: '/en/cards/general-agent/mcpmark' },
                ],
              },
              {
                text: 'Coding Agent',
                collapsed: false,
                items: [
                  { text: 'SWE-bench', link: '/en/cards/coding-agent/swebench' },
                  { text: 'Terminal-Bench 2', link: '/en/cards/coding-agent/terminal-bench-2' },
                ],
              },
              {
                text: 'Translation',
                collapsed: false,
                items: [
                  { text: 'WMT24++', link: '/en/cards/translation/wmt24' },
                ],
              },
              {
                text: 'Multilingualism',
                collapsed: false,
                items: [
                  { text: 'MMMLU', link: '/en/cards/multilingualism/mmmlu' },
                ],
              },
              {
                text: 'Vision / Multimodal',
                collapsed: false,
                items: [
                  { text: 'General Vision', link: '/en/cards/vision/general' },
                  { text: 'Visual STEM', link: '/en/cards/vision/stem' },
                  { text: 'Document / OCR / Chart', link: '/en/cards/vision/document-ocr-chart' },
                  { text: 'Grounding and GUI', link: '/en/cards/vision/grounding-gui' },
                  { text: 'Multi-Image Understanding', link: '/en/cards/vision/multi-image' },
                  { text: 'Hallucination Evaluation', link: '/en/cards/vision/hallucination' },
                  { text: 'Video Understanding', link: '/en/cards/vision/video-understanding' },
                ],
              },
            ],
          },
          outline: {
            label: 'On this page',
            level: [2, 3],
          },
        },
      },
    },

    lastUpdated: true,

    themeConfig: {
      socialLinks,
      search: {
        provider: 'local',
      },
    },

    mermaid: {},
    mermaidPlugin: {
      class: 'mermaid',
    },
  })
)

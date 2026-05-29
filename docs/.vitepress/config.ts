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
                  { text: 'LongBench v2', link: '/zh/cards/long-context/longbench-v2' },
                  { text: 'LongMemEval', link: '/zh/cards/long-context/longmemeval' },
                  { text: 'LoCoMo', link: '/zh/cards/long-context/locomo' },
                  { text: 'ConvoMem', link: '/zh/cards/long-context/convomem' },
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
                  { text: 'General Benchmarks', link: '/zh/cards/vision/general' },
                  { text: 'MMBench', link: '/zh/cards/vision/general#mmbench' },
                  { text: 'MMStar', link: '/zh/cards/vision/general#mmstar' },
                  { text: 'AI2D', link: '/zh/cards/vision/general#ai2d' },
                  { text: 'MMT-Bench', link: '/zh/cards/vision/general#mmt-bench' },
                  { text: 'STEM Benchmarks', link: '/zh/cards/vision/stem' },
                  { text: 'MMMU', link: '/zh/cards/vision/stem#mmmu' },
                  { text: 'MathVista', link: '/zh/cards/vision/stem#mathvista' },
                  { text: 'MMMU-Pro', link: '/zh/cards/vision/stem#mmmu-pro' },
                  { text: 'MathVerse_MINI', link: '/zh/cards/vision/stem#mathverse-mini' },
                  { text: 'WeMath', link: '/zh/cards/vision/stem#wemath' },
                  { text: 'DynaMath', link: '/zh/cards/vision/stem#dynamath' },
                  { text: 'Document / OCR / Chart', link: '/zh/cards/vision/document-ocr-chart' },
                  { text: 'OCRBench', link: '/zh/cards/vision/document-ocr-chart#ocrbench--ocrbench-v2' },
                  { text: 'OmniDocBench', link: '/zh/cards/vision/document-ocr-chart#omnidocbench-v15' },
                  { text: 'DocVQA_VAL', link: '/zh/cards/vision/document-ocr-chart#docvqa-val' },
                  { text: 'CharXiv_Reasoning', link: '/zh/cards/vision/document-ocr-chart#charxiv-reasoning' },
                  { text: 'Grounding and GUI', link: '/zh/cards/vision/grounding-gui' },
                  { text: 'RefCOCO', link: '/zh/cards/vision/grounding-gui#refcoco' },
                  { text: 'ScreenSpot', link: '/zh/cards/vision/grounding-gui#screenspot' },
                  { text: 'Multi-Image Benchmarks', link: '/zh/cards/vision/multi-image' },
                  { text: 'BLINK', link: '/zh/cards/vision/multi-image#blink' },
                  { text: 'MUIRBench', link: '/zh/cards/vision/multi-image#muirbench' },
                  { text: 'MMSI-Bench', link: '/zh/cards/vision/multi-image#mmsi-bench' },
                  { text: 'Hallucination Benchmarks', link: '/zh/cards/vision/hallucination' },
                  { text: 'HallusionBench', link: '/zh/cards/vision/hallucination#hallusionbench' },
                  { text: 'MMHal', link: '/zh/cards/vision/hallucination#mmhal' },
                  { text: 'Video Understanding', link: '/zh/cards/vision/video-understanding' },
                  { text: 'Video-MME', link: '/zh/cards/vision/video-understanding#video-mme' },
                  { text: 'LVBench', link: '/zh/cards/vision/video-understanding#lvbench' },
                  { text: 'MLVU', link: '/zh/cards/vision/video-understanding#mlvu' },
                  { text: 'LongVideoBench', link: '/zh/cards/vision/video-understanding#longvideobench' },
                  { text: 'MotionBench', link: '/zh/cards/vision/video-understanding#motionbench' },
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
                  { text: 'LongBench v2', link: '/en/cards/long-context/longbench-v2' },
                  { text: 'LongMemEval', link: '/en/cards/long-context/longmemeval' },
                  { text: 'LoCoMo', link: '/en/cards/long-context/locomo' },
                  { text: 'ConvoMem', link: '/en/cards/long-context/convomem' },
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
                  { text: 'General Benchmarks', link: '/en/cards/vision/general' },
                  { text: 'MMBench', link: '/en/cards/vision/general#mmbench' },
                  { text: 'MMStar', link: '/en/cards/vision/general#mmstar' },
                  { text: 'AI2D', link: '/en/cards/vision/general#ai2d' },
                  { text: 'MMT-Bench', link: '/en/cards/vision/general#mmt-bench' },
                  { text: 'STEM Benchmarks', link: '/en/cards/vision/stem' },
                  { text: 'MMMU', link: '/en/cards/vision/stem#mmmu' },
                  { text: 'MathVista', link: '/en/cards/vision/stem#mathvista' },
                  { text: 'MMMU-Pro', link: '/en/cards/vision/stem#mmmu-pro' },
                  { text: 'MathVerse_MINI', link: '/en/cards/vision/stem#mathverse-mini' },
                  { text: 'WeMath', link: '/en/cards/vision/stem#wemath' },
                  { text: 'DynaMath', link: '/en/cards/vision/stem#dynamath' },
                  { text: 'Document / OCR / Chart', link: '/en/cards/vision/document-ocr-chart' },
                  { text: 'OCRBench', link: '/en/cards/vision/document-ocr-chart#ocrbench--ocrbench-v2' },
                  { text: 'OmniDocBench', link: '/en/cards/vision/document-ocr-chart#omnidocbench-v15' },
                  { text: 'DocVQA_VAL', link: '/en/cards/vision/document-ocr-chart#docvqa-val' },
                  { text: 'CharXiv_Reasoning', link: '/en/cards/vision/document-ocr-chart#charxiv-reasoning' },
                  { text: 'Grounding and GUI', link: '/en/cards/vision/grounding-gui' },
                  { text: 'RefCOCO', link: '/en/cards/vision/grounding-gui#refcoco' },
                  { text: 'ScreenSpot', link: '/en/cards/vision/grounding-gui#screenspot' },
                  { text: 'Multi-Image Benchmarks', link: '/en/cards/vision/multi-image' },
                  { text: 'BLINK', link: '/en/cards/vision/multi-image#blink' },
                  { text: 'MUIRBench', link: '/en/cards/vision/multi-image#muirbench' },
                  { text: 'MMSI-Bench', link: '/en/cards/vision/multi-image#mmsi-bench' },
                  { text: 'Hallucination Benchmarks', link: '/en/cards/vision/hallucination' },
                  { text: 'HallusionBench', link: '/en/cards/vision/hallucination#hallusionbench' },
                  { text: 'MMHal', link: '/en/cards/vision/hallucination#mmhal' },
                  { text: 'Video Understanding', link: '/en/cards/vision/video-understanding' },
                  { text: 'Video-MME', link: '/en/cards/vision/video-understanding#video-mme' },
                  { text: 'LVBench', link: '/en/cards/vision/video-understanding#lvbench' },
                  { text: 'MLVU', link: '/en/cards/vision/video-understanding#mlvu' },
                  { text: 'LongVideoBench', link: '/en/cards/vision/video-understanding#longvideobench' },
                  { text: 'MotionBench', link: '/en/cards/vision/video-understanding#motionbench' },
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

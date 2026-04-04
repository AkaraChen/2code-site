export const defaultLocale = 'en' as const

export const supportedLocales = ['en', 'zh-cn'] as const

export type AppLocale = (typeof supportedLocales)[number]

export const resources = {
  en: {
      metadata: {
        title: '2code | AI Coding Workstation for Terminal, Git, and Worktrees',
        description:
          '2code is an AI coding workstation for developers who want persistent terminals, visible git state, and isolated worktrees in one calmer desktop workflow.',
        faviconAlt: '2code favicon',
      },
      announcement: {
        regionLabel: 'Announcement',
        badge: 'New',
        copy: 'aghub is out, the smoothest agent manager in the world.',
        dismiss: 'Dismiss announcement',
      },
      nav: {
        home: '2code home',
        primary: 'Primary',
        features: 'Features',
        faq: 'FAQ',
        github: 'GitHub',
      },
      hero: {
        kicker: 'Desktop software for vibe coding',
        titleLineOne: 'The Vibe Coding',
        titleLineTwo: 'Workstation.',
        lede:
          '2code is a desktop workspace where terminal, AI agents, and git live together, so you can keep moving through a coding session without scattering your attention across five different windows.',
        supporting:
          'Built for developers who want persistent terminals, fast git visibility, and worktree-based feature lanes in a single AI coding setup.',
        primaryCta: 'Download latest release',
        secondaryCta: 'Explore features',
      },
      features: {
        items: {
          terminals: {
            eyebrow: 'Persistent terminals',
            title: 'Keep the shell exactly where you left it.',
            copy:
              '2code treats terminals like long-lived work surfaces instead of disposable tabs. Scrollback, active commands, and session layout stay available across restarts, so momentum survives interruptions.',
            imageAlt: '2code persistent terminal tabs view',
          },
          git: {
            eyebrow: 'Git visibility',
            title: 'Keep diffs, history, and shipping close at hand.',
            copy:
              'The point is not to turn git into a dashboard. The point is to keep the important state nearby: what changed, what is staged, what is ready to ship, and what still needs a pass before the pull request.',
            imageAlt: '2code git diff view',
          },
          profiles: {
            eyebrow: 'Profiles',
            title: 'Split each feature into its own lane.',
            copy:
              'Create an isolated profile for a feature, bugfix, or experiment and keep its worktree, terminal sessions, and agent conversations intact. You stop paying the cognitive tax of branch hopping.',
            imageAlt: '2code worktree profile view',
          },
        },
      },
      faq: {
        kicker: 'FAQ',
        title: 'Short answers before you decide whether to follow the build.',
        items: {
          audience: {
            question: 'Who is 2code for right now?',
            answer:
              'Developers who already work with AI coding tools every day and want a calmer desktop setup for terminals, agents, and git.',
          },
          production: {
            question: 'Is 2code production-ready today?',
            answer:
              'Not yet. It is still under heavy construction, but the direction is clear: a persistent workstation for human + AI collaboration.',
          },
          platforms: {
            question: 'What platforms does it support?',
            answer:
              'macOS first. Windows and Linux are planned after the core workstation experience is solid.',
          },
        },
        cta: '2code is still early, but the direction is already visible.',
      },
  },
  'zh-cn': {
      metadata: {
        title: '2code | 面向终端、Git 与 Worktree 的 AI 编码工作站',
        description:
          '2code 是一款面向开发者的 AI 编码工作站，把持久终端、清晰可见的 Git 状态和隔离的 worktree 放进同一个更从容的桌面工作流里。',
        faviconAlt: '2code 网站图标',
      },
      announcement: {
        regionLabel: '公告',
        badge: '新',
        copy: 'aghub 已发布，它是世界上最顺滑的 agent 管理器。',
        dismiss: '关闭公告',
      },
      nav: {
        home: '2code 首页',
        primary: '主导航',
        features: '功能',
        faq: '常见问题',
        github: 'GitHub',
      },
      hero: {
        kicker: '为 vibe coding 打造的桌面软件',
        titleLineOne: 'Vibe Coding',
        titleLineTwo: '工作站。',
        lede:
          '2code 是一个把终端、AI agents 和 Git 放在一起的桌面工作区，让你在一次编码会话里持续推进，不必把注意力分散到五个不同窗口之间。',
        supporting:
          '为想把持久终端、快速 Git 可见性和基于 worktree 的功能分道整合进同一套 AI 编码环境的开发者而设计。',
        primaryCta: '下载最新版本',
        secondaryCta: '查看功能',
      },
      features: {
        items: {
          terminals: {
            eyebrow: '持久终端',
            title: '让 shell 停在你离开时的那个位置。',
            copy:
              '2code 把终端视为长期存在的工作台，而不是一次性的标签页。滚动历史、正在运行的命令和会话布局都会在重启后继续保留，所以中断不会打散你的节奏。',
            imageAlt: '2code 持久终端标签页视图',
          },
          git: {
            eyebrow: 'Git 可见性',
            title: '把 diff、历史和发布状态始终放在手边。',
            copy:
              '目标不是把 Git 做成仪表盘，而是把真正重要的状态放在近处：改了什么、暂存了什么、哪些内容已经可以发布、哪些还需要在发起 PR 之前再过一遍。',
            imageAlt: '2code Git diff 视图',
          },
          profiles: {
            eyebrow: 'Profiles',
            title: '把每个功能拆进自己的独立通道里。',
            copy:
              '为一个功能、修复或实验创建独立 profile，并保留它的 worktree、终端会话和 agent 对话。你不再需要反复承担来回切 branch 的认知负担。',
            imageAlt: '2code worktree profile 视图',
          },
        },
      },
      faq: {
        kicker: '常见问题',
        title: '在你决定是否继续关注这个项目之前，先看几个简短回答。',
        items: {
          audience: {
            question: '现在的 2code 主要是给谁用的？',
            answer:
              '给那些已经每天都在使用 AI 编码工具，并且希望为终端、agents 和 Git 找到一个更安静桌面工作环境的开发者。',
          },
          production: {
            question: '2code 现在已经能用于生产了吗？',
            answer:
              '还没有。它仍然处在高强度建设阶段，不过方向已经很明确了：做一个面向人类与 AI 协作的持久化工作站。',
          },
          platforms: {
            question: '支持哪些平台？',
            answer:
              '先做 macOS。等核心工作站体验打稳之后，再推进 Windows 和 Linux。',
          },
        },
        cta: '2code 还很早期，但方向已经清晰可见。',
      },
  },
} as const

export function detectPreferredLocale(
  language: string | readonly string[] | null | undefined,
): AppLocale {
  const candidate = Array.isArray(language) ? language[0] : language

  if (!candidate) {
    return defaultLocale
  }

  return candidate.toLowerCase().startsWith('zh') ? 'zh-cn' : 'en'
}

export function getMessages(locale: AppLocale) {
  return resources[locale]
}

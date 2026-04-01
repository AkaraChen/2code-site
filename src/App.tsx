import heroBanner from './assets/hero-banner.jpg'
import './App.css'

const principles = [
  'Terminal, agents, and git live in the same field of view.',
  'Profiles keep each feature branch isolated without losing context.',
  'The whole workspace is built to reduce alt-tab tax.',
] as const

const features = [
  {
    id: 'profiles',
    eyebrow: 'Profiles',
    title: 'Split each feature into its own lane.',
    copy:
      'Create an isolated profile for a feature, bugfix, or experiment and keep its worktree, terminal sessions, and agent conversations intact. You stop paying the cognitive tax of branch hopping.',
    points: [
      'Separate worktree per feature',
      'Dedicated terminal tabs per profile',
      'Return later without rebuilding context',
    ],
    screenshotClass: 'shot-profiles',
  },
  {
    id: 'terminals',
    eyebrow: 'Persistent terminals',
    title: 'Keep the shell exactly where you left it.',
    copy:
      '2code treats terminals like long-lived work surfaces instead of disposable tabs. Scrollback, active commands, and session layout stay available across restarts, so momentum survives interruptions.',
    points: [
      'Full scrollback preserved',
      'Multiple tabs per profile',
      'Audio cues for long-running commands',
    ],
    screenshotClass: 'shot-terminals',
  },
  {
    id: 'agents',
    eyebrow: 'AI agents',
    title: 'Give your AI partner a real place in the workspace.',
    copy:
      'Agents are not squeezed into a sidebar. They live as their own tabs, with persistent memory, full thread history, model switching, and tool visibility built into the same project context.',
    points: [
      'Conversation history stays attached',
      'Tool calls remain visible and inspectable',
      'Model switching without leaving the thread',
    ],
    screenshotClass: 'shot-agents',
  },
  {
    id: 'git',
    eyebrow: 'Git visibility',
    title: 'Keep diffs, history, and shipping close at hand.',
    copy:
      'The point is not to turn git into a dashboard. The point is to keep the important state nearby: what changed, what is staged, what is ready to ship, and what still needs a pass before the pull request.',
    points: [
      'Live staged and unstaged awareness',
      'Commit history in the same workspace',
      'Short path from change review to PR',
    ],
    screenshotClass: 'shot-git',
  },
] as const

const faqs = [
  {
    question: 'Who is 2code for right now?',
    answer:
      'Developers who already work with AI coding tools every day and want a calmer desktop setup for terminals, agents, and git.',
  },
  {
    question: 'Is 2code production-ready today?',
    answer:
      'Not yet. It is still under heavy construction, but the direction is clear: a persistent workstation for human + AI collaboration.',
  },
  {
    question: 'What platforms does it support?',
    answer:
      'macOS first. Windows and Linux are planned after the core workstation experience is solid.',
  },
  {
    question: 'Why GitHub as the main CTA?',
    answer:
      'Because the project is still early, the best next step is to follow the build directly where progress and code are visible.',
  },
] as const

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <a className="brand" href="#hero" aria-label="2code home">
          <span className="brand-name">2code</span>
        </a>

        <nav className="topnav" aria-label="Primary">
          <a href="#features">Features</a>
          <a href="#faq">FAQ</a>
          <a
            href="https://github.com/akarachen/2code"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </nav>
      </header>

      <main>
        <section className="hero-section" id="hero">
          <div className="hero-copy reveal">
            <p className="section-kicker">Desktop software for vibe coding</p>
            <h1>The Vibe Coding Workstation.</h1>
            <p className="hero-lede">
              2code is a desktop workspace where terminal, AI agents, and git
              live together, so you can keep moving through a coding session
              without scattering your attention across five different windows.
            </p>

            <div className="hero-actions">
              <a
                className="button button-primary"
                href="https://github.com/akarachen/2code"
                target="_blank"
                rel="noreferrer"
              >
                View on GitHub
              </a>
              <a className="button button-secondary" href="#features">
                Explore features
              </a>
            </div>

            <ul className="hero-principles" aria-label="2code principles">
              {principles.map((principle) => (
                <li key={principle}>{principle}</li>
              ))}
            </ul>
          </div>

          <div className="hero-stage reveal">
            <div className="hero-art">
              <img
                src={heroBanner}
                alt=""
                className="hero-banner"
                loading="eager"
                decoding="async"
              />

              <div className="workspace-note workspace-note-terminal">
                <span className="note-label">Terminal</span>
                <p>pnpm dev</p>
                <p>git worktree add profiles/checkout</p>
                <p>npm run test:watch</p>
              </div>

              <div className="workspace-note workspace-note-agent">
                <span className="note-label">Agent tab</span>
                <p>Memory preserved.</p>
                <p>Tool calls visible.</p>
                <p>Conversation still hot.</p>
              </div>

              <div className="workspace-note workspace-note-git">
                <span className="note-label">Git</span>
                <p>staged 04</p>
                <p>unstaged 09</p>
                <p>review ready</p>
              </div>

              <div className="hero-caption">
                A calmer desktop setup for developers who collaborate with AI
                every day.
              </div>
            </div>
          </div>
        </section>

        <section className="features-section" id="features">
          <div className="section-heading reveal">
            <p className="section-kicker">Features</p>
            <h2>One capability at a time, shown the way you would actually use it.</h2>
          </div>

          <div className="feature-list">
            {features.map((feature, index) => (
              <section
                className={`feature-row ${index % 2 === 1 ? 'feature-row-reverse' : ''} reveal`}
                key={feature.id}
              >
                <div className="feature-copy">
                  <p className="feature-eyebrow">{feature.eyebrow}</p>
                  <h3>{feature.title}</h3>
                  <p className="feature-body">{feature.copy}</p>
                  <ul className="feature-points">
                    {feature.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>

                <div className="feature-shot" aria-hidden="true">
                  <div className={`shot-frame ${feature.screenshotClass}`}>
                    <div className="shot-topbar">
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="shot-content">
                      <div className="shot-sidebar">
                        <div className="sidebar-pill" />
                        <div className="sidebar-pill short" />
                        <div className="sidebar-pill" />
                      </div>
                      <div className="shot-main">
                        <div className="main-header">
                          <div className="header-line wide" />
                          <div className="header-line" />
                        </div>
                        <div className="main-body">
                          <div className="body-line wide" />
                          <div className="body-line" />
                          <div className="body-line medium" />
                          <div className="body-stack">
                            <div className="stack-card" />
                            <div className="stack-card muted" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </section>

        <section className="faq-section reveal" id="faq">
          <div className="section-heading faq-heading">
            <p className="section-kicker">FAQ</p>
            <h2>Short answers before you decide whether to follow the build.</h2>
          </div>

          <div className="faq-list">
            {faqs.map((item) => (
              <details className="faq-item" key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>

          <div className="faq-cta">
            <p>2code is still early, but the direction is already visible.</p>
            <a
              className="button button-primary"
              href="https://github.com/akarachen/2code"
              target="_blank"
              rel="noreferrer"
            >
              Follow the build on GitHub
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App

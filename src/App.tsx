import { useEffect, useState } from 'react'
import heroBanner from './assets/hero-banner.jpg'
import './App.css'

const features = [
  {
    id: 'terminals',
    eyebrow: 'Persistent terminals',
    title: 'Keep the shell exactly where you left it.',
    copy:
      '2code treats terminals like long-lived work surfaces instead of disposable tabs. Scrollback, active commands, and session layout stay available across restarts, so momentum survives interruptions.',
    screenshotSrc: '/screenshots/terminal-tabs.png',
    screenshotAlt: '2code persistent terminal tabs view',
  },
  {
    id: 'git',
    eyebrow: 'Git visibility',
    title: 'Keep diffs, history, and shipping close at hand.',
    copy:
      'The point is not to turn git into a dashboard. The point is to keep the important state nearby: what changed, what is staged, what is ready to ship, and what still needs a pass before the pull request.',
    screenshotSrc: '/screenshots/git-diff.png',
    screenshotAlt: '2code git diff view',
  },
  {
    id: 'profiles',
    eyebrow: 'Profiles',
    title: 'Split each feature into its own lane.',
    copy:
      'Create an isolated profile for a feature, bugfix, or experiment and keep its worktree, terminal sessions, and agent conversations intact. You stop paying the cognitive tax of branch hopping.',
    screenshotSrc: '/screenshots/worktree.png',
    screenshotAlt: '2code worktree profile view',
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
  const [hasScrolledPastHero, setHasScrolledPastHero] = useState(false)

  useEffect(() => {
    const updateHeaderState = () => {
      const threshold = Math.max(window.innerHeight - 88, 0)
      setHasScrolledPastHero(window.scrollY >= threshold)
    }

    updateHeaderState()
    window.addEventListener('scroll', updateHeaderState, { passive: true })
    window.addEventListener('resize', updateHeaderState)

    return () => {
      window.removeEventListener('scroll', updateHeaderState)
      window.removeEventListener('resize', updateHeaderState)
    }
  }, [])

  return (
    <div className="page-shell">
      <div className="hero-fixed-media" aria-hidden="true">
        <img
          src={heroBanner}
          alt=""
          className="hero-fixed-banner"
          loading="eager"
          decoding="async"
        />
      </div>

      <header
        className={`topbar ${hasScrolledPastHero ? 'topbar-scrolled' : 'topbar-transparent'}`}
      >
        <div className="topbar-inner">
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
        </div>
      </header>

      <main>
        <section className="hero-section" id="hero">
          <div className="hero-copy reveal">
            <p className="section-kicker">Desktop software for vibe coding</p>
            <h1>
              The Vibe Coding
              <br />
              Workstation.
            </h1>
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
          </div>
        </section>

        <div className="content-surface">
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
                  </div>

                  <div className="feature-shot">
                    <figure className="shot-frame">
                      <img
                        className="feature-image"
                        src={feature.screenshotSrc}
                        alt={feature.screenshotAlt}
                        loading="lazy"
                        decoding="async"
                      />
                    </figure>
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
        </div>
      </main>
    </div>
  )
}

export default App

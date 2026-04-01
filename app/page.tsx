import { ScrollHeader } from './scroll-header'
import { siteConfig } from './site-config'

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
    question: 'Why point the main CTA to GitHub Releases?',
    answer:
      'Because the fastest path for most visitors is to grab the newest build directly from the latest release page, while still staying close to the project source.',
  },
] as const

export default function HomePage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        sameAs: [siteConfig.githubUrl],
      },
      {
        '@type': 'WebSite',
        '@id': `${siteConfig.url}/#website`,
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        publisher: {
          '@id': `${siteConfig.url}/#organization`,
        },
      },
      {
        '@type': 'SoftwareApplication',
        '@id': `${siteConfig.url}/#software`,
        name: siteConfig.name,
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'macOS',
        description: siteConfig.description,
        url: siteConfig.url,
        screenshot: [
          `${siteConfig.url}/screenshots/terminal-tabs.png`,
          `${siteConfig.url}/screenshots/git-diff.png`,
          `${siteConfig.url}/screenshots/worktree.png`,
        ],
        sameAs: [siteConfig.githubUrl],
      },
    ],
  }

  return (
    <div className="page-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="hero-fixed-media" aria-hidden="true">
        <img
          src="/hero-banner.jpg"
          alt=""
          className="hero-fixed-banner"
          width={1045}
          height={588}
          loading="eager"
          decoding="async"
        />
      </div>

      <ScrollHeader />

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
            <p className="hero-supporting-copy">
              Built for developers who want persistent terminals, fast git
              visibility, and worktree-based feature lanes in a single AI coding
              setup.
            </p>

            <div className="hero-actions">
              <a
                className="button button-primary"
                href={siteConfig.githubReleaseUrl}
                target="_blank"
                rel="noreferrer"
              >
                Download latest release
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
              <h2>
                One capability at a time, shown the way you would actually use
                it.
              </h2>
            </div>

            <div className="feature-list">
              {features.map((feature, index) => (
                <section
                  className={`feature-row ${
                    index % 2 === 1 ? 'feature-row-reverse' : ''
                  } reveal`}
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
                        width={2722}
                        height={2026}
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
                href={siteConfig.githubReleaseUrl}
                target="_blank"
                rel="noreferrer"
              >
                Download latest release
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

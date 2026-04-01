'use client'

import { useEffect, useEffectEvent, useState } from 'react'
import { type AppLocale, type resources } from './i18n/resources'

type Messages = (typeof resources)[AppLocale]

type ScrollHeaderProps = Readonly<{
  messages: Messages
}>

export function ScrollHeader({ messages }: ScrollHeaderProps) {
  const [hasScrolledPastHero, setHasScrolledPastHero] = useState(false)
  const [isAnnouncementVisible, setIsAnnouncementVisible] = useState(true)

  const updateHeaderState = useEffectEvent(() => {
    const threshold = Math.max(window.innerHeight - 88, 0)
    setHasScrolledPastHero(window.scrollY >= threshold)
  })

  useEffect(() => {
    const handleViewportChange = () => {
      updateHeaderState()
    }

    updateHeaderState()
    window.addEventListener('scroll', handleViewportChange, { passive: true })
    window.addEventListener('resize', handleViewportChange)

    return () => {
      window.removeEventListener('scroll', handleViewportChange)
      window.removeEventListener('resize', handleViewportChange)
    }
  }, [])

  const dismissAnnouncement = () => {
    setIsAnnouncementVisible(false)
  }

  return (
    <header
      className={`topbar ${
        hasScrolledPastHero ? 'topbar-scrolled' : 'topbar-transparent'
      }`}
    >
      {isAnnouncementVisible ? (
        <div
          className="topbar-announcement"
          role="region"
          aria-label={messages.announcement.regionLabel}
        >
          <a
            className="topbar-announcement-link"
            href="https://aghub.akr.moe"
            target="_blank"
            rel="noreferrer"
          >
            <span className="topbar-announcement-label">
              {messages.announcement.badge}
            </span>
            <span className="topbar-announcement-copy">
              {messages.announcement.copy}
            </span>
          </a>

          <button
            type="button"
            className="topbar-announcement-close"
            aria-label={messages.announcement.dismiss}
            onClick={dismissAnnouncement}
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
      ) : null}

      <div className="topbar-inner">
        <a className="brand" href="#hero" aria-label={messages.nav.home}>
          <span className="brand-name">2code</span>
        </a>

        <nav className="topnav" aria-label={messages.nav.primary}>
          <a href="#features">{messages.nav.features}</a>
          <a href="#faq">{messages.nav.faq}</a>
          <a
            href="https://github.com/akarachen/2code"
            target="_blank"
            rel="noreferrer"
          >
            {messages.nav.github}
          </a>
        </nav>
      </div>
    </header>
  )
}

'use client'

import { useEffect, useEffectEvent, useState } from 'react'

export function ScrollHeader() {
  const [hasScrolledPastHero, setHasScrolledPastHero] = useState(false)

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

  return (
    <header
      className={`topbar ${
        hasScrolledPastHero ? 'topbar-scrolled' : 'topbar-transparent'
      }`}
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
  )
}

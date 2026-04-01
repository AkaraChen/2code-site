import type { Metadata } from 'next'
import { getMessages, type AppLocale } from './i18n/resources'
import { siteConfig } from './site-config'

export function buildPageMetadata(
  locale: AppLocale,
  pathname: '/' | '/zh-cn',
): Metadata {
  const messages = getMessages(locale)

  return {
    title: messages.metadata.title,
    description: messages.metadata.description,
    alternates: {
      canonical: pathname,
      languages: {
        en: '/',
        'zh-CN': '/zh-cn',
      },
    },
    openGraph: {
      type: 'website',
      url: pathname,
      siteName: siteConfig.name,
      title: messages.metadata.title,
      description: messages.metadata.description,
      images: [
        {
          url: '/favicon.ico',
          alt: messages.metadata.faviconAlt,
        },
      ],
      locale: locale === 'zh-cn' ? 'zh_CN' : 'en_US',
    },
    twitter: {
      card: 'summary',
      title: messages.metadata.title,
      description: messages.metadata.description,
      images: ['/favicon.ico'],
    },
  }
}

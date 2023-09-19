import 'server-only'
import type { Locale } from '@/i18n.config'

const dictionaries = {
  en: () => import('@/dictionaries/en.json').then(module => module.default),
  vie: () => import('@/dictionaries/vie.json').then(module => module.default)
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()

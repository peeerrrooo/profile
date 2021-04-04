export const Languages = {
  ch: {
    id: 'ch',
    name: '中文',
    shortName: '中文'
  },
  da: {
    id: 'da',
    name: 'Dansk',
    shortName: 'da'
  },
  de: {
    id: 'de',
    name: 'Deutsch',
    shortName: 'de'
  },
  en: {
    id: 'en',
    name: 'English',
    shortName: 'en'
  },
  es: {
    id: 'es',
    name: 'Español',
    shortName: 'es'
  },
  fr: {
    id: 'fr',
    name: 'Français',
    shortName: 'fr'
  },
  it: {
    id: 'it',
    name: 'Italiano',
    shortName: 'it'
  },
  pt: {
    id: 'pt',
    name: 'Português',
    shortName: 'pt'
  },
  ru: {
    id: 'ru',
    name: 'Русский',
    shortName: 'рус'
  }
}
export const DEFAULT_LANG = 'ru'

export type TLangUnion = keyof typeof Languages

export interface IConfig {
  prefix: string
  apiUri: string
  prod: boolean

  siteName: string
  siteUrl: string
  siteType: 'article'
  avatarLink: string
}

export const DEFAULT_SITE_NAME = 'Daniil Brakk'
export const DEFAULT_SITE_URL = 'https://dbrakk.tech'
export const DEFAULT_SITE_TYPE = 'article'
export const DEFAULT_AVATAR_LINK = 'about-me.jpg'

import {
  IConfig,
  DEFAULT_SITE_NAME,
  DEFAULT_SITE_URL,
  DEFAULT_SITE_TYPE,
  DEFAULT_AVATAR_LINK
} from 'providers/types/config'

export const parseConfig = (config): IConfig => ({
  prefix: config?.prefix ?? '',
  apiUri: config?.apiUri ?? '',

  siteName: config?.siteName ?? DEFAULT_SITE_NAME,
  siteUrl: config?.siteUrl ?? DEFAULT_SITE_URL,
  siteType: config?.siteType ?? DEFAULT_SITE_TYPE,
  avatarLink: config?.avatarLink ?? DEFAULT_AVATAR_LINK
})

import getConfig from 'next/config'
import { IConfigProvider } from './types'
import { parseConfig } from 'utils/config'
import { IConfig } from 'providers/types/config'
import { BaseProvider } from 'providers/common/baseProvider'

class ConfigProvider extends BaseProvider implements IConfigProvider {
  config: IConfig

  constructor() {
    super()

    const { publicRuntimeConfig } = getConfig()
    this.config = parseConfig(publicRuntimeConfig)
  }
}

export { ConfigProvider }

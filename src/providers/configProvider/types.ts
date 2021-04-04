import { BaseProvider } from 'providers/common/baseProvider'
import { IConfig } from 'providers/types/config'

export interface IConfigProvider extends BaseProvider {
  config: IConfig
}

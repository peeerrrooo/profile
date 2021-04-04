import { BaseModel } from 'models/baseModel'
import { IConfig } from 'providers/types/config'

export interface IGlobalModel extends BaseModel {
  postInit: () => Promise<void>

  config: IConfig

  hydrate: (data: any) => void
  serialize: () => object
}

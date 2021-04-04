import { makeObservable, observable, action } from 'mobx'
import { BaseModel } from '../baseModel'
import { IGlobalModel } from './types'
import { IConfig } from 'providers/types/config'

class GlobalModel extends BaseModel implements IGlobalModel {
  constructor(params) {
    super(params)
    makeObservable(this)
  }

  async postInit() {}

  @observable config!: IConfig

  hydrate = (data: any) => {
    if (data?.config) {
      this.applyData({ config: data?.config })
    }
  }

  serialize = () => {
    return {
      config: this.config
    }
  }

  setConfig = action((config) => {
    this.config = config
  })
}

export { GlobalModel }

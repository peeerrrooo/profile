import _ from 'lodash'
import { action, runInAction } from 'mobx'
import { IProviders } from 'providers/types/providers'
import { IModels } from 'models/models/types'

interface Field {
  field: string
  path: string
}

export interface IInitParams {
  Providers: IProviders
  fields?: Field[]
}

class BaseModel {
  fields: Field[] = []
  protected Providers!: IProviders
  protected Models!: IModels

  constructor(params: IInitParams) {
    this.Providers = params.Providers
    if (!_.isEmpty(params.fields)) {
      this.fields = params.fields ?? []
    }
  }

  setModels(models: IModels) {
    this.Models = models
  }

  action = async (cb: () => void) => {
    if (!cb) return
    await runInAction(async () => {
      await cb()
    })
  }

  setField = (field: string) => (v: any) => {
    runInAction(() => {
      const f = _.find(this.fields, (fd) => fd.field === field)
      const path = typeof f === 'object' ? f.path : ''
      if (path) {
        _.set(this, path, v)
      } else {
        this[field] = v
      }
    })
  }

  applyData = action((data: object) => {
    runInAction(() => {
      _.each(data, (value, path) => {
        _.set(this, path, value)
      })
    })
  })
}

export { BaseModel }

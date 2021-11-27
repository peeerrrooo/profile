import { configure } from 'mobx'
import { enableStaticRendering } from 'mobx-react'
import { isServer } from 'utils/isomorphic'
import { IGlobalModel } from 'models/globalModel/types'
import { IMenuModel } from 'models/menuModel/types'
import { IHomeModel } from 'models/homeModel/types'
import { IModels } from 'models/models/types'

configure({ enforceActions: 'observed' })
enableStaticRendering(isServer())

export interface IInitParams {
  GlobalModel: IGlobalModel
  MenuModel: IMenuModel
  HomeModel: IHomeModel
}

class Models implements IModels {
  GlobalModel!: IGlobalModel

  MenuModel!: IMenuModel

  HomeModel!: IHomeModel

  hydrated = false

  init({ GlobalModel, MenuModel, HomeModel }: IInitParams) {
    this.GlobalModel = GlobalModel
    this.MenuModel = MenuModel
    this.HomeModel = HomeModel
  }

  hydrate(data) {
    try {
      const currentData = JSON.parse(data)
      this.hydrated = true
      this.GlobalModel.hydrate(JSON.parse(currentData?.GlobalModel))
    } catch {}
  }

  serialize() {
    return {
      GlobalModel: JSON.stringify(this.GlobalModel.serialize())
    }
  }
}

export { Models }

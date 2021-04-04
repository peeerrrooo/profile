import { GlobalModel } from '../globalModel'
import { MenuModel } from '../menuModel'
import { HomeModel } from '../homeModel'
import { Models } from './models'
import { Providers } from 'providers/providers'

export const modelsInit = (): Models => {
  const providers = new Providers()
  providers.init()

  const models = new Models()
  const globalModel = new GlobalModel({ Providers: providers })
  const menuModel = new MenuModel({ Providers: providers })
  const homeModel = new HomeModel({ Providers: providers })

  const ctx = {
    GlobalModel: globalModel,
    MenuModel: menuModel,
    HomeModel: homeModel
  }

  globalModel.setModels(ctx)
  menuModel.setModels(ctx)
  homeModel.setModels(ctx)

  globalModel.setConfig(providers.ConfigProvider.config)

  models.init({
    GlobalModel: globalModel,
    MenuModel: menuModel,
    HomeModel: homeModel
  })

  return models
}

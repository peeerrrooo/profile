import { IProviders } from 'providers/types/providers'

class BaseProvider {
  protected Providers!: IProviders

  setProviders = (providers: IProviders) => {
    this.Providers = providers
  }
}

export { BaseProvider }

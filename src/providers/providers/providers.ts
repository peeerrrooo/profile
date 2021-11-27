import { ConfigProvider } from 'providers/configProvider'
import { FeedbackProvider } from 'providers/api/feedbackProvider'

class Providers {
  FeedbackProvider!: FeedbackProvider

  ConfigProvider!: ConfigProvider

  init() {
    const configProvider = new ConfigProvider()
    const feedbackProvider = new FeedbackProvider()

    const ctx = {
      ConfigProvider: configProvider,
      FeedbackProvider: feedbackProvider
    }

    configProvider.setProviders(ctx)
    feedbackProvider.setProviders(ctx)

    this.ConfigProvider = configProvider
    this.FeedbackProvider = feedbackProvider
  }
}

export { Providers }

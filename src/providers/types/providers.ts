import { IConfigProvider } from 'providers/configProvider/types'
import { IFeedbackProvider } from 'providers/api/feedbackProvider/types'

export interface IProviders {
  ConfigProvider: IConfigProvider
  FeedbackProvider: IFeedbackProvider
}

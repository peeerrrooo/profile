import { BaseHttpProvider } from 'providers/common/baseHttpProvider'
import { IFeedbackProvider } from './types'

class FeedbackProvider extends BaseHttpProvider implements IFeedbackProvider {
  async sendFeedback(name, email, message) {
    await this.execute({
      uri: '/feedback',
      method: 'POST',
      data: {
        name,
        email,
        message
      }
    })
  }
}

export { FeedbackProvider }

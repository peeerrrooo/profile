import { BaseHttpProvider } from 'providers/common/baseHttpProvider'

export interface IFeedbackProvider extends BaseHttpProvider {
  sendFeedback: (name: string, email: string, message: string) => Promise<any>
}

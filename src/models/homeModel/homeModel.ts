import { makeObservable, observable, computed } from 'mobx'
import { isSafe } from 'utils/object'
import { validEmail } from 'utils/email'
import { BaseModel } from '../baseModel'
import { IHomeModel } from './types'
import { scrollTo } from 'utils/scroll'

class HomeModel extends BaseModel implements IHomeModel {
  constructor(params) {
    super(params)
    makeObservable(this)
  }

  MESSAGE_BLOCK = 'feedback:message'

  @observable name = ''

  @observable email = ''

  @observable message = ''

  @observable sendingMessage = false

  @observable successSend = false

  @observable errorSend = false

  @observable isChangeForm = false

  @computed get validName() {
    if (!isSafe(this.name) || this.name.trim() === '') return 'Required'
    return null
  }

  @computed get validEmail() {
    if (!isSafe(this.email) || this.email.trim() === '') return 'Required'
    if (validEmail(this.email)) return validEmail(this.email)
    return null
  }

  @computed get validMessage() {
    if (!isSafe(this.message) || this.message.trim() === '') return 'Required'
    return null
  }

  @computed get validSending() {
    return (
      !this.validName &&
      !this.validEmail &&
      !this.validMessage &&
      this.isChangeForm
    )
  }

  setForm = (field: string) => (value: string) => {
    this.applyData({
      [field]: value,
      successSend: false,
      errorSend: false,
      isChangeForm: true
    })
  }

  sendMessage = async () => {
    try {
      this.applyData({ sendingMessage: true })
      await this.Providers.FeedbackProvider.sendFeedback(
        this.name,
        this.email,
        this.message
      )
      this.applyData({
        isChangeForm: false,
        successSend: true
      })
    } catch {
      this.applyData({
        name: '',
        email: '',
        message: '',
        errorSend: true
      })
    } finally {
      this.applyData({ sendingMessage: false })
      scrollTo(this.MESSAGE_BLOCK)
    }
  }
}

export { HomeModel }

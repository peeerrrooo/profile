import { BaseModel } from '../baseModel'

export interface IHomeModel extends BaseModel {
  MESSAGE_BLOCK: string

  name: string
  email: string
  message: string

  sendingMessage: boolean
  validName: string | null
  validEmail: string | null
  validMessage: string | null
  validSending: boolean

  setForm: (field: string) => (value: string) => void

  successSend: boolean
  errorSend: boolean

  sendMessage: () => Promise<any>
}

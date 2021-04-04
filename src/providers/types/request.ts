import { NextPageContext } from 'next'
import { IncomingMessage, ServerResponse } from 'http'
import { Models } from 'models/models'

export interface Request extends IncomingMessage {
  Models: Models
}

export interface Context extends NextPageContext {
  req: Request
  res: ServerResponse
}

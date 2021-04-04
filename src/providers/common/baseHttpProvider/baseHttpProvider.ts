import _ from 'lodash'
import axios from 'axios'
import { safeObject } from 'utils/object'
import { BaseProvider } from 'providers/common/baseProvider'

export interface IQuery {
  uri: string
  method?: 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH'
  data?: object
  query?: object
  headers?: any
  isFormData?: boolean
  isMultiPartData?: boolean
  isFullResponse?: boolean
}
class BaseHttpProvider extends BaseProvider {
  baseHost = () => this.Providers.ConfigProvider.config.apiUri

  async execute(
    {
      uri,
      method = 'GET',
      data = {},
      query = {},
      headers = {},
      isFormData = false,
      isMultiPartData = false,
      isFullResponse = false
    }: IQuery,
    host = this.baseHost()
  ) {
    const contentType =
      headers['Content-Type'] ||
      (isFormData
        ? 'application/x-www-form-urlencoded'
        : isMultiPartData
        ? 'multipart/form-data'
        : 'application/json')

    let resolveData = {}
    if (isMultiPartData || isFormData) {
      const formData = new FormData()
      _.each(data, (value, key) => {
        formData.append(key, value)
        resolveData = formData
      })
    } else {
      resolveData = data
    }

    const prepareRequest = safeObject({
      method,
      url: `${host}${uri}`,
      data:
        method === 'POST' || method === 'PUT' || method === 'PATCH'
          ? resolveData
          : null,
      responseType: 'json',
      params: !_.isEmpty(query) ? query : null,
      headers: safeObject({
        'Content-Type': contentType,
        ...headers
      })
    })

    const res = await axios(prepareRequest)
    return isFullResponse ? res : res.data
  }
}

export { BaseHttpProvider }

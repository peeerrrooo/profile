import moment from 'moment'
import 'moment/locale/en-au'

export const DATE_FORMATS = [
  'L',
  'DD.MM.YYYY HH:mm:ss',
  'DD.MM.YYYY',
  'YYYY-MM-DD',
  'YYYY-MM-DDTHH:mm:ssZ'
]

export const DATE_FORMAT = 'DD.MM.YYYY'

moment.locale('en-au')

const getAge = (date: string | Date) => {
  return Number(
    moment(new Date(), DATE_FORMATS).diff(moment(date, DATE_FORMATS), 'years')
  )
}

const formatDate = (date, format = 'DD.MM.YYYY'): string => {
  return moment(date, DATE_FORMATS).format(format)
}

export { moment, getAge, formatDate }

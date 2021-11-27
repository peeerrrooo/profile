const prepareEmailRegexp = (locale) =>
  new RegExp(
    `^[${locale}\\.0-9_-]+@[${locale}\\.0-9-]+\\.[${locale}]{2,6}$`,
    'i'
  )

const ENGLISH = 'a-zA-Z'
const RUSSIAN = 'а-яА-ЯЁё'

export const validEmail = (email: string) => {
  if (
    !prepareEmailRegexp(ENGLISH).test(`${email}`) &&
    !prepareEmailRegexp(RUSSIAN).test(`${email}`)
  ) {
    return 'Incorrect e-mail'
  }
  return null
}

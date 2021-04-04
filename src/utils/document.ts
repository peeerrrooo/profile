export const documentTitle = (title: string, siteName: string): string => {
  let resolve = `${siteName}`
  if (title) resolve += ` | ${title}`
  return resolve
}

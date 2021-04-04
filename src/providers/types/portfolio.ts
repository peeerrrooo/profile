export interface IPortfolio {
  title: string
  image: string
  position: string
  href: string
  skills: {
    title: string
    href: string
  }[]
  content: string[]
  progress: string[]
}

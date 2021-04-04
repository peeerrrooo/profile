export interface IMenuModel {
  HOME_BLOCK: string
  ABOUT_BLOCK: string
  RESUME_BLOCK: string
  PORTFOLIO_BLOCK: string
  CONTACT_BLOCK: string

  opened: boolean
  blur: boolean

  postInit: () => Promise<void>

  open: () => void

  active: string

  setActive: (active: string, disableScroll?: boolean) => void
  scrollSetActive: (active: string) => void
}

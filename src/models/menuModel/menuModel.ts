import _ from 'lodash'
import { makeObservable, observable, action } from 'mobx'
import { Events } from 'utils/scroll'
import { BaseModel } from '../baseModel'
import { IMenuModel } from './types'

class MenuModel extends BaseModel implements IMenuModel {
  constructor(params) {
    super(params)
    makeObservable(this)
    this.scrollSetActive = _.debounce(this.scrollSetActive, 50)
    this.stopScrolling = _.debounce(this.stopScrolling, 50)
  }

  HOME_BLOCK = 'home'
  ABOUT_BLOCK = 'about'
  RESUME_BLOCK = 'resume'
  PORTFOLIO_BLOCK = 'portfolio'
  CONTACT_BLOCK = 'contact'

  @observable active = 'home'

  @observable opened = false
  @observable blur = false

  disableScroll = false
  scrollActiveMenu = ''

  postInit = async () => {
    window.addEventListener('scroll', () => {
      this.disableScroll = true
      this.stopScrolling()
    })
    Events.scrollEvent.register('end', () => {
      this.disableScroll = false
    })
  }

  open = action(() => {
    this.opened = !this.opened
  })

  setActive = (active: string, disableScroll = false) => {
    this.disableScroll = disableScroll
    if (disableScroll) this.applyData({ blur: true })
    this.scrollActiveMenu = active
    this.applyData({ active, opened: false })
  }

  scrollSetActive = (active: string) => {
    this.scrollActiveMenu = active
    if (this.disableScroll) return
    this.setActive(active)
  }

  stopScrolling = () => {
    this.disableScroll = false
    this.applyData({ blur: false })
    if (this.scrollActiveMenu) {
      this.setActive(this.scrollActiveMenu)
      this.scrollActiveMenu = ''
    }
  }
}

export { MenuModel }

import { animateScroll, Element, Events, scroller } from 'react-scroll'
import { Waypoint } from './Waypoint'

const defaultOptions = {
  duration: 250,
  delay: 0,
  smooth: true
}

function scrollTo(name, options = {}) {
  scroller.scrollTo(name, { ...defaultOptions, ...options })
}

function scrollToTop(options = {}) {
  animateScroll.scrollToTop({ ...defaultOptions, ...options })
}

function disableScroll() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft

  window.onscroll = (e) => {
    e.preventDefault()
    window.scrollTo(scrollLeft, scrollTop)
  }
  window.ontouchmove = (e) => {
    e.preventDefault()
  }
}

function enableScroll() {
  window.onscroll = () => {}
  window.ontouchmove = () => {}
}

export {
  scrollTo,
  scrollToTop,
  Events,
  Element,
  disableScroll,
  enableScroll,
  Waypoint
}

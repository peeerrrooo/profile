import Color from './colors'

export const placeholderColor = (color: string) => {
  return `
&::-webkit-input-placeholder {
    color: ${color};
}

&:-moz-placeholder {
    color: ${color};
}

&::-moz-placeholder {
    color: ${color};
}

&:-ms-input-placeholder {
    color: ${color};
}
`
}

export const clearfix = () => {
  return `
&::after {
    content: "";
    clear: both;
    display: table;
}
    `
}

export const gradientColor = (value: string, deg: number) => {
  if (value === 'a') {
    return `
            background: linear-gradient(${deg}deg, #f71595 0%, #ed560e 62%, #ff9600 100%);
            background-clip: text;
            text-fill-color: transparent;
        `
  }
  if (value === 'b') {
    return `
            background: linear-gradient(${deg}deg, rgb(251, 110, 57) 12%, rgb(252, 85, 93) 50%, rgb(253, 59, 128) 91%);
            background-clip: text;
            text-fill-color: transparent;
        `
  }
  if (value === 'c') {
    return `
            background: linear-gradient(${deg}deg, rgb(40, 172, 225) 12%, rgb(81, 204, 231) 50%, rgb(122, 235, 236) 91%);
            background-clip: text;
            text-fill-color: transparent;
        `
  }

  return ''
}

export const gradientBg = (value: string, deg: number) => {
  if (value === 'a') {
    return `
            background:linear-gradient(${deg}deg, #ffffff 0%, transparent 95%);
        `
  }
  if (value === 'b') {
    return `
            background: linear-gradient(${deg}deg, rgba(223, 32, 32, 1) 0%, rgba(0, 0, 0, 0.6) 36%, rgba(0, 0, 0, 0.3) 100%);
        `
  }
  if (value === 'c') {
    return `
            background: linear-gradient(${deg}deg, rgb(40, 172, 225) 12%, rgb(81, 204, 231) 50%, rgb(122, 235, 236) 91%);
        `
  }
  return ''
}

export function hexToRgba(h, opacity = 1) {
  const hex = h.replace('#', '')
  let r = 0
  let g = 0
  let b = 0
  if (hex.length === 6) {
    r = parseInt(hex.substring(0, 2), 16)
    g = parseInt(hex.substring(2, 4), 16)
    b = parseInt(hex.substring(4, 6), 16)
  } else {
    const rd = hex.substring(0, 1) + hex.substring(0, 1)
    const gd = hex.substring(1, 2) + hex.substring(1, 2)
    const bd = hex.substring(2, 3) + hex.substring(2, 3)
    r = parseInt(rd, 16)
    g = parseInt(gd, 16)
    b = parseInt(bd, 16)
  }

  return `rgba(${r}, ${g}, ${b}, ${opacity})`
}

export const darken = (color, amount: number) => {
  const r = new Color(color)
  return r.darken(amount)
}

export const lighten = (color, amount: number) => {
  const r = new Color(color)
  return r.lighten(amount)
}

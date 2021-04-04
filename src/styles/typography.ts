import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const Typography = createGlobalStyle`
${normalize}

#__next {
    width: 100%;
    min-height: 100%;
}

html {
    color: ${(props) => props.theme.Colors.text};
    font-size: ${(props) => props.theme.RemPoint}px;
    line-height: 1;
    overflow: hidden;
    overflow-y: auto;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
}

*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

*::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: ${(props) => props.theme.Colors.scrollBar};
}

*::-webkit-scrollbar {
    width: 8px;
    background-color: ${(props) => props.theme.Colors.scrollBar};
}

*::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${(props) => props.theme.Colors.scrollBarThumb};
}

* ::selection {
  background: ${(props) => props.theme.Colors.selection};
  text-shadow: none;
}

*::placeholder {
    color: ${(props) => props.theme.Colors.body};
}

*:-ms-input-placeholder {
    color: ${(props) => props.theme.Colors.body};
}

audio,
canvas,
iframe,
img,
svg,
video {
    vertical-align: middle;
}

img {
    max-width: 100%;
}

body {
    margin: 0;
    padding: 0;

    overflow: hidden !important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: ${(props) => props.theme.RemPoint}px;
    line-height: 1.8rem;
    font-family: ${(props) => props.theme.FontFamily.body};
    color: ${(props) => props.theme.Colors.body};
    font-weight: 400;
    background: ${(props) => props.theme.Colors.bgBody};
}

a {
    cursor: pointer;
    text-decoration: none;
    outline: none;
    color: inherit;

    &:hover {
      text-decoration: underline;
      color: ${(props) => props.theme.Colors.primary}
    }

    &:focus, &:active {
      text-decoration: none;
      outline: none;
      color: ${(props) => props.theme.Colors.primary};
    }

}
`

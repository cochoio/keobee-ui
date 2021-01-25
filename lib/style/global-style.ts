import { createGlobalStyle } from "styled-components"
import fonts from "../../fonts/fonts"

const GlobalStyle = createGlobalStyle`
  ${fonts}
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-size: 12px;
    font-family: "Nanum Gothic", sans-serif;
    font-weight: 300;
    background-color: #edf0f5;
  }
  
  a, button, input, textarea {
    font-family: "Nanum Gothic", sans-serif;
    font-weight: 300;
    &:focus {
      outline: none;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  li {
    list-style-type: none;
  }
`

export default GlobalStyle

import { createGlobalStyle } from "styled-components"

const Globals = createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Roboto", sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
`

export default Globals

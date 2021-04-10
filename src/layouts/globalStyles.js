import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    font-family: "Montserrat", sans-serif;
    font-size: 1.6rem;
  }
`

export default GlobalStyle;

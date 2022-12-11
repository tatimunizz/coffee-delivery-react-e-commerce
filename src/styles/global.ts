import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px transparent;
  }
/* 
  html: {
    margin: 0 auto;
    width: 97%;
    max-width: 1120px;
  } */
  
  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
    line-height: 130%;
    
    margin: 0 auto;
    width: 97%;
    max-width: 1120px;
  }

  body, input-security, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  h1, h2, h3 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    line-height: 160%;
  }
`


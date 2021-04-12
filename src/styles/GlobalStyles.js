import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --red-principal: #E86060;;
    --dark-red-secondary: #662323;
    --soft-gray: #BDBDBD;
    --gray: #828282;
    --light-red: #FF7676;
  }
  html {
    box-sizing: border-box;
    font-family: 'Quicksand', BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    overflow-x: hidden
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  ul, li, h1, h2, h3, h4, p, button, figure {
    margin: 0;
    padding: 0;
  }
  h3{
    font-size: 22px;
    line-height: 27.5px;
  }
  ul {
    list-style: none;
  }
  button {
    background: transparent;
    border: 0;
    outline: 0;
  }
  body {
    background: #fefefe;
    height: 100vh;
    margin: 0 auto;
    width: 100vw;
  }
  a{
    text-decoration: none;
    color: white;
  }
`
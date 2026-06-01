import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Poppins:wght@400;500;600;700&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    font-family: 'Poppins', sans-serif;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    min-height: 100vh;
    background: #F5EBDD;
    color: #3B2621;
  }

  button,
  input,
  textarea,
  select {
    font: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  img {
    display: block;
    max-width: 100%;
  }

  body, button, input, textarea, select {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

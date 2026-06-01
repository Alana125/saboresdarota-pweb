import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  /* ============== Reset ============== */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* ============== HTML & Body ============== */
  html {
    font-family: 'Poppins', sans-serif;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-size: 14px;
    line-height: 1.6;
  }

  /* ============== Form Elements ============== */
  button,
  input,
  textarea,
  select {
    font: inherit;
    font-family: 'Poppins', sans-serif;
  }

  input,
  textarea,
  select {
    border: none;
    outline: none;
    background: transparent;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    background: transparent;
    color: inherit;
  }

  /* ============== Links ============== */
  a {
    color: inherit;
    text-decoration: none;
    transition: ${({ theme }) => theme.transitions.base};
  }

  /* ============== Lists ============== */
  ul,
  ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }

  /* ============== Images ============== */
  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
    height: auto;
  }

  /* ============== Headings ============== */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    line-height: 1.2;
    margin: 0;
    color: ${({ theme }) => theme.colors.primary};
  }

  h1 {
    font-size: clamp(24px, 5vw, 56px);
  }

  h2 {
    font-size: clamp(20px, 4vw, 44px);
  }

  h3 {
    font-size: clamp(18px, 3vw, 28px);
  }

  h4 {
    font-size: 20px;
  }

  h5 {
    font-size: 16px;
  }

  h6 {
    font-size: 14px;
  }

  p {
    margin: 0;
  }

  /* ============== Scrollbar ============== */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.background};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.border};
    border-radius: 4px;

    &:hover {
      background: ${({ theme }) => theme.colors.accent};
    }
  }

  /* ============== Selection ============== */
  ::selection {
    background: ${({ theme }) => theme.colors.accent};
    color: white;
  }

  ::-moz-selection {
    background: ${({ theme }) => theme.colors.accent};
    color: white;
  }

  /* ============== Accessibility ============== */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* ============== Print ============== */
  @media print {
    body {
      background: white;
    }
  }
`

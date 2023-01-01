import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
    border: none;
    text-decoration: none;
  }
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
    background: ${({ theme }) => theme.colors.base.background};
  }
  body, input, textarea, button {
    color: ${({ theme }) => theme.colors.base.text};
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    color: ${({ theme }) => theme.colors.brand.blue};
    text-decoration: none;
    transition: all 0.2s;
    ${({ theme }) => theme.type.components.link}

    &:hover {
      border-bottom: 1px solid ${({ theme }) => theme.colors.brand.blue};
    }
  }
`

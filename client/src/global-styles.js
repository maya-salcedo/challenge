import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #FFFFFF;
    color: #00000;
    font-size: 16px;
    margin: 0;
  }
`;

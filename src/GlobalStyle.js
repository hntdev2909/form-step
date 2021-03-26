import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500&display=swap');

  @font-face {
    font-family: 'Raleway', san-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-family: 'Montserrat';
  }

  body {
    font-size: 56.25%;
    box-sizing: inherit;
  }
`;

export { GlobalStyle };

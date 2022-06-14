import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Verdana, Arial, sans-serif;
  }

  html, body {
    max-width: 1200px;
  }

  body {
    & > #root {
      width: 100%;
      height: 100%;
    }
  }

  body {

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  #root {
    display: flex;
  }`;

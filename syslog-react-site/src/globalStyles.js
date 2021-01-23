import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

h1, h2, h3, h4, h5, h6 {
  font-family: 'Acme', sans-serif;
  font-weight: 800;
   }
`;

export default GlobalStyle;

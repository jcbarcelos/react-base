import styled, { createGlobalStyle } from "styled-components";
import { primaryColor, primaryDarkColor } from "../config/colors";

export default createGlobalStyle`
  * {
    font-family: Roboto sans-serif;
    font-size: 14px;
    margin: 0px;
    padding: 10px;
    box-sizing: border-box;
    outline: none;
  }
  body {
    color:  ${primaryDarkColor};
    background: ${primaryDarkColor};
  }
  html, body, #root {
      height: 100%;
  }
  button {
      cursor: pointer;
      background: ${primaryColor};
      border: none;
      color: #fff;
      padding: 10px 20px;
      border-radius: 4px;
  }
  a {
    text-decoration: none;
    color: ${primaryColor}}
  }
  ul {
    list-style: none;
  }
`;

export const Container = styled.section`
  max-width: 360px;
  background: #fff;
  margin: 0px auto;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

import styled, { createGlobalStyle } from "styled-components";
import {
  primaryColor,
  primaryDarkColor,
  defaultDarkColor,
  errorDarkColor,
  errorBackgroundDarkColor,
  infoBackgroundDarkColor,
  warningBackgroundDarkColor,
  seccessBackgroundDarkColor
} from "../config/colors";

export default createGlobalStyle`
  * {
    font-family: Roboto sans-serif;
    font-size: 14px;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }
  body {
    color:  ${primaryColor};
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
    color: ${primaryColor}
  }
  ul {
    list-style: none;
  }
  /** configuraçõe de cores para o toastify */
  /* body .Toastify .Toastify__toast-container .Toastify__toast--success {
    background: ${seccessBackgroundDarkColor};
    color: ${defaultDarkColor}
  }
  body .Toastify .Toastify__toast-container .Toastify__toast--error {
    background: ${errorBackgroundDarkColor};
    color: ${errorDarkColor}
  }
  body .Toastify .Toastify__toast-container .Toastify__toast--info {
    background: ${infoBackgroundDarkColor};
    color: ${defaultDarkColor}
  }
  body .Toastify .Toastify__toast-container .Toastify__toast--warn {
    background: ${warningBackgroundDarkColor};
    color: ${defaultDarkColor}
  }
  body .Toastify__toast-icon .Toastify--animate-icon .Toastify__zoom-enter{
    background: "#fff";
    color: "#fff";
  } */
`;

export const Container = styled.section`
  max-width: 360px;
  background: #fff;
  margin: 10px;
  border-radius: 8px;
  justify-content: center;
  padding: 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

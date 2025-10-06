import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root { color-scheme: ${({ theme }) => theme.name}; }
  * { box-sizing: border-box; }
  html, body, #root { height: 100%; }
  body {
    margin: 0;
    background: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.text};
    font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
    transition: background .2s ease, color .2s ease;
  }
  a { color: inherit; text-decoration: none; }
  button { font: inherit; }
`;

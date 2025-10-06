import "styled-components";

type Mode = "light" | "dark";

declare module "styled-components" {
  export interface DefaultTheme {
    name: string;
    colors: {
      bg: string;
      text: string;
      muted: string;
      primary: string;
      primaryHover: string;
      surface: string;
      border: string;
    };
    radius: string;
    shadow: string;
    mode: Mode;
    setMode?: (m: Mode) => void; 
  }
}

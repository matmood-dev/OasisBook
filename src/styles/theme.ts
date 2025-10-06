export type AppTheme = typeof lightTheme;

export const lightTheme = {
  name: "light",
  colors: {
    bg: "#fefefe",
    text: "#1a1a1a",
    muted: "#8b8b8b",
    primary: "#b89a4f",
    primaryHover: "#9b7d3f",
    surface: "#f7f7f2",
    border: "#dcdcd2",
  },
  radius: "16px",
  shadow: "0 6px 24px rgba(0,0,0,0.06)",
};

export const darkTheme: AppTheme = {
  name: "dark",
  colors: {
    bg: "#121212",
    text: "#e8ecef",
    muted: "#a0a0a0",
    primary: "#b89a4f",
    primaryHover: "#d4b76b",
    surface: "#1e1e1e",
    border: "#383838",
  },
  radius: "16px",
  shadow: "0 8px 28px rgba(0,0,0,0.35)",
};
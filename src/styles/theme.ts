export type AppTheme = typeof lightTheme;

export const lightTheme = {
  name: "light",
  colors: {
    bg: "#ffffff",
    text: "#121212",
    muted: "#6b7280",
    primary: "#0ea5e9",   // brand aqua
    primaryHover: "#0284c7",
    surface: "#f8fafc",
    border: "#e5e7eb",
  },
  radius: "16px",
  shadow: "0 6px 24px rgba(0,0,0,0.06)"
};

export const darkTheme: AppTheme = {
  name: "dark",
  colors: {
    bg: "#0b0f14",
    text: "#e5e7eb",
    muted: "#9ca3af",
    primary: "#38bdf8",
    primaryHover: "#0ea5e9",
    surface: "#0f1620",
    border: "#1f2937",
  },
  radius: "16px",
  shadow: "0 8px 28px rgba(0,0,0,0.35)"
};

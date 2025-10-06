import styled, { useTheme } from "styled-components";

const Btn = styled.button`
  display: inline-flex; align-items: center; justify-content: center;
  width: 38px; height: 38px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 10px; cursor: pointer;
  transition: transform .12s ease, border-color .12s ease;
  &:hover { transform: translateY(-1px); border-color: ${({ theme }) => theme.colors.primary}; }
  svg { width: 18px; height: 18px; stroke: ${({ theme }) => theme.colors.text}; }
`;

function IconSun() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="4.5" strokeWidth="1.6"/>
      <path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5 5l-1.5-1.5M20.5 20.5L19 19M5 19l-1.5 1.5M20.5 3.5L19 5" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
}
function IconMoon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M20 12.5A8.5 8.5 0 1 1 11.5 4a7 7 0 0 0 8.5 8.5Z" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function ThemeToggle() {
  const theme = useTheme() as any;
  const isDark = theme.mode === "dark";
  const toggle = () => theme.setMode(isDark ? "light" : "dark");

  return (
    <Btn onClick={toggle} aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}>
      {isDark ? <IconMoon /> : <IconSun />}
    </Btn>
  );
}

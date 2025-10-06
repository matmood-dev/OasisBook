import styled, { useTheme } from "styled-components";

const Btn = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  padding: 8px 12px; border-radius: 10px; cursor: pointer;
`;

export default function ThemeToggle() {
  const theme = useTheme() as any;
  const toggle = () => theme.setMode(theme.mode === "dark" ? "light" : "dark");
  return <Btn onClick={toggle}>{theme.mode === "dark" ? "☾" : "☼"}</Btn>;
}

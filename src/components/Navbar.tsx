import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useTranslation } from "react-i18next";

const Bar = styled.header`
  position: sticky; top: 0; z-index: 10;
  backdrop-filter: saturate(180%) blur(10px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
`;

const Inner = styled.div`
  max-width: 1120px; margin: 0 auto; padding: 12px 20px;
  display: flex; align-items: center; gap: 12px;
`;

const Brand = styled(Link)`
  font-weight: 700; font-size: 20px; padding: 8px 12px; border-radius: 12px;
`;

const Nav = styled.nav`
  margin-inline-start: auto; display: flex; gap: 10px; align-items: center;
`;

const Tab = styled(Link)<{ active?: boolean }>`
  padding: 8px 12px; border-radius: 10px;
  background: ${({ active, theme }) => (active ? theme.colors.primary : "transparent")};
  color: ${({ active, theme }) => (active ? "#fff" : theme.colors.text)};
  border: 1px solid ${({ theme }) => theme.colors.border};
  &:hover { opacity: .9; }
`;

export default function Navbar() {
  const { t } = useTranslation();
  const loc = useLocation();

  return (
    <Bar>
      <Inner>
        <Brand to="/">{t("brand")}</Brand>
        <Nav>
          <Tab to="/" active={loc.pathname==="/"}>{t("nav.home")}</Tab>
          <Tab to="/listings" active={loc.pathname==="/listings"}>{t("nav.listings")}</Tab>
          <LanguageToggle />
          <ThemeToggle />
        </Nav>
      </Inner>
    </Bar>
  );
}

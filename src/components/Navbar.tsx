import styled, { useTheme } from "styled-components";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useTranslation } from "react-i18next";
import LogoLight from "../assets/logoLight.png";
import LogoDark from "../assets/logoDark.png";


export default function Navbar() {
  const { t } = useTranslation();
  const loc = useLocation();
  const theme = useTheme() as any;
  const logo = theme.name === "dark" ? LogoDark : LogoLight;

  return (
    <Bar>
      <Inner>
        <Brand to="/" aria-label="OasisBook Home">
          <LogoImg src={logo} alt="OasisBook logo" />
        </Brand>

        <Nav aria-label="Primary">
          <Tab to="/" $active={loc.pathname === "/"}>{t("nav.home")}</Tab>
          <Tab to="/listings" $active={loc.pathname === "/listings"}>{t("nav.listings")}</Tab>
          <Tab to="/about" $active={loc.pathname === "/about"}>{t("nav.about")}</Tab>
        </Nav>

        <Controls>
          <Control><LanguageToggle /></Control>
          <Control><ThemeToggle /></Control>
        </Controls>
      </Inner>
    </Bar>
  );
}

const Bar = styled.header`
  position: sticky; top: 0; z-index: 1000;
  background: ${({ theme }) => theme.colors.surface};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const Inner = styled.div`
  max-width: 1120px; margin: 0 auto; height: 60px;
  padding: 0 16px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center; gap: 12px;
`;

const Brand = styled(Link)`
  display: inline-flex; align-items: center; gap: 10px;
  text-decoration: none; color: inherit;
`;

const LogoImg = styled.img`
  width: 84px; height: 50px; object-fit: contain;
`;

const Nav = styled.nav`
  justify-self: center;
  display: inline-flex; gap: 24px; align-items: center;
`;

const Tab = styled(Link)<{ $active?: boolean }>`
  position: relative; text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600; font-size: 14px; padding: 6px 0;

  &::after{
    content: ""; position: absolute; inset-inline: 0; bottom: -8px; height: 2px;
    background: ${({ theme }) => theme.colors.primary};
    transform: scaleX(${({ $active }) => ($active ? 1 : 0)});
    transform-origin: center; transition: transform .12s ease;
  }
  &:hover::after { transform: scaleX(1); }
`;

const Controls = styled.div`
  justify-self: end;
  display: inline-flex; gap: 0px; align-items: center;
`;

const Control = styled.div`
  background: transparent; padding: 6px 5px; border-radius: 10px;
  display: inline-flex; align-items: center; justify-content: center;
`;
// src/components/Footer.tsx
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Wrap = styled.footer`
  margin-top: 48px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
`;

const Inner = styled.div`
  max-width: 1120px; margin: 0 auto;
  padding: 28px 16px;
  display: grid; gap: 24px;
  grid-template-columns: 1fr;
  @media (min-width: 860px) { grid-template-columns: 2fr 1fr 1fr 1fr; }
`;

const Brand = styled.div` display: grid; gap: 10px; `;

const BrandName = styled.div`
  font-weight: 800; font-size: 18px;
  background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.primaryHover});
  -webkit-background-clip: text; background-clip: text; color: transparent;
`;

const Muted = styled.p` margin: 0; opacity: .75; line-height: 1.6; `;

const ColTitle = styled.h4` margin: 0 0 10px 0; font-size: 14px; letter-spacing: .2px; `;

const List = styled.nav` display: grid; gap: 8px; `;

const Item = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none; opacity: .9; font-size: 14px;
  &:hover { opacity: 1; text-decoration: underline; }
`;

const Social = styled.div` display: inline-flex; gap: 8px; margin-top: 8px; `;

const SocialBtn = styled.a`
  display: inline-grid; place-items: center; width: 36px; height: 36px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.bg};
  text-decoration: none;
  &:hover { border-color: ${({ theme }) => theme.colors.primary}; }
  svg { width: 18px; height: 18px; stroke: ${({ theme }) => theme.colors.text}; }
`;

const Bottom = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding: 14px 16px; font-size: 13px; opacity: .9;
`;

const Row = styled.div`
  max-width: 1120px; margin: 0 auto;
  display: flex; align-items: center; gap: 10px; justify-content: space-between; flex-wrap: wrap;
`;

const Small = styled.span` white-space: nowrap; `;

function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="5" strokeWidth="1.5"/>
      <circle cx="12" cy="12" r="3.5" strokeWidth="1.5"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
    </svg>
  );
}
function IconX() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M4 4l16 16M20 4L4 20" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
}
function IconTikTok() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M14 4v7.5a4.5 4.5 0 1 1-3.6-4.4" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 4c1.2 2.2 3.1 3.5 5 3.8" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
}
function IconWhatsApp() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M7 19l-1.5 3 3-1.5" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="12" cy="11" r="7" strokeWidth="1.5"/>
      <path d="M9.5 9.5c.6 1.7 2.3 3.4 4 4l1-.9c.3-.2.7-.2 1 0l1.1.6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function Footer() {
  const { t } = useTranslation();

  return (
    <Wrap>
      <Inner>
        <Brand>
          <BrandName>{t("brand", "OasisBook")}</BrandName>
          <Muted>
            {t("footer.tagline", "Book pools and camps across Bahrain with fast search and clear pricing.")}
          </Muted>
          <Social>
            <SocialBtn href="#" aria-label="Instagram"><IconInstagram/></SocialBtn>
            <SocialBtn href="#" aria-label="Twitter/X"><IconX/></SocialBtn>
            <SocialBtn href="#" aria-label="TikTok"><IconTikTok/></SocialBtn>
            <SocialBtn href="#" aria-label="WhatsApp"><IconWhatsApp/></SocialBtn>
          </Social>
        </Brand>

        <div>
          <ColTitle>{t("footer.explore", "Explore")}</ColTitle>
          <List>
            <Item to="/listings?type=pool">{t("listings.pool", "Pool")}</Item>
            <Item to="/listings?type=camp">{t("listings.camp", "Camp")}</Item>
          </List>
        </div>

        <div>
          <ColTitle>{t("footer.company", "Company")}</ColTitle>
          <List>
            <Item to="/about">{t("footer.about", "About")}</Item>
            <Item to="/contact">{t("footer.contact", "Contact")}</Item>
            <Item to="/terms">{t("footer.terms", "Terms")}</Item>
            <Item to="/privacy">{t("footer.privacy", "Privacy")}</Item>
          </List>
        </div>

        <div>
          <ColTitle>{t("footer.help", "Help")}</ColTitle>
          <List>
            <Item to="/faq">{t("footer.faq", "FAQ")}</Item>
            <Item to="/support">{t("footer.support", "Support")}</Item>
            <Item to="/hosts">{t("footer.hosts", "Become a host")}</Item>
          </List>
        </div>
      </Inner>

      <Bottom>
        <Row>
          <Small>© {new Date().getFullYear()} {t("brand", "OasisBook")}</Small>
          <Small>
            {t("footer.madein", "Made by")}{' '}
            <a href="https://matmood.netlify.app" target="_blank" rel="noreferrer" style={{ color: "inherit", textDecoration: "underline" }}>
              Mahmood
            </a>
          </Small>
        </Row>
      </Bottom>
    </Wrap>
  );
}

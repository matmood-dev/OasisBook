// src/pages/NotFound.tsx
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Wrap = styled.section`
  min-height: calc(100vh - 160px);
  display: grid; place-items: center; padding: 24px 0;
`;
const Card = styled.div`
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 22px; padding: 28px;
  max-width: 760px; width: 100%;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,.06);
  &::before{
    content:"";
    position:absolute; inset:-40% -20% auto -20%; height: 180px;
    background: radial-gradient(60% 80% at 20% 50%, rgba(0,0,0,.06), transparent 70%),
                linear-gradient(120deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.primaryHover});
    opacity:.12; pointer-events:none;
  }
`;
const GridBg = styled.div`
  position:absolute; inset:0; pointer-events:none; opacity:.06;
  background-image:
    linear-gradient(transparent 31px, currentColor 32px),
    linear-gradient(90deg, transparent 31px, currentColor 32px);
  background-size: 32px 32px;
  color: ${({ theme }) => theme.colors.text};
`;
const Big = styled.div`
  font-size: clamp(64px, 16vw, 160px);
  font-weight: 900; line-height: .9; margin: 0;
  background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.primaryHover});
  -webkit-background-clip: text; background-clip: text; color: transparent;
  letter-spacing: -2px; text-align:center;
`;
const Title = styled.h1`
  margin: 6px 0 0; text-align:center; font-size: clamp(18px,3.4vw,28px);
`;
const Sub = styled.p` margin: 8px auto 0; opacity:.85; text-align:center; max-width: 560px; `;
const Row = styled.div`
  margin-top: 16px;
  display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;
`;
const Button = styled(Link)`
  display:inline-block; text-decoration:none; font-weight:700;
  padding: 10px 14px; border-radius: 12px; border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.bg}; color: ${({ theme }) => theme.colors.text};
  &:hover{ border-color: ${({ theme }) => theme.colors.primary}; }
`;
const Primary = styled(Link)`
  display:inline-block; text-decoration:none; font-weight:700; color:#fff;
  padding: 10px 14px; border-radius: 12px;
  background: linear-gradient(120deg, ${({ theme }) => theme.colors.primary} 0%, ${({ theme }) => theme.colors.primaryHover} 100%);
  &:hover{ filter: brightness(1.02); }
`;
const Small = styled.p` margin: 18px 0 0; text-align:center; opacity:.65; font-size:12px; `;

export default function NotFound() {
  const { t } = useTranslation();
  return (
    <Wrap>
      <Card>
        <GridBg />
        <Big>404</Big>
        <Title>{t("404.title", "Page not found")}</Title>
        <Sub>
          {t("404.sub", "The page you’re looking for doesn’t exist or was moved.")}
        </Sub>
        <Row>
          <Primary to="/">{t("404.home", "Go home")}</Primary>
          <Button to="/listings">{t("404.explore", "Browse listings")}</Button>
          <Button to="/contact">{t("404.contact", "Contact us")}</Button>
          <Button to="/faq">{t("404.faq", "Read FAQ")}</Button>
        </Row>
        <Small>{t("404.code", "Error code: 404 — Not Found")}</Small>
      </Card>
    </Wrap>
  );
}

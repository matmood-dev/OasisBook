import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Card, Primary } from "../components/Card";

const Hero = styled.section`
  display: grid; gap: 14px; padding: 24px 0 8px;
`;

export default function Home() {
  const { t } = useTranslation();
  return (
    <Hero>
      <h1>{t("home.title")}</h1>
      <p style={{ color: "var(--muted)" }}>{t("home.subtitle")}</p>
      <Card>
        <p>Search box placeholder</p>
        <Primary>Search</Primary>
      </Card>
    </Hero>
  );
}

// src/pages/About.tsx
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function About() {
  const { t } = useTranslation();

  return (
    <Wrap>
      <Hero>
        <Title>{t("about.title", "About OasisBook")}</Title>
        <Sub>{t("about.subtitle", "A Bahrain-first marketplace for booking private pools and desert camps.")}</Sub>
      </Hero>

      <Grid>
        <Card>
          <H>{t("about.mission.title", "Our mission")}</H>
          <P>{t("about.mission.body",
            "Make weekend planning in Bahrain simple, transparent, and fast—so families and friends spend less time coordinating and more time enjoying.")}</P>
          <List>
            <li>{t("about.mission.point1", "Verified listings with clear photos and rules")}</li>
            <li>{t("about.mission.point2", "Up-front pricing and instant requests")}</li>
            <li>{t("about.mission.point3", "Arabic and English support")}</li>
          </List>
        </Card>

        <Card>
          <H>{t("about.how.title", "How OasisBook works")}</H>
          <List>
            <li>{t("about.how.step1", "Search by area, date, and type (pool or camp).")}</li>
            <li>{t("about.how.step2", "Compare photos, amenities, rules, and reviews.")}</li>
            <li>{t("about.how.step3", "Send a booking request and get confirmed fast.")}</li>
          </List>
        </Card>
      </Grid>

      <Stat>
        <div>
          <K>{t("about.stats.listings", "50+")}</K>
          <L>{t("about.stats.listings_label", "Listings (growing)")}</L>
        </div>
        <div>
          <K>{t("about.stats.areas", "10+")}</K>
          <L>{t("about.stats.areas_label", "Areas in Bahrain")}</L>
        </div>
        <div>
          <K>{t("about.stats.languages", "2")}</K>
          <L>{t("about.stats.languages_label", "Languages supported")}</L>
        </div>
      </Stat>

      <CTA>
        <div>
          <strong>{t("about.cta.title", "Are you a host?")}</strong>
          <div>{t("about.cta.sub", "List your pool or camp and reach weekend-ready guests.")}</div>
        </div>
        <Button to="/hosts">{t("about.cta.btn", "Become a host")}</Button>
      </CTA>
    </Wrap>
  );
}

const Wrap = styled.section`
  display: grid; gap: 24px;
`;

const Hero = styled.header`
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 20px;
  padding: 20px;
`;

const Title = styled.h1`
  margin: 0 0 6px 0;
  font-size: clamp(22px, 4vw, 32px);
`;

const Sub = styled.p` margin: 0; opacity: .85; `;

const Grid = styled.div`
  display: grid; gap: 14px;
  grid-template-columns: 1fr;
  @media (min-width: 860px){ grid-template-columns: 1fr 1fr; }
`;

const Card = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 16px; padding: 16px;
`;

const H = styled.h2` margin: 0 0 8px 0; font-size: 18px; `;
const P = styled.p` margin: 0; opacity: .9; line-height: 1.7; `;

const List = styled.ul`
  margin: 8px 0 0 1.1em; padding: 0; line-height: 1.8; opacity: .95;
`;

const Stat = styled.div`
  display: grid; gap: 8px;
  grid-template-columns: repeat(3, minmax(0,1fr));
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 16px; padding: 14px;
`;

const K = styled.div` font-weight: 800; font-size: 18px; `;
const L = styled.div` opacity: .75; font-size: 12px; `;

const CTA = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 16px; padding: 16px;
  background:
    linear-gradient(120deg, ${({ theme }) => theme.colors.primary} 0%, ${({ theme }) => theme.colors.primaryHover} 100%)
    padding-box,
    ${({ theme }) => theme.colors.surface} border-box;
  color: #fff;
  display: grid; gap: 10px;
  @media (min-width: 720px){ grid-template-columns: 1fr auto; align-items: center; }
`;

const Button = styled(Link)`
  background: #fff; color: #111; text-decoration: none;
  padding: 10px 14px; border-radius: 12px; font-weight: 700;
  justify-self: start;
`;
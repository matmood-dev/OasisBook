import { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { pools, camps, pickLocale } from "../data/listings";

import heroImg from "../assets/hero.jpg";
import catPools from "../assets/categories/pools.png";
import catCamps from "../assets/categories/camps.jpg";

export default function Home() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const lang = (i18n.language as "en" | "ar") || "en";
  const L = (v: any) => (typeof v === "string" ? v : pickLocale(v, lang));
  const [q, setQ] = useState("");

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `/listings?query=${encodeURIComponent(q)}`;
  };

  return (
    <Wrap>
      <Hero>
        <HeroMedia img={heroImg} />
        <HeroTint />
        <HeroContent>
          <div>
            <Title>
              {t("home.title", "Find pools and camps across Bahrain")}
            </Title>
            <Sub>
              {t(
                "home.subtitle",
                "Browse verified weekend spots and book in minutes."
              )}
            </Sub>

            <SearchBar onSubmit={onSearch}>
              <Input
                placeholder={t(
                  "home.search_placeholder",
                  "Search pools, camps, or areas"
                )}
                value={q}
                onChange={(e) => setQ(e.target.value)}
              />
              <Button type="submit">{t("actions.book", "Search")}</Button>
            </SearchBar>

            <Chips>
              <Chip to="/listings?type=pool">{t("listings.pool", "Pool")}</Chip>
              <Chip to="/listings?type=camp">{t("listings.camp", "Camp")}</Chip>
            </Chips>
          </div>

          <CatTile
            img="https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1200&auto=format&fit=crop"
            to="/listings?featured=true"
          >
            <span>{t("home.featured", "Featured this week")}</span>
          </CatTile>
        </HeroContent>
      </Hero>

      <SectionHead>
        <SectionTitle>{t("home.categories", "Categories")}</SectionTitle>
      </SectionHead>
      <CatGrid>
        <CatTile
          img={catPools}
          to="/listings?type=pool"
          aria-label={t("listings.pool", "Pool")}
        >
          <CatLabel>
            <Dot />
            {t("listings.pool", "Pool")}
          </CatLabel>
          <CatHint>{t("home.featured_pools", "Popular pools")}</CatHint>
        </CatTile>

        <CatTile
          img={catCamps}
          to="/listings?type=camp"
          aria-label={t("listings.camp", "Camp")}
        >
          <CatLabel>
            <Dot />
            {t("listings.camp", "Camp")}
          </CatLabel>
          <CatHint>{t("home.featured_camps", "Popular camps")}</CatHint>
        </CatTile>
      </CatGrid>

      <SectionHead>
        <SectionTitle>{t("home.featured_pools", "Popular pools")}</SectionTitle>
      </SectionHead>
      <Grid>
        {pools.map((f) => (
          <Card to={`/listings?id=${f.id}`} key={f.id}>
            <CardMedia img={f.img} />
            <CardBody>
              <Name>{L(f.name)}</Name>
              <Meta>
                <Badge>{L(f.area)}</Badge>
                <Badge>{f.price}</Badge>
              </Meta>
            </CardBody>
          </Card>
        ))}
      </Grid>

      <SectionHead>
        <SectionTitle>{t("home.featured_camps", "Popular camps")}</SectionTitle>
      </SectionHead>
      <Grid>
        {camps.map((f) => (
          <Card to={`/listings?id=${f.id}`} key={f.id}>
            <CardMedia img={f.img} />
            <CardBody>
              <Name>{L(f.name)}</Name>
              <Meta>
                <Badge>{L(f.area)}</Badge>
                <Badge>{f.price}</Badge>
              </Meta>
            </CardBody>
          </Card>
        ))}
      </Grid>

      <SectionHead>
        <SectionTitle>{t("home.how", "How it works")}</SectionTitle>
      </SectionHead>
      <Steps>
        <Step>
          <K>1</K>
          <Name>{t("home.how.search", "Search")}</Name>
          <Sub>
            {t("home.how.search_sub", "Find a pool or camp by area and date.")}
          </Sub>
        </Step>
        <Step>
          <K>2</K>
          <Name>{t("home.how.pick", "Pick your spot")}</Name>
          <Sub>
            {t("home.how.pick_sub", "View photos, amenities, and rules.")}
          </Sub>
        </Step>
        <Step>
          <K>3</K>
          <Name>{t("home.how.book", "Book")}</Name>
          <Sub>
            {t("home.how.book_sub", "Reserve instantly. Pay on confirmation.")}
          </Sub>
        </Step>
      </Steps>

      <Cta>
        <div>
          <strong>{t("home.cta.title", "Ready for the weekend?")}</strong>
          <div>
            {t(
              "home.cta.sub",
              "Browse all listings and pick your perfect spot."
            )}
          </div>
        </div>
        <CtaBtn to="/listings">{t("home.cta.btn", "Explore listings")}</CtaBtn>
      </Cta>
    </Wrap>
  );
}

const Wrap = styled.section`
  display: grid;
  gap: 28px;
  padding: 24px 0 56px;
`;

const Hero = styled.div`
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 22px;
  overflow: hidden;
  min-height: 240px;
  background: ${({ theme }) => theme.colors.surface};
`;

const HeroMedia = styled.div<{ img: string }>`
  position: absolute;
  inset: 0;
  background: url(${(p) => p.img}) center/cover no-repeat;
  filter: saturate(1.05);
  opacity: 0.35;
`;

const HeroTint = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    120deg,
    rgba(0, 0, 0, 0.25) 0%,
    rgba(0, 0, 0, 0.05) 60%
  );
`;

const HeroContent = styled.div`
  position: relative;
  padding: 24px;
  display: grid;
  gap: 14px;
  @media (min-width: 720px) {
    padding: 32px;
    grid-template-columns: 1.1fr 0.9fr;
    align-items: center;
    gap: 22px;
  }
`;

const Title = styled.h1`
  margin: 0;
  font-size: clamp(22px, 4.2vw, 36px);
`;

const Sub = styled.p`
  margin: 4px 0 0 0;
  opacity: 0.9;
`;

const SearchBar = styled.form`
  margin-top: 12px;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 10px;
`;

const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 14px;
  padding: 12px 14px;
  background: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.text};
  outline: none;
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const Button = styled.button`
  border: none;
  border-radius: 14px;
  padding: 12px 16px;
  cursor: pointer;
  font-weight: 700;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
  }
`;

const Chips = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 10px;
`;

const Chip = styled(Link)`
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 8px 12px;
  border-radius: 999px;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  background: ${({ theme }) => theme.colors.bg};
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const SectionHead = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
`;

const SectionTitle = styled.h2`
  margin: 0;
  font-size: 18px;
  border-inline-start: 4px solid ${({ theme }) => theme.colors.primary};
  padding-inline-start: 8px;
  line-height: 1.2;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 14px;
`;

const Card = styled(Link)`
  position: relative;
  display: block;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 16px;
  overflow: hidden;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.surface};
  transition: transform 0.12s ease, box-shadow 0.12s ease;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 22px rgba(0, 0, 0, 0.1);
  }
`;

const CardMedia = styled.div<{ img: string }>`
  height: 150px;
  background: url(${(p) => p.img}) center/cover no-repeat;
`;

const CardBody = styled.div`
  padding: 12px;
`;

const Name = styled.div`
  font-weight: 700;
  margin-bottom: 4px;
`;
const Meta = styled.div`
  opacity: 0.8;
  font-size: 13px;
  display: flex;
  gap: 10px;
`;
const Badge = styled.span`
  display: inline-block;
  background: ${({ theme }) => theme.colors.bg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 999px;
  padding: 4px 8px;
  font-size: 12px;
`;

const CatGrid = styled.div`
  display: grid;
  gap: 14px;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
`;

const CatTile = styled(Link)<{ img: string }>`
  position: relative;
  display: block;
  overflow: hidden;
  border-radius: 18px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  isolation: isolate;
  aspect-ratio: 16 / 9;
  text-decoration: none;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: url(${(p) => p.img}) center/cover no-repeat;
    transition: transform 0.35s ease;
    transform: scale(1.02);
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
        80% 60% at 50% 100%,
        rgba(0, 0, 0, 0.55),
        transparent 70%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.45) 100%);
    mix-blend-mode: multiply;
    opacity: 0.9;
    pointer-events: none;
  }

  transition: transform 0.18s ease, box-shadow 0.18s ease;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
  }
  &:hover::before {
    transform: scale(1.06);
  }
`;

const CatLabel = styled.span`
  position: absolute;
  inset-inline-start: 14px;
  inset-block-end: 12px;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  border-radius: 14px;
  color: #fff;
  font-weight: 800;
  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

const Dot = styled.i`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
`;

const CatHint = styled.span`
  position: absolute;
  inset-inline-end: 12px;
  inset-block-end: 12px;
  z-index: 2;
  color: #fff;
  opacity: 0.9;
  font-size: 12px;
  padding: 6px 8px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(0, 0, 0, 0.28);
  backdrop-filter: blur(6px);
`;

const Steps = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
`;

const Step = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 16px;
  padding: 14px;
`;

const K = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  font-weight: 800;
  display: grid;
  place-items: center;
  margin-bottom: 8px;
`;

const Cta = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 18px;
  padding: 18px;
  background: linear-gradient(
        120deg,
        ${({ theme }) => theme.colors.primary} 0%,
        ${({ theme }) => theme.colors.primaryHover} 100%
      )
      padding-box,
    ${({ theme }) => theme.colors.surface} border-box;
  color: #fff;
  display: grid;
  gap: 8px;
  @media (min-width: 720px) {
    grid-template-columns: 1fr auto;
    align-items: center;
  }
`;

const CtaBtn = styled(Link)`
  background: #fff;
  color: #111;
  text-decoration: none;
  padding: 10px 14px;
  border-radius: 12px;
  font-weight: 700;
  justify-self: start;
`;

import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import { byId, type Listing, pickLocale } from "../data/listings";
import { useTranslation } from "react-i18next";

export default function ListingDetail() {
  const { t, i18n } = useTranslation();
  const lang = (i18n.language as "en" | "ar") || "en";
  const { id } = useParams<{ id: string }>();

  const listing = (id && byId.get(id)) as Listing | undefined;

  if (!listing) {
    return (
      <Wrap>
        <Crumb>
          <Link to="/listings">{t("list.back", "Back to listings")}</Link>
        </Crumb>
        <Card>
          <P>{t("list.not_found", "Listing not found.")}</P>
        </Card>
      </Wrap>
    );
  }

  return (
    <Wrap>
      <Crumb>
        <Link to="/">{t("nav.home", "Home")}</Link> /{" "}
        <Link to={`/listings?type=${listing.type}`}>
          {listing.type === "pool"
            ? t("listings.pool", "Pool")
            : t("listings.camp", "Camp")}
        </Link>{" "}
        / <span>{pickLocale(listing.name, lang)}</span>
      </Crumb>

      <Cover img={listing.img} />

      <Head>
        <div>
          <Title>{pickLocale(listing.name, lang)}</Title>
          <Badges>
            <Badge>{pickLocale(listing.area, lang)}</Badge>
            <Badge>
              {listing.type === "pool"
                ? t("listings.pool", "Pool")
                : t("listings.camp", "Camp")}
            </Badge>
          </Badges>
        </div>
        <Price>{listing.price}</Price>
      </Head>

      <Grid>
        <Card>
          <H>{t("detail.about", "About this place")}</H>
          <P>
            {t(
              "detail.about_body",
              "Comfortable, private spot suitable for families. Clean facilities and clear house rules. Exact address is shared after confirmation."
            )}
          </P>

          <H style={{ marginTop: 14 }}>{t("detail.amenities", "Amenities")}</H>
          <List>
            <li>{t("detail.amenity.parking", "Private parking")}</li>
            <li>{t("detail.amenity.bbq", "BBQ area")}</li>
            <li>{t("detail.amenity.seating", "Outdoor seating")}</li>
            <li>{t("detail.amenity.bath", "Bathroom/changing room")}</li>
          </List>

          <H style={{ marginTop: 14 }}>{t("detail.rules", "Rules")}</H>
          <List>
            <li>{t("detail.rule.id", "ID may be required at check-in")}</li>
            <li>{t("detail.rule.guests", "Respect max guests and timing")}</li>
            <li>
              {t(
                "detail.rule.clean",
                "Keep the place clean; no glass by the pool"
              )}
            </li>
          </List>
        </Card>

        <Card>
          <H>{t("detail.book", "Request to book")}</H>
          <P style={{ marginBottom: 10 }}>
            {t(
              "detail.book_hint",
              "Select date and time. We’ll confirm availability fast."
            )}
          </P>
          <div style={{ display: "grid", gap: 10 }}>
            <input
              type="date"
              style={{
                border: "1px solid var(--border, rgba(0,0,0,.1))",
                borderRadius: 12,
                padding: "10px 12px",
              }}
              aria-label="Date"
            />
            <select
              style={{
                border: "1px solid var(--border, rgba(0,0,0,.1))",
                borderRadius: 12,
                padding: "10px 12px",
              }}
              aria-label="Time"
            >
              <option>{t("detail.slot.morning", "Morning")}</option>
              <option>{t("detail.slot.afternoon", "Afternoon")}</option>
              <option>{t("detail.slot.evening", "Evening")}</option>
            </select>
            <Button>{t("detail.request", "Send request")}</Button>
          </div>
          <P style={{ marginTop: 10, fontSize: 12, opacity: 0.75 }}>
            {t("detail.note", "No payment is taken now. Host confirms first.")}
          </P>
        </Card>
      </Grid>
    </Wrap>
  );
}

const Wrap = styled.section`
  display: grid;
  gap: 16px;
`;
const Crumb = styled.nav`
  font-size: 13px;
  opacity: 0.85;
`;
const Cover = styled.div<{ img: string }>`
  height: clamp(180px, 38vw, 360px);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 18px;
  overflow: hidden;
  background: url(${(p) => p.img}) center/cover no-repeat;
`;
const Head = styled.div`
  display: grid;
  gap: 8px;
  grid-template-columns: 1fr auto;
  align-items: end;
`;
const Title = styled.h1`
  margin: 0;
  font-size: clamp(20px, 3.6vw, 28px);
`;
const Badges = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  align-items: center;
`;
const Badge = styled.span`
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.bg};
  border-radius: 999px;
  padding: 6px 10px;
  font-size: 12px;
`;
const Price = styled.div`
  font-weight: 800;
  font-size: 18px;
`;
const Grid = styled.div`
  display: grid;
  gap: 14px;
  grid-template-columns: 1fr;
  @media (min-width: 900px) {
    grid-template-columns: 1fr 0.9fr;
  }
`;
const Card = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 16px;
  padding: 14px;
`;
const H = styled.h2`
  margin: 0 0 8px;
  font-size: 18px;
`;
const P = styled.p`
  margin: 0;
  opacity: 0.9;
  line-height: 1.7;
`;
const List = styled.ul`
  margin: 6px 0 0 1.2em;
  line-height: 1.9;
`;
const Button = styled.button`
  width: 100%;
  border: 0;
  cursor: pointer;
  font-weight: 700;
  border-radius: 12px;
  padding: 12px 14px;
  color: #fff;
  background: ${({ theme }) => theme.colors.primary};
  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
  }
`;

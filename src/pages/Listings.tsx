import { useMemo, useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { allListings, type Listing, type ListingType, pickLocale } from "../data/listings";

const Wrap = styled.section` display: grid; gap: 16px; `;
const Controls = styled.div`
  display: grid; gap: 10px;
  grid-template-columns: 1fr auto auto;
  @media (max-width: 720px){ grid-template-columns: 1fr; }
`;
const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px; padding: 10px 12px;
  background: ${({ theme }) => theme.colors.bg}; color: ${({ theme }) => theme.colors.text};
`;
const Select = styled.select`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px; padding: 10px 12px; background: ${({ theme }) => theme.colors.bg}; color: ${({ theme }) => theme.colors.text};
`;
const Grid = styled.div`
  display: grid; gap: 14px;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
`;
const Card = styled(Link)`
  display: block; text-decoration: none; color: inherit;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 16px; overflow: hidden; background: ${({ theme }) => theme.colors.surface};
  transition: transform .12s ease, box-shadow .12s ease;
  &:hover { transform: translateY(-2px); box-shadow: 0 8px 22px rgba(0,0,0,.10); }
`;
const Media = styled.div<{img:string}>` height: 150px; background: url(${p=>p.img}) center/cover no-repeat; `;
const Body = styled.div` padding: 12px; display: grid; gap: 6px; `;
const Name = styled.h3` margin: 0; font-size: 16px; `;
const Meta = styled.div` display: flex; gap: 8px; flex-wrap: wrap; font-size: 12px; opacity: .85; `;
const Badge = styled.span`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 999px; padding: 4px 8px; background: ${({ theme }) => theme.colors.bg};
`;
const Price = styled.span` font-weight: 800; color: ${({ theme }) => theme.colors.text}; `;
const Empty = styled.p` opacity: .7; `;

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

export default function Listings() {
  const { t, i18n } = useTranslation();
  const lang = (i18n.language as "en" | "ar") || "en";
  const q = useQuery();

  // initial state from URL if present
  const [term, setTerm] = useState(q.get("query") || "");
  const [type, setType] = useState<ListingType | "all">((q.get("type") as ListingType) || "all");
  const [sort, setSort] = useState<"relevant" | "low" | "high">("relevant");

  const areas = useMemo(
    () => Array.from(new Set(allListings.map(l => pickLocale(l.area, "en")))).sort(),
    []
  );

  const filtered = useMemo(() => {
    let list: Listing[] = allListings;

    if (type !== "all") list = list.filter(l => l.type === type);

    if (term.trim()) {
      const k = term.toLowerCase();
      list = list.filter(l =>
        pickLocale(l.name, lang).toLowerCase().includes(k) ||
        pickLocale(l.area, lang).toLowerCase().includes(k)
      );
    }

    if (sort !== "relevant") {
      const toNum = (p: string) => Number((p.match(/[\d.]+/) || ["0"])[0]);
      list = [...list].sort((a, b) => {
        const A = toNum(a.price), B = toNum(b.price);
        return sort === "low" ? A - B : B - A;
      });
    }

    return list;
  }, [term, type, sort, lang]);

  return (
    <Wrap>
      <h2>{t("listings.title", "Available spots")}</h2>

      <Controls>
        <Input
          placeholder={t("home.search_placeholder", "Search pools, camps, or areas")}
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          aria-label="Search"
        />
        <Select value={type} onChange={e => setType(e.target.value as any)} aria-label="Type">
          <option value="all">{t("home.categories", "Categories")}</option>
          <option value="pool">{t("listings.pool", "Pool")}</option>
          <option value="camp">{t("listings.camp", "Camp")}</option>
        </Select>
        <Select value={sort} onChange={e => setSort(e.target.value as any)} aria-label="Sort">
          <option value="relevant">{t("listings.sort.relevant", "Sort: Relevant")}</option>
          <option value="low">{t("listings.sort.low", "Price: Low to High")}</option>
          <option value="high">{t("listings.sort.high", "Price: High to Low")}</option>
        </Select>
      </Controls>

      {/* quick area chips */}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {areas.map(a => (
          <button
            key={a}
            onClick={() => setTerm(a)}
            style={{
              border: "1px solid var(--border, rgba(0,0,0,.1))",
              background: "transparent",
              padding: "6px 10px",
              borderRadius: 999,
              cursor: "pointer"
            }}
          >
            {pickLocale({ en: a, ar: a }, lang)}
          </button>
        ))}
      </div>

      {filtered.length === 0 && <Empty>{t("listings.empty", "No results. Try different filters.")}</Empty>}

      <Grid>
        {filtered.map((l) => (
          <Card to={`/listings?id=${l.id}`} key={l.id}>
            <Media img={l.img} />
            <Body>
              <Name>{pickLocale(l.name, lang)}</Name>
              <Meta>
                <Badge>{pickLocale(l.area, lang)}</Badge>
                <Price>{l.price}</Price>
              </Meta>
            </Body>
          </Card>
        ))}
      </Grid>
    </Wrap>
  );
}

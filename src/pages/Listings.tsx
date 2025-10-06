import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Card, Primary } from "../components/Card";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 16px;
`;

const ItemTitle = styled.h3` margin: 0 0 8px; `;

const mock = [
  { id: "p1", type: "pool", name: "Hidd Private Pool" },
  { id: "c1", type: "camp", name: "Sakhir Desert Camp" },
  { id: "p2", type: "pool", name: "Muharraq Family Pool" }
];

export default function Listings() {
  const { t } = useTranslation();
  return (
    <>
      <h2>{t("listings.title")}</h2>
      <Grid>
        {mock.map(m => (
          <Card key={m.id}>
            <ItemTitle>{m.name}</ItemTitle>
            <p style={{ opacity: .8 }}>
              {m.type === "pool" ? t("listings.pool") : t("listings.camp")}
            </p>
            <Primary style={{ marginTop: 8 }}>{/* later -> navigate */}{t("actions.book")}</Primary>
          </Card>
        ))}
      </Grid>
    </>
  );
}

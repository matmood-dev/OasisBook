import { useMemo, useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

type Faq = {
  id: string;
  q: string;
  a: string;
  cat: "booking" | "payments" | "hosting" | "account";
};

export default function FAQ() {
  const { t } = useTranslation();
  const [term, setTerm] = useState("");
  const [cat, setCat] = useState<"all" | Faq["cat"]>("all");

  const data: Faq[] = [
    {
      id: "f1",
      cat: "booking",
      q: t("faq.q1", "How do I book a pool or camp?"),
      a: t(
        "faq.a1",
        "Open the listing, select your date and time, and send a booking request. You’ll get a confirmation by SMS or email."
      ),
    },
    {
      id: "f2",
      cat: "payments",
      q: t("faq.q2", "How are prices set?"),
      a: t(
        "faq.a2",
        "Hosts set their own prices. Some listings add cleaning or service fees, shown before you submit."
      ),
    },
    {
      id: "f3",
      cat: "booking",
      q: t("faq.q3", "Can I cancel or reschedule?"),
      a: t(
        "faq.a3",
        "Each listing has its own policy. Check the policy on the listing page before booking."
      ),
    },
    {
      id: "f4",
      cat: "account",
      q: t("faq.q4", "Do I need an account to book?"),
      a: t(
        "faq.a4",
        "Yes. Creating an account lets you track requests, messages, and receipts."
      ),
    },
    {
      id: "f5",
      cat: "hosting",
      q: t("faq.q5", "I want to list my pool or camp."),
      a: t(
        "faq.a5",
        "Go to “Become a host”, add photos, rules, and pricing, then publish. We review new listings quickly."
      ),
    },
    {
      id: "f6",
      cat: "payments",
      q: t("faq.q6", "What payment methods are supported?"),
      a: t(
        "faq.a6",
        "We support common local methods and cards. Some hosts accept cash on confirmation."
      ),
    },
    {
      id: "f7",
      cat: "booking",
      q: t("faq.q7", "Is there customer support?"),
      a: t(
        "faq.a7",
        "Yes. Contact us via WhatsApp or the contact form for urgent issues."
      ),
    },
  ];

  const filtered = useMemo(() => {
    let list = data;
    if (cat !== "all") list = list.filter((i) => i.cat === cat);
    const k = term.trim().toLowerCase();
    if (k)
      list = list.filter(
        (i) => i.q.toLowerCase().includes(k) || i.a.toLowerCase().includes(k)
      );
    return list;
  }, [data, term, cat]);

  return (
    <Wrap>
      <Hero>
        <Title>{t("faq.title", "FAQ")}</Title>
        <Sub>
          {t(
            "faq.subtitle",
            "Common questions about booking, payments, and hosting."
          )}
        </Sub>
      </Hero>

      <Controls>
        <Input
          placeholder={t("faq.search", "Search questions")}
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          aria-label="Search FAQ"
        />
        <Select
          value={cat}
          onChange={(e) => setCat(e.target.value as any)}
          aria-label="Category"
        >
          <option value="all">{t("faq.all", "All categories")}</option>
          <option value="booking">{t("faq.booking", "Booking")}</option>
          <option value="payments">{t("faq.payments", "Payments")}</option>
          <option value="hosting">{t("faq.hosting", "Hosting")}</option>
          <option value="account">{t("faq.account", "Account")}</option>
        </Select>
      </Controls>

      <List>
        {filtered.map((item) => (
          <Item key={item.id} open={false}>
            <Q>
              <span>{item.q}</span>
              <Badge>{t(`faq.${item.cat}`, item.cat)}</Badge>
            </Q>
            <A>{item.a}</A>
          </Item>
        ))}
      </List>
    </Wrap>
  );
}

const Wrap = styled.section`
  display: grid;
  gap: 18px;
`;
const Hero = styled.header`
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 20px;
  padding: 20px;
`;
const Title = styled.h1`
  margin: 0 0 6px;
  font-size: clamp(22px, 4vw, 32px);
`;
const Sub = styled.p`
  margin: 0;
  opacity: 0.85;
`;

const Controls = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr auto;
  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;
const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  padding: 10px 12px;
  background: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.text};
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    outline: none;
  }
`;
const Select = styled.select`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  padding: 10px 12px;
  background: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.text};
`;

const List = styled.div`
  display: grid;
  gap: 10px;
`;
const Item = styled.details`
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 14px;
  padding: 12px;
  &[open] {
    box-shadow: 0 8px 22px rgba(0, 0, 0, 0.08);
  }
`;
const Q = styled.summary`
  list-style: none;
  cursor: pointer;
  user-select: none;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  &::-webkit-details-marker {
    display: none;
  }
`;
const A = styled.div`
  margin-top: 10px;
  opacity: 0.92;
  line-height: 1.7;
`;
const Badge = styled.span`
  font-size: 12px;
  opacity: 0.8;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.bg};
  border-radius: 999px;
  padding: 4px 8px;
`;

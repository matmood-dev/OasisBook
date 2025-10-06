import styled from "styled-components";
import { useLocale } from "../providers/LocaleProvider";

const Btn = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  padding: 8px 12px; border-radius: 10px; cursor: pointer;
`;

export default function LanguageToggle() {
  const { lang, setLang } = useLocale();
  const next = lang === "en" ? "ar" : "en";
  return <Btn onClick={() => setLang(next)}>{lang.toUpperCase()}</Btn>;
}

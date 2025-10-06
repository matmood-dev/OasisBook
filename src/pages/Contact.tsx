import { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 700);
    console.log("contact:", Object.fromEntries(fd.entries()));
    e.currentTarget.reset();
  };

  return (
    <Wrap>
      <Hero>
        <HeroAccent />
        <HeroInner>
          <Title>{t("contact.title", "Contact us")}</Title>
          <Sub>
            {t(
              "contact.subtitle",
              "Questions, feedback, or partnership ideas? Send a message."
            )}
          </Sub>
        </HeroInner>
      </Hero>

      {sent && (
        <Banner role="status">
          <CheckIcon />
          <div>{t("contact.sent", "Thanks. Your message was sent.")}</div>
        </Banner>
      )}

      <Grid>
        <Card>
          <Form onSubmit={onSubmit}>
            <Row>
              <Field>
                <Label htmlFor="name">{t("contact.name", "Full name")}</Label>
                <InputWrap>
                  <UserIcon />
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="John Doe"
                  />
                </InputWrap>
              </Field>

              <Field>
                <Label htmlFor="phone">{t("contact.phone", "Phone")}</Label>
                <InputWrap>
                  <PhoneIcon />
                  <Input
                    id="phone"
                    name="phone"
                    inputMode="tel"
                    placeholder="+973…"
                  />
                </InputWrap>
              </Field>
            </Row>

            <Row>
              <Field>
                <Label htmlFor="email">{t("contact.email", "Email")}</Label>
                <InputWrap>
                  <MailIcon />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@email.com"
                  />
                </InputWrap>
              </Field>

              <Field>
                <Label htmlFor="subject">
                  {t("contact.subject", "Subject")}
                </Label>
                <InputWrap>
                  <TagIcon />
                  <Input
                    id="subject"
                    name="subject"
                    placeholder={t("contact.subject", "Subject")}
                  />
                </InputWrap>
              </Field>
            </Row>

            <Field>
              <Label htmlFor="message">{t("contact.message", "Message")}</Label>
              <TextWrap>
                <MessageIcon />
                <Textarea
                  id="message"
                  name="message"
                  required
                  placeholder={t("contact.message", "Message")}
                />
              </TextWrap>
              <Hint>
                {t(
                  "contact.response_hint",
                  "We typically reply within 24 hours."
                )}
              </Hint>
            </Field>

            <Button type="submit" disabled={loading}>
              {loading
                ? t("contact.sending", "Sending…")
                : t("contact.send", "Send message")}
            </Button>
          </Form>
        </Card>

        <Side>
          <Tile href="mailto:hello@oasisbook.app">
            <TileIcon>
              <MailIcon />
            </TileIcon>
            <div>
              <strong>{t("contact.email_label", "Email")}</strong>
            </div>
          </Tile>
          <Tile
            href="https://wa.me/97300000000"
            target="_blank"
            rel="noreferrer"
          >
            <TileIcon>
              <WhatsIcon />
            </TileIcon>
            <div>
              <strong>{t("contact.whatsapp", "WhatsApp")}</strong>
            </div>
          </Tile>
          <Tile
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
          >
            <TileIcon>
              <InstaIcon />
            </TileIcon>
            <div>
              <strong>{t("contact.instagram", "Instagram")}</strong>
            </div>
          </Tile>
          <Tile as="a" href="/faq">
            <TileIcon>
              <HelpIcon />
            </TileIcon>
            <div>
              <strong>{t("contact.faq", "FAQ")}</strong>
            </div>
          </Tile>
        </Side>
      </Grid>
    </Wrap>
  );
}

const Wrap = styled.section`
  display: grid;
  gap: 18px;
`;

const Hero = styled.header`
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
`;
const HeroAccent = styled.div`
  position: absolute;
  inset: -40% -10% auto -10%;
  height: 140px;
  background: radial-gradient(
      70% 80% at 20% 50%,
      rgba(0, 0, 0, 0.06),
      transparent 70%
    ),
    linear-gradient(
      120deg,
      ${({ theme }) => theme.colors.primary},
      ${({ theme }) => theme.colors.primaryHover}
    );
  opacity: 0.1;
  pointer-events: none;
`;
const HeroInner = styled.div`
  position: relative;
  padding: 22px;
`;
const Title = styled.h1`
  margin: 0 0 6px;
  font-size: clamp(22px, 4vw, 32px);
`;
const Sub = styled.p`
  margin: 0;
  opacity: 0.85;
`;

const Banner = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 10px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 14px;
  padding: 10px 12px;
`;

const Grid = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr;
  @media (min-width: 900px) {
    grid-template-columns: 1.2fr 0.8fr;
  }
`;

const Card = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 16px;
  padding: 16px;
`;

const Side = styled.div`
  display: grid;
  gap: 10px;
`;

const Form = styled.form`
  display: grid;
  gap: 12px;
`;
const Row = styled.div`
  display: grid;
  gap: 12px;
  grid-template-columns: 1fr;
  @media (min-width: 560px) {
    grid-template-columns: 1fr 1fr;
  }
`;
const Field = styled.div`
  display: grid;
  gap: 6px;
`;
const Label = styled.label`
  font-size: 13px;
  opacity: 0.9;
`;

const InputWrap = styled.div`
  display: grid;
  grid-template-columns: 36px 1fr;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.bg};
  border-radius: 12px;
  overflow: hidden;
  &:focus-within {
    border-color: ${({ theme }) => theme.colors.primary};
  }
  svg {
    width: 18px;
    height: 18px;
    stroke: ${({ theme }) => theme.colors.text};
    opacity: 0.9;
    justify-self: center;
  }
`;
const TextWrap = styled(InputWrap)`
  grid-template-columns: 36px 1fr;
  align-items: start;
`;

const Input = styled.input`
  border: 0;
  outline: 0;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  padding: 10px 12px;
`;
const Textarea = styled.textarea`
  border: 0;
  outline: 0;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  padding: 10px 12px;
  min-height: 120px;
  resize: vertical;
`;

const Button = styled.button`
  justify-self: start;
  border: none;
  cursor: pointer;
  font-weight: 700;
  border-radius: 12px;
  padding: 10px 14px;
  color: #fff;
  background: ${({ theme }) => theme.colors.primary};
  transition: transform 0.1s ease;
  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
    transform: translateY(-1px);
  }
  &:disabled {
    opacity: 0.7;
    cursor: default;
    transform: none;
  }
`;
const Hint = styled.p`
  margin: 0;
  font-size: 12px;
  opacity: 0.75;
`;

const Tile = styled.a`
  display: grid;
  grid-template-columns: 38px 1fr;
  gap: 10px;
  align-items: center;
  color: inherit;
  text-decoration: none;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 14px;
  padding: 12px;
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;
const TileIcon = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 10px;
  display: grid;
  place-items: center;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.bg};
  svg {
    width: 18px;
    height: 18px;
    stroke: ${({ theme }) => theme.colors.text};
  }
`;

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M4 12.5l5 5 11-11"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8" r="3.5" strokeWidth="1.6" />
      <path
        d="M4.5 19.5c1.6-3.2 5-5 7.5-5s5.9 1.8 7.5 5"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M6 3h4l1 4-2 1a11 11 0 0 0 7 7l1-2 4 1v4a2 2 0 0 1-2 2 16 16 0 0 1-16-16 2 2 0 0 1 2-2Z"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth="1.6" />
      <path
        d="M4 7l8 6 8-6"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function TagIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M20 13l-7 7-9-9V4h7l9 9Z"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="7.5" cy="7.5" r="1.2" />
    </svg>
  );
}
function MessageIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M6 18l-2.5 3L6 20h10a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v5"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8.5 9.5h7M8.5 12h5" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function WhatsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M7 19l-1.5 3 3-1.5"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="11" r="7" strokeWidth="1.5" />
      <path
        d="M9.5 9.5c.6 1.7 2.3 3.4 4 4l1-.9c.3-.2.7-.2 1 0l1.1.6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function InstaIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="5" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="3.5" strokeWidth="1.5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function HelpIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" strokeWidth="1.6" />
      <path
        d="M9.8 9.2a2.2 2.2 0 1 1 3.6 1.8c-.8.6-1.4 1.2-1.4 2.2v.4"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="12" cy="17" r="1" />
    </svg>
  );
}

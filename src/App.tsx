import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import styled from "styled-components";

const Page = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1; /* pushes footer down */
`;

const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 24px 20px 64px;
`;

export default function App() {
  const element = useRoutes(routes);
  return (
    <Page>
      <Navbar />
      <Main>
        <Container>{element}</Container>
      </Main>
      <Footer />
    </Page>
  );
}

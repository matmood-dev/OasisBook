import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
import Navbar from "./components/Navbar";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 24px 20px 64px;
`;

export default function App() {
  const element = useRoutes(routes);
  return (
    <>
      <Navbar />
      <Container>{element}</Container>
    </>
  );
}

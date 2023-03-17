import Header from "./components/Header";
import Card from "./components/Card";
import { Container } from "./components/styles/Container.styled";
import Footer from "./components/Footer";
import { ThemeProvider } from "styled-components";
import GlobalSyles from "./components/styles/Global";
import content from "./content";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  mobile: "768px",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalSyles></GlobalSyles>
        <Header />
        <Container>
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;

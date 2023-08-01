import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Container from "./components/styles/Container.styled";
import GlobalStyles from "./components/styles/Global";
import content from "./components/styles/content";
import Card from "./components/Card";
import Footer from "./components/Footer";
function App() {
  const theme={
    colors:{
      header:"#ebfbff",
      body:"#fff",
      footer:"#003333"
    },
    mobile:"768px"
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Header/>
      <Container className="container">
       {content.map((item,i)=>(
        <Card key={i} item={item}/>
       ))}
      </Container>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;

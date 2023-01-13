import "./App.css";
import Footer from "./Components/Partials/Footer";
import Header from "./Components/Partials/Header";
import Router from "./Components/App/Router/Router";
import { GlobalStyles } from "./Styles/Global";
import { Main } from "./Styles/Main";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Main>
        <Router />
      </Main>
      <Footer />
    </>
  );
}

export default App;

import './App.css';
import Footer from './Components/App/Partials/Footer';
import Header from './Components/App/Partials/Header';
import Router from './Components/App/Router/Router';
import { GlobalStyles } from './Styles/Global';

function App() {
  return (
    <>
    <Header />
    <GlobalStyles />
    <Router />
    <Footer />
    </>
  );
}

export default App;

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/nav-bar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GeneralComponent from "./components/general-component";
import Home from "./components/home";
import Footer from "./components/footer";
import searchFromIdAPI from "./data/search-from-id-API";
import DetailPage from "./components/detail-page";

// puoi navigare nelle pagine senza problemi e per tornare alla home ti bastera cliccare sull'apposito bottone della posto sulla navbar

// NB. per effettuare una ricerca per città ricordati di premere con il mouse su cerca

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <header>
            <NavbarComponent />
          </header>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:search" element={<GeneralComponent />} />
              <Route path="/detail/:city" element={<DetailPage />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

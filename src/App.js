import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/nav-bar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GeneralComponent from "./components/general-component";
import Home from "./components/home";
import Footer from "./components/footer";

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
            </Routes>
          </main>
        </div>
          <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

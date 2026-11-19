import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import Food from "./components/Food";
import Gmail from "./components/Gmail";
import Places from "./components/Places";
import Price from "./components/Price";

function App() {
  return (
    <BrowserRouter>
      <div className="home-page">
        {/* Navigaatiot */}
        <nav className="navbar">
          <ul className="nav-links">
            <li>
              <Link to="/">Etusivu</Link>
            </li>

            <li>
              <Link to="/hinnat">Hinta ja maksutavat</Link>
            </li>

            <li>
              <Link to="/ruoka">Valmistus ja ainesosat</Link>
            </li>

            <li>
              <Link to="/paikat">Myyntipaikat</Link>
            </li>

            <li>
              <Link to="/gmail">Yhteystiedot</Link>
            </li>
          </ul>
        </nav>

        {/* Etusivu */}
        <Routes>
          <Route
            path="/"
            element={
              <section className="hero" id="home">
                <h1>Thai kevätkääryleet</h1>
              </section>
            }
          />

          <Route path="/ruoka" element={<Food />} />
          <Route path="/hinnat" element={<Price />} />
          <Route path="/paikat" element={<Places />} />
          <Route path="/gmail" element={<Gmail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";

import Testimonials from "./components/testimonials/Testimonials";
import Contacts from "./components/contacts/Contacts";
import "./app.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />

        <Testimonials />
        <Contacts />
      </div>
    </div>
  );
}

export default App;

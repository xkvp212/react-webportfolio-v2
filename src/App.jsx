import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import "./app.scss";
import Menu from "./components/menu/Menu";
import { FormspreeProvider } from "@formspree/react";

import { useState } from "react";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <About />
        <Works />
        <FormspreeProvider project="1711037947509210340">
          <Contact />
        </FormspreeProvider>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";
import Start from "./components/Start";
import HeaderRedux from "./components/HeaderRedux";
import SearchBar from "./components/SearchBar";
import Characters from "./components/Characters";
import About from "./components/About";
import Hufvudstaden from "./components/Hufvudstaden";
import Slottsskogen from "./components/Slottsskogen";
import Donso from "./components/Donso";
import Hisingen from "./components/Hisingen";

function App() {
  const HOME = "Start",
    HUFVUDSTADEN = "Hufvudstaden",
    SLOTTSSKOGEN = "Slottsskogen",
    DONSO = "Donso",
    HISINGEN = "Hisingen",
    CHARACTERS = "Characters",
    ABOUT = "About";

  const [currentScreen, setCurrentScreen] = useState(HOME);

  let content = null;
  switch (currentScreen) {
    case HOME:
      content = <Start />;
      break;
    case HUFVUDSTADEN:
      content = <Hufvudstaden />;
      break;
    case SLOTTSSKOGEN:
      content = <Slottsskogen />;
      break;
    case DONSO:
      content = <Donso />;
      break;
    case HISINGEN:
      content = <Hisingen />;
      break;
    case CHARACTERS:
      content = <Characters />;
      break;
    case ABOUT:
      content = <About />;
      break;
    default:
      content = <Start />;
  }

  return (
    <div className="App">
      <header>
        <HeaderRedux setScreenFromHeader={setCurrentScreen} />
      </header>
      <main>{content}</main>
    </div>
  );
}

export default App;

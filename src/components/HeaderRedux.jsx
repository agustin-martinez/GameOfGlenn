import React from "react";
import logo from "../components/assets/logo.svg";
import "../App.css";
import { splitOnSpecialChars } from "../utils/helpers";

function renderGotText(text, specialChars) {
  const chunks = splitOnSpecialChars(text, specialChars);
    return chunks.map((item, idx) => (
      <span
        className={item.isSpecialChars ? "swe-chars" : "eng-chars"}
        key={idx}
      >
        {item.chunk}
      </span>
    ));
}

const HeaderRedux = ({ setScreenFromHeader }) => {
  return (
    <div>
      <div className="Logo-Background">
        {" "}
        <img
          className="Logo-Pic"
          onClick={() => setScreenFromHeader("Home")}
          src={logo}
          alt="GAME OF GLENN"
        ></img>
      </div>
      <header>
        <ul className="Tree-Options">
          <li className="dropdown">
            <div className="menu-main-btn">
              {renderGotText("VÄRLDAR", ["Ö", "Ä", "Ö"])}
            </div>
            <div className="dropdown-content">
              <div onClick={() => setScreenFromHeader("Hufvudstaden")}>
                HUFVUDSTADEN
              </div>
              <div onClick={() => setScreenFromHeader("Slottsskogen")}>
                SLOTTSSKOGEN
              </div>
              <div onClick={() => setScreenFromHeader("Donso")}>DONSÖ</div>
              <div onClick={() => setScreenFromHeader("Hisingen")}>
                HISINGEN
              </div>
            </div>
          </li>
          <li>
            <div
              className="menu-main-btn"
              onClick={() => setScreenFromHeader("Characters")}
            >
              {renderGotText("KARAKTÄRER", ["Å", "Ä", "Ö"])}
            </div>
          </li>
          <li>
            <div
              className="menu-main-btn"
              onClick={() => setScreenFromHeader("About")}
            >
              {renderGotText("OM GOG", ["Å", "Ä", "Ö"])}
            </div>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default HeaderRedux;

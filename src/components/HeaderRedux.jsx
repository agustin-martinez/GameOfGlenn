import React from "react";
import logo from "../components/assets/logo.svg";
import "../App.css";


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
            <div className="Button-worlds">VÄRLDAR</div>
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
              className="Button-characters"
              onClick={() => setScreenFromHeader("Characters")}
            >
              KARAKTÄRER
            </div>
          </li>
          <li>
            <div
              className="Button-aboutGOG"
              onClick={() => setScreenFromHeader("About")}
            >
              OM GOG
            </div>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default HeaderRedux;

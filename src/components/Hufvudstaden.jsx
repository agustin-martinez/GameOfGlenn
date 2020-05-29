import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "../App.css";
import "../popup.css";
import "../form.css";

const Hufvudstaden = () => {
  const charactersData = useSelector((state) => state.characters);
  const [fromHufvudstaden, setFromHufvudstaden] = useState([]);

  useEffect(() => {
    const results = charactersData.filter((item) =>
      item.world.includes("Hufvudstaden")
    );
    setFromHufvudstaden(results);
  }, [charactersData]);

  const outputCharacters = fromHufvudstaden.map((charItem) => (
    <div className="character-item" key={charItem.id}>
      <div className="card-content">
        <div className="name-box">
          <div className="name"> {charItem.name} </div>
        </div>
        <div className="world">
          <div className="world-text">
            {" "}
            <span className="world-backs-card-col">VÄRLD: </span>
            {charItem.world}{" "}
          </div>
          <div className="world-pic"> {charItem.pic} </div>
        </div>
        <div className="backstory">
          {" "}
          <span className="world-backs-card-col">BACKSTORY: </span>
          {charItem.backstory}{" "}
        </div>
        <div className="iq">INTELLIGENS:</div>

        <input
          readOnly
          type="range"
          max="10"
          value={charItem.intelligence}
        ></input>

        <div className="power"> STYRKA: </div>
        <input readOnly type="range" max="10" value={charItem.strength}></input>
        <div className="id"> ID: {charItem.id} </div>
      </div>
    </div>
  ));

  return (

    <div className="border">
    <h1 className="Capital-Name">Hufvudstaden</h1>
    <div className="Capital-Pic"></div>
  <p className="Capital-Text">
Hufvudstaden, världsmetropolen som är belägen i centrum av världen.
    Glenn den 10:e, kungen av land och rike bor i slottet här. Här kan du
    alltid hitta köpare, säljare, vandrarhem eller barer. Allt helt enkelt.
    Vanligt förekommande är att alla heter Glenn här. Beskrivs ofta av
    utomstående som en stökig stad med oväsen, påhitt och att
    hufvudstadsborna tror sig vara över alla andra.
  </p>
    <div className="container">
      <div className="persons">{outputCharacters}</div>
    </div>

  </div>

  );
};

export default Hufvudstaden;

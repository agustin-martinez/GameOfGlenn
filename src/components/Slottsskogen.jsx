import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Slottsskogen = () => {
  const charactersData = useSelector((state) => state.characters);
  const [fromSlottsskogen, setfromSlottsskogen] = useState([]);

  useEffect(() => {
    const results = charactersData.filter((item) =>
      item.world.includes("Slottsskogen")
    );
    setfromSlottsskogen(results);
  }, [charactersData]);

  const outputCharacters = fromSlottsskogen.map((charItem) => (
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

    <div className="Capital-Box">
      <h1 className="Capital-Name">Slottsskogen</h1>
      <div className="Capital-Pic"></div>
      <p className="Capital-Text">
  Den stora uppslukande skogen öster om Hufvudstaden, där det är svårt att skilja på dag och natt då delar av skogen har träd som når sällan kådade höjder,
 och snårighet som omintetgör alla möjligheter att återse solens sken. 
 Slottsskogsbon är en finurlig varelse som älskar det social och har lätt till skratt. 
 Visdomen från de äldre går inte att hitta i någon annan del av världen.
      </p>
      {/* <h2 className="Capital-Characters-Titel">Karaktärer som är här</h2> */}
      <div className="container">
        <div className="persons">{outputCharacters}</div>
      </div>
    </div>

  );
};

export default Slottsskogen;

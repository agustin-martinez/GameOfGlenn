import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import '../popup.css';
import '../form.css';

const Hisingen = () => {
    const charactersData = useSelector(state => state.characters)
	const [fromHisingen, setFromHisingen] = useState([])

    useEffect(() => {
        const results = charactersData.filter(item =>
        item.world.includes('Hisingen')
        );
        setFromHisingen(results);
    }, [charactersData]);

    const outputCharacters = fromHisingen.map(charItem => (
      <div className="character-item" key={charItem.name}>
      <div className="card-content">
          <div className="name-box">
              <div className="name"> {charItem.name} </div>
          </div>
          <div className="world">
              <div className="world-text"> VÄRLD: {charItem.world} </div>
              <div className="world-pic"> {charItem.pic} </div>
          </div>
          <div className="backstory"> BACKSTORY: {charItem.backstory} </div>
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
        
    ))

    return (
        
		<div className="gris">
			<h1 className="h1">
				Hisingen
			</h1>
			<div>
				<img src="Hisingen.svg" alt="Karta över Hisingen">
				</img>
			</div>
			<p className="p1">
			Ön som är belägen väster om fastlandet, ett relativt lugnt hav måste korsas för att nå dit.
            Ön beskrivs nästan alltid och speciellt från hufvudstadsbor att de inte tillhör denna värld, ett utryck som delvis funnits i alla tider men också mycket på grund av kriminalitetens fäste där ute. 
            Ön består av mycket åkrar och en del skog, ön är även uppdelad i många små mörka samhällen. 
            En varelse ska sällan eller aldrig färdas ensam när under sin vistelse här. 
            Hisingsborna är luriga varelser med ett listigt sinne och förmåga att förföra den mest erfarne. 
			</p>
			<h2 className="h2">
			Karaktärer som är här
			</h2>
			<div className="container">
            <div className="persons">{outputCharacters}</div>
            </div>
		</div>
        
        
    )
}

export default Hisingen;

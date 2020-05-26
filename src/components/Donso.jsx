import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const Donso = () => {
    const charactersData = useSelector(state => state.characters)
	const [fromDonso, setFromDonso] = useState([])

    useEffect(() => {
        const results = charactersData.filter(item =>
        item.world.includes('Donsö')
        );
        setFromDonso(results);
    }, [charactersData]);

    const outputCharacters = fromDonso.map(charItem => (
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
        <div className="border">
			<div>
				<h1 className="h1">
					Donso
				</h1>
				<div>
					<img src="Donso.svg" alt="Karta över Donso">
					</img>
				</div>
				<p className="p1">
				Ön söder om hufvudstaden, du måste korsa det stormiga havet för att nå dit. 
                Ön beskrivs ofta av utbölingar som kal, blåsig och ogästvänlig. 
                Medan öborna själva beskriver ön som livets gåva till denna värld. 
                Donsö bebos av stora släkter som under många generationer styrt och härjat i den södra ö-världen. 
                Donsöbon är härskare över hav och skärgård. 
                Skaldjur, seglats och styrka är mottot som du måste behärska för att kunna överleva här.
				</p>
				<h2 className="h2">
				Karaktärer som är här
				</h2>
				<div className="container">
            <div className="persons">{outputCharacters}</div>
            </div>
			</div>
        </div>
    )
}

export default Donso;

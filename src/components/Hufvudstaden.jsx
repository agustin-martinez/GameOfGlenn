import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const Hufvudstaden = () => {
    const charactersData = useSelector(state => state.characters)
    const [fromHufvudstaden, setFromHufvudstaden] = useState([])

    useEffect(() => {
        const results = charactersData.filter(item =>
        item.world.includes('Hufvudstaden')
        );
        setFromHufvudstaden(results);
    }, [charactersData]);

    const outputCharacters = fromHufvudstaden.map(charItem => (
        <div className="character-item" key={charItem.name}>
<<<<<<< HEAD
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
        
=======
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
>>>>>>> dev
    ))

    return (
        <div className="border">
            <div>
                
                <h1 className="h1">Hufvudstaden</h1>
                <div>
                    <img src="Hufvudstaden.svg" alt="Karta över Hufvudstaden"></img>
                </div>
                <p className="p1">
                    Hufvudstaden, världsmetropolen som är belägen i centrum av världen. 
                    Glenn den 10:e, kungen av land och rike bor i slottet här. 
                    Här kan du alltid hitta köpare, säljare, vandrarhem eller barer. Allt helt enkelt. 
                    Vanligt förekommande är att alla heter Glenn här. 
                    Beskrivs ofta av utomstående som en stökig stad med oväsen, påhitt och att hufvudstadsborna tror sig vara över alla andra. </p>
                    
                    <h2 className="h2">Karaktärer som är här</h2>
                
                    <div className="container">
                    <div className="persons">{outputCharacters}
                    </div>
            </div>
            </div>
                
        </div>
        
    )
    
}

export default Hufvudstaden;
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const Slottsskogen = () => {
    const charactersData = useSelector(state => state.characters)
    const [fromSlottskogen, setfromSlottskogen] = useState([])

    useEffect(() => {
        const results = charactersData.filter(item =>
        item.world.includes('Slottskogen')
        );
        setfromSlottskogen(results);
    }, [charactersData]);


    const outputCharacters = fromSlottskogen.map(charItem => (
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
>>>>>>> dev
        </div>
      </div>
    ))

    return (
    <div className="border">
         <div>
            <h1 className="h1">Slottsskogen</h1>
            <div>
            <img src="Slottsskogen.svg" alt="Karta över Slottsskogen"></img>
            </div>
                <p className="p1">
                    Den stora uppslukande skogen öster om Hufvudstaden, 
                    där det är svårt att skilja på dag och natt då delar av skogen har träd som når sällan kådade höjder, och snårighet som omintetgör alla möjligheter att återse solens sken. 
                    Slottsskogsbon är en finurlig varelse som älskar det social och har lätt till skratt. 
                    Visdomen från de äldre går inte att hitta i någon annan del av världen.</p>
                <h2 className="h2">Karaktärer som är här</h2>
                <div className="container">
            <div className="persons">{outputCharacters}</div>
            </div>
            </div>
    </div>
    )
}

export default Slottsskogen;

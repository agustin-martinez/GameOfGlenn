import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const Hufvudstaden = () => {
    const charactersData = useSelector(state => state.characters)
    const [fromHufvudstaden, setFromHufvudstaden] = useState([])

    useEffect(() => {
        const results = charactersData.filter(item =>
        item.character.world.includes('Hufvudstaden')
        );
        setFromHufvudstaden(results);
    }, [charactersData]);

    const outputCharacters = fromHufvudstaden.map(charItem => (
        <div className="Characters" key={charItem.character.name}>
            <div> NAME: {charItem.character.name} </div>
            <div> WORLD {charItem.character.world} </div>
            <div> INTELLIGENCE: {charItem.character.intelligence} </div>
            <div> STRENGHT: {charItem.character.strength} </div>
            <div> BACKSTORY: {charItem.character.backstory} </div>
            {/* <button  onClick={() => deleteCharacter(charactersItem)}>Delete</button> */}
        </div>
    ))

    return (
        <div className="border">
            <div>
                
                <h1 className="h1">Hufvudstaden</h1>
                <div>
                    <img src="Hufvudstaden.svg" alt="Karta över Hufvudstaden"></img>
                </div>
                <p className="p1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, est quae. Fuga reprehenderit facere, sint quis laborum consequuntur atque aperiam vel quaerat eos, quas itaque eius. Delectus consectetur dolore suscipit eligendi quidem quibusdam porro nulla voluptate quaerat reprehenderit consequuntur sit, pariatur voluptatem necessitatibus rem provident vel tenetur impedit vitae libero a repudiandae culpa. Eius eaque velit ad dolorum. Ab distinctio et commodi obcaecati totam amet nesciunt accusamus quia itaque, officia neque pariatur, dolore suscipit unde eum quas. Alias, ad a? Voluptatibus qui architecto adipisci nulla inventore eius, earum delectus at. Est exercitationem blanditiis iusto unde quia, a accusamus id repellendus?</p>
                
                    <h2 className="h2">Karaktärer som är här</h2>
                
                <div>
                {outputCharacters}
                </div>
            </div>
                
        </div>
        
    )
    
       
}

export default Hufvudstaden;
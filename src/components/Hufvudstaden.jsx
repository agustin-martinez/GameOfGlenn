import React from 'react';
import { useSelector } from 'react-redux';

const Hufvudstaden = () => {
    const charactersData = useSelector(state => state.characters)

    const outputCharacters = charactersData.map(charItem => (
        <div className="Characters" key={charItem.character.name}>
            <div> NAME: {charItem.character.name} </div>
            <div> WORLD {charItem.character.world} </div>
            <div> STRENGHT: {charItem.strength} </div>
            {/* <button  onClick={() => deleteCharacter(charactersItem)}>Delete</button> */}
        </div>
    ))

    return (
        <div className="border">
            <div>
                
                <h1 class="h1">Hufvudstaden</h1>
                <div>
                    <img src="Hufvudstaden.svg" alt="Karta över Hufvudstaden"></img>
                </div>
                <p class="p1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, est quae. Fuga reprehenderit facere, sint quis laborum consequuntur atque aperiam vel quaerat eos, quas itaque eius. Delectus consectetur dolore suscipit eligendi quidem quibusdam porro nulla voluptate quaerat reprehenderit consequuntur sit, pariatur voluptatem necessitatibus rem provident vel tenetur impedit vitae libero a repudiandae culpa. Eius eaque velit ad dolorum. Ab distinctio et commodi obcaecati totam amet nesciunt accusamus quia itaque, officia neque pariatur, dolore suscipit unde eum quas. Alias, ad a? Voluptatibus qui architecto adipisci nulla inventore eius, earum delectus at. Est exercitationem blanditiis iusto unde quia, a accusamus id repellendus?</p>
                
                    <h2 class="h2">Karaktärer som är här</h2>
                
                <div>
                   
                </div>
            </div>
                
        </div>
        
    )
    
       
}

export default Hufvudstaden;
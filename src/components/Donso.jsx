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
        <div className="Characters" key={charItem.name}>
            <div> NAME: {charItem.name} </div>
            <div> WORLD {charItem.world} </div>
            <div> INTELLIGENCE: {charItem.intelligence} </div>
            <div> STRENGHT: {charItem.strength} </div>
            <div> BACKSTORY: {charItem.backstory} </div>
            <div> ID: {charItem.id} </div>
            {/* <button  onClick={() => deleteCharacter(charactersItem)}>Delete</button> */}
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
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, est quae. Fuga reprehenderit facere, sint quis laborum consequuntur atque aperiam vel quaerat eos, quas itaque eius. Delectus consectetur dolore suscipit eligendi quidem quibusdam porro nulla voluptate quaerat reprehenderit consequuntur sit, pariatur voluptatem necessitatibus rem provident vel tenetur impedit vitae libero a repudiandae culpa. Eius eaque velit ad dolorum. Ab distinctio et commodi obcaecati totam amet nesciunt accusamus quia itaque, officia neque pariatur, dolore suscipit unde eum quas. Alias, ad a? Voluptatibus qui architecto adipisci nulla inventore eius, earum delectus at. Est exercitationem blanditiis iusto unde quia, a accusamus id repellendus?
				</p>
				<h2 className="h2">
				Karaktärer som är här
				</h2>
				<div>
				{outputCharacters}
				</div>
			</div>
        </div>
    )
}

export default Donso;

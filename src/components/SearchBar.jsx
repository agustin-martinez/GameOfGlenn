import React from 'react';
import { useSelector } from 'react-redux';

function SearchBar() {
  const charactersData = useSelector((state) => state.characters);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [resultList, setResultList] = React.useState(charactersData);

  React.useEffect(() => {
    setResultList(charactersData);
  }, [charactersData]);

  const handleChange = (e) => {
    console.log(charactersData);
    setSearchTerm(e.target.value);
    setResultList(
      charactersData.filter((person) =>
        person.character.name.includes(e.target.value)
      )
    );
  };
  return (
    <div className='SearchBar' style={{ marginBottom: '30px' }}>
      <input
        type='text'
        placeholder='Sök efter karaktärer ...'
        name='sök karktärer'
        value={searchTerm}
        onChange={handleChange}
      ></input>

      <div className='container'>
        <div className='persons'>
          {resultList.map((charItem, index) => (
            <div key={index} className='planets-item'>
              <div> NAME: {charItem.character.name} </div>
              <div> WORLD {charItem.character.world} </div>
              <div> STRENGHT: {charItem.strength} </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;

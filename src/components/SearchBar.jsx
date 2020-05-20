import React from 'react';

const SearchBar = () => {
  return (
    <div  className='SearchBar' style={{ marginBottom: '30px' }}>
      
      <input
        type='text'
        placeholder='Sök efter karaktärer ...'
        name='sök karktärer'
      ></input>
    </div>
  );
};

export default SearchBar;

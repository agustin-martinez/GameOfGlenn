import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Characters from './components/Characters';
import Worlds from './components/Worlds';
import WorldsRedux from './components/WorldsRedux';
import OmOss from './components/OmOss';

import HeaderRedux from './components/HeaderRedux';

function App() {
  return (
    <div>
       <header> <HeaderRedux /></header>
        <Worlds />
        <WorldsRedux />
      
    </div>
  );
}

export default App;

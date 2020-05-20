import React from 'react';
import './App.css';
import Worlds from './components/Worlds';
import WorldsRedux from './components/WorldsRedux';

import HeaderRedux from './components/HeaderRedux';

function App() {
  return (
    <div>
       <header> <HeaderRedux /></header>
        <Worlds />
        <Worlds />
        <WorldsRedux />
        <WorldsRedux />
      
    </div>
  );
}

export default App;

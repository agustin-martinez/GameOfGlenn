import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Characters from './components/Characters';
import Worlds from './components/Worlds';
import WorldsRedux from './components/WorldsRedux';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1> React installed </h1>
      </header>
      <main>
        <SearchBar />
        <Characters />
        

        {/* <Worlds />
        <Worlds />
        <WorldsRedux />
        <WorldsRedux /> */}
      </main>
    </div>
  );
}

export default App;

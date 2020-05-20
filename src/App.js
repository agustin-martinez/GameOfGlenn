import React from 'react';
import './App.css';
import Worlds from './components/Worlds';
import WorldsRedux from './components/WorldsRedux';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1> React installed </h1>
      </header>
      <main>
        <Worlds />
        <Worlds />
        <WorldsRedux />
        <WorldsRedux />
      </main>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';

import Display from './components/Display';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <Display value="0" />

      <div className="Button-wrapper">
        <Button value="1" />
      </div>
    </div>
  );
}

export default App;

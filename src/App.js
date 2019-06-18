import React, { useState } from 'react';
import './App.css';

import Display from './components/Display';
import Button from './components/Button';

function App() {
  var [displayNum, setDisplayNum] = useState("0");
  let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  let keypad = numbers.map((number) =>
    <Button value={number} onClick={() => setDisplayNum(displayNum += number)}/>
  );

  return (
    <div className="App">
      <Display value={displayNum} />
      <div className="Button-wrapper">{keypad}</div>
    </div>
  );
}

export default App;

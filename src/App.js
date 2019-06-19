import React, { useState } from 'react';
import './App.css';

import Display from './components/Display';
import Button from './components/Button';

function App() {
  var [displayNum, setDisplayNum] = useState("1234567890");
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const keypad = numbers.map((number) =>
    <Button value={number} onClick={() => updateDisplay(number)} />
  );
  const updateDisplay = (number) => {
    displayNum += number;
    if (displayNum.length > 11) {
      displayNum = displayNum.substr(1, 11);
    }
    setDisplayNum(displayNum)
  };



  return (
    <div className="App">
      <Display value={displayNum} />
      <div className="Button-wrapper">{keypad}</div>
    </div>
  );
}

export default App;

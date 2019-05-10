import React from 'react';
import './Display.css';

const Display = props => {
  const { value } = props;

  return <input type="text" className="Display" value={value} readOnly />;
};

export default Display;

import React from 'react';
import './Button.css';

const Button = props => {
  const { value, onClick } = props;
  return (
    <button className="Button" onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;

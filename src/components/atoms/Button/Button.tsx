import React from 'react';
import './Button.css';

interface Props {
  text: string;
  handleClick: Function;
}

const Button = ({text, handleClick}: Props) => (
  <button className="button" onClick={handleClick.bind(this)}>{text}</button>
);

export default Button;

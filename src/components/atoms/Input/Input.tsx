import React from 'react';
import './Input.css';

interface Props {
  text: string;
  type: string;
  handleChange: Function;
  value: string | number;
  minVal?: string | number;
  maxVal?: string | number
}

const Input = ({text, handleChange, type, value, maxVal, minVal}: Props) => {

  const onChangeEvt = (e: any) => {
    handleChange(e.target.value)

  }

  return (
    <input type={type} placeholder={text} value={value} className="input" onChange={onChangeEvt} min={minVal}
           max={maxVal}/>
  );

}

export default Input;

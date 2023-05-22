import React from 'react';
import './LabeledInput.css';
import Label from '../../atoms/Label/Label';
import Input from '../../atoms/Input/Input';
import {MAX_PLAYERS, MIN_PLAYERS} from "../../../helpers/constants";

interface Props {
  placeholder: string;
  inputType: string;
  handleChange: Function;
  value: string | number;
  label: string;
}

const LabeledInput = ({placeholder, inputType, label, handleChange, value}: Props) => (
  <div className="labeled_input">
    <Label text={label}/>
    <Input value={value} text={placeholder} type={inputType} minVal={MIN_PLAYERS} maxVal={MAX_PLAYERS}
           handleChange={handleChange}/>
  </div>
);

export default LabeledInput;

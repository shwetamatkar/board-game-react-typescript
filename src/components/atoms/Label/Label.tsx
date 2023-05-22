import React from 'react';
import './Label.css';

interface LabelProps {
  text: any;
}

const Label = ({text}: LabelProps) => (
  <label className="label">{text}</label>
);

export default Label;

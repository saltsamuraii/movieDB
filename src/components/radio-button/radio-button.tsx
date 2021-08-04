import React from 'react';
import './radio-button.css';

type RadioButtonProps = {
  value: any,
  onChange: any,
  isChecked: boolean,
  className: string,
}

export default function RadioButton({ value, onChange, isChecked, className }: RadioButtonProps) {
  return (
    <label className={isChecked ? `${className} checked` : className}>
      <input
        className="radio__button-input"
        type="radio"
        value={value}
        checked={isChecked}
        onChange={onChange}
      />
      {value}
    </label>
  );
}

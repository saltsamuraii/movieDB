import React, { ChangeEvent } from 'react';
import './radio-button.css';

interface RadioButtonProps {
  value: string,
  className: string,
  isChecked: boolean,
  onChange: (event: ChangeEvent<HTMLInputElement>) => void,
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

import React from 'react';
import './radio-button.css';

export default function RadioButton({ value, onChange, isChecked, className }) {
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

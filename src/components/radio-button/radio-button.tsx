import React, { InputHTMLAttributes } from 'react';
import './radio-button.css';

interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  className: string,
}

export default function RadioButton({ value, checked, className, ...rest }: Omit<RadioButtonProps, 'type'>) {
  return (
    <label className={checked ? `${className} checked` : className}>
      <input
        {...rest}
        className="radio__button-input"
        type="radio"
        value={value}
        checked={checked}
      />
      {value}
    </label>
  );
}

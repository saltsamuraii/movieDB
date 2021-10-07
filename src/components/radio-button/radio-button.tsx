import React, { InputHTMLAttributes } from 'react';
import { RadioButtonInput } from './radio-button.styled';

export default function RadioButton({
  value,
  checked,
  className,
  ...rest
}: Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>) {
  return (
    <label className={className}>
      <RadioButtonInput {...rest} type="radio" value={value} checked={checked} />
      {value}
    </label>
  );
}

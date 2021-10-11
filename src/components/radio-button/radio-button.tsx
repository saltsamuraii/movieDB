import React, { InputHTMLAttributes } from 'react';
import { RadioButtonInput, RadioButtonValue } from './radio-button.styled';

export default function RadioButton({
  value,
  checked,
  ...rest
}: Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>) {
  return (
    <label>
      <RadioButtonInput {...rest} type="radio" value={value} checked={checked} />
      <RadioButtonValue>{value}</RadioButtonValue>
    </label>
  );
}

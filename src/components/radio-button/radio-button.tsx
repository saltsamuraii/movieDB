import React, { InputHTMLAttributes } from 'react';
import { RadioButtonInput, RadioButtonSpan } from './radio-button.styled';

export default function RadioButton({
  value,
  checked,
  ...rest
}: Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>) {
  return (
    <label>
      <RadioButtonInput {...rest} type="radio" value={value} checked={checked} />
      <RadioButtonSpan>{value}</RadioButtonSpan>
    </label>
  );
}

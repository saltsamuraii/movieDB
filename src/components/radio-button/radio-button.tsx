import React, { InputHTMLAttributes } from 'react';
import { RadioButtonInput } from './radio-button.styled';

interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  className: string;
}

export default function RadioButton({
  value,
  checked,
  className,
  ...rest
}: Omit<RadioButtonProps, 'type'>) {
  return (
    <label className={checked ? `${className} checked` : className}>
      <RadioButtonInput {...rest} type="radio" value={value} checked={checked} />
      {value}
    </label>
  );
}

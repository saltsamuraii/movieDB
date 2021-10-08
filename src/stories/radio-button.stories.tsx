import { Story } from '@storybook/react';
import React from 'react';
import { RadioButton } from '../components/radio-button';
import { GlobalStyles } from '../components/app/app.styled';

interface RadioButtonProps {
  value: string;
  checked: boolean;
}

export default {
  component: RadioButton,
  title: 'RadioButton',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template: Story<RadioButtonProps> = (args) => (
  <>
    <GlobalStyles />
    <RadioButton {...args} />
  </>
);

export const RadioButtonComponent = Template.bind(RadioButton);

RadioButtonComponent.args = {
  checked: false,
  value: 'Release_date',
};

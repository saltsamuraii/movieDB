import { Story } from '@storybook/react';
import React from 'react';
import { RadioButton } from '../components/radio-button';

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

const Template: Story<RadioButtonProps> = (args) => <RadioButton {...args} />;

export const RadioButtonComponent = Template.bind(RadioButton);

RadioButtonComponent.args = {
  checked: false,
  value: 'Release_date',
};

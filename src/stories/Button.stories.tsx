import { Story } from '@storybook/react';
import React from 'react';
import { action } from '@storybook/addon-actions';
import { RadioButton } from '../components/radio-button';

interface RadioButtonProps {
  value: string;
  checked: boolean;
  onChange: () => void;
}

export default {
  component: RadioButton,
  title: 'RadioButton',
};

const Template: Story<RadioButtonProps> = (args) => <RadioButton {...args} />;

export const RadioButtonTitle = Template.bind(RadioButton);

RadioButtonTitle.args = {
  value: 'Title',
  checked: true,
  onChange: () => console.log(action('click')),
};

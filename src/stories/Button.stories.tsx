import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind(`Record<string, never>`);
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind(`Record<string, never>`);
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind(`Record<string, never>`);
Small.args = {
  size: 'small',
  label: 'Button',
};

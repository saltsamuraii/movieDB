import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from './Header';

export default {
  title: 'Example/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const LoggedIn = Template.bind(`Record<string, never>`);
LoggedIn.args = {
  user: 'User1',
};

export const LoggedOut = Template.bind(`Record<string, never>`);
LoggedOut.args = {
  user: undefined,
};

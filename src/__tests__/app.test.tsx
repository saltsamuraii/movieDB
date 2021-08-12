import React from 'react';
import { render } from '@testing-library/react';
import { App } from '../components/app';

test('render App module', () => {
  render(<App/>);
});
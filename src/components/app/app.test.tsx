import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './app';

test("renders app element", () => {

  render(<App/>);
  screen.debug()
});
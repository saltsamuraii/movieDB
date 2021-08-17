import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import { App } from './index';
const fetch = require("node-fetch");


describe('App module', () => {
  it('render app element', async () => {
    render(<App />);
  })
});

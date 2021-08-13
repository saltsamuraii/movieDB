import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import { App } from '../components/app';


describe('App module', () => {
  it('render app element', async () => {
    render(<App />);
  })
});
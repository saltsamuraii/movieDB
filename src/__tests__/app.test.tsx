import React from 'react';
import { render } from '@testing-library/react';
import { App } from '../components/app';

jest.mock('axios')

describe('render App module', () => {
  it('renders app element', async () => {
    render(<App />);
  })
});
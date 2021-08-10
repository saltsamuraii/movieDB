import React from 'react';
import { render, screen } from '@testing-library/react';
import { RadioButton } from '../components/radio-button';

test("render app element", () => {

  render(<RadioButton className="red" 
                      onChange={event => event.target.value} 
                      isChecked
                      value="title"/>);
  screen.debug()
});

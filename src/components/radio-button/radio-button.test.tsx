import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { RadioButton } from './index';

describe('RadioButton component', () => {
  it('should call onChange when button clicked', () => {
    const onChange = jest.fn();
    render(
      <fieldset>
        <RadioButton defaultChecked name="title" value="1" className="button" onChange={onChange} />
        <RadioButton name="genre" value="2" className="button" onChange={onChange} />
      </fieldset>
    );
    userEvent.click(screen.getAllByRole('radio', { hidden: true })[1]);
    expect(onChange).toHaveBeenCalled();
  });
});

import React from 'react';
import userEvent from '@testing-library/user-event/dist';
import { render, screen } from '@testing-library/react';
import { RadioButton } from './index';

describe('Radiobutton module', () => {
  it('it should call onChange on click', () => {
    const onChange = jest.fn();
    render(
      <fieldset>
        <RadioButton
          name='button'
          value='1'
          defaultChecked
          className='button'
          onChange={onChange}/>
        <RadioButton
          name='button'
          value='2'
          className='button'
          onChange={onChange}/>
      </fieldset>);

    userEvent.click(screen.getAllByRole('radio')[1]);
    expect(onChange).toHaveBeenCalled();
  });

});
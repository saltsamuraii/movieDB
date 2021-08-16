import React from 'react';
import { render } from '@testing-library/react';
import { RadioButton } from './index';

test('Radiobutton module', () => {
  it('render Radiobutton component', () => {
    const { container } = render(
      <RadioButton
        value=''
        className='button'
        isChecked
        onChange={jest.fn()}/>
    );
    expect(container);
  });

  it('must use radio click', () => {

  })

});
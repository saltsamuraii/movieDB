import React from 'react';
import { render } from '@testing-library/react';
import { RadioButton } from '../components/radio-button';

test('Module SearchInfo', () => {
  const onChange = jest.fn();

  render(
    <RadioButton
      value=''
      className='button'
      isChecked
      onChange={onChange}/>
  );
});
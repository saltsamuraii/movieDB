import React from 'react';
import { render } from '@testing-library/react';
import { RadioButton } from './index';

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
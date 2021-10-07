import styled from 'styled-components';

const RadioButtonSpan = styled.span`
  padding: 5px;
  margin: 0 7px;
  cursor: pointer;
  text-transform: uppercase;
  color: var(--white-color);
  font-weight: bold;
  background-color: var(--gray-color);
`;

const RadioButtonInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  cursor: pointer;
  clip: rect(0 0 0 0);

  &:checked + ${RadioButtonSpan} {
    background-color: var(--light-red);
  }
`;

export { RadioButtonSpan, RadioButtonInput };

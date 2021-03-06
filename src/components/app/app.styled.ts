import styled, { createGlobalStyle } from 'styled-components';

export const Button = styled.button`
  width: 60px;
  height: auto;
  margin: 0 7px;
  padding: 5px;
  cursor: pointer;
  text-transform: uppercase;
  border: none;
  color: var(--black-color);
  font-weight: bold;
  background-color: var(--gray-color);
`;

export const GlobalStyles = createGlobalStyle`
:root {
  --black-color: #000;
  --white-color: #fff;
  --gray-color: #a5a5a5;
  --red-color: #ff0000;
  --light-red: #ff4f4f;
}

body {
  margin: 0;
  padding: 0;
  font-size: 15px;
  font-family: 'Open Sans', sans-serif;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

h1,
h2 {
  color: var(--black-color);
  text-align: center;
}

fieldset {
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  border: none;
}
`;

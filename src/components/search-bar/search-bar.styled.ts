import styled from 'styled-components';

const SearchFormInput = styled.input`
  display: block;
  width: 90%;
  margin: 0 auto;
  padding: 10px;
  border: 0;
  border-bottom: 3px var(--red-color) solid;
  outline: none;
  font-size: 20px;
  color: var(--black-color);
`;

const SearchFormFilters = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const SearchFormLegendText = styled.legend`
  font-weight: bold;
  text-transform: uppercase;
  float: left;
`;

const SearchFormButton = styled.button`
  width: 200px;
  padding: 10px 15px;
  margin: 0;
  height: auto;
  cursor: pointer;
  text-transform: uppercase;
  border: none;
  font-weight: bold;
  color: var(--white-color);
  background-color: var(--light-red);

  &:hover {
    background-color: var(--red-color);
  }
`;

export { SearchFormInput, SearchFormFilters, SearchFormLegendText, SearchFormButton };

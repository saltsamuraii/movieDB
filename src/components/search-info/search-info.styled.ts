import styled from 'styled-components';

const SearchInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 0;
  background: var(--gray-color);
`;

const SearchInfoResult = styled.span`
  margin: 0 10px;
  font-size: 20px;
  font-weight: bold;
  color: var(--black-color);
`;

const SearchInfoLegendText = styled.legend`
  margin: 0 10px;
  font-size: 20px;
  font-weight: bold;
  float: left;
  color: var(--black-color);
`;

export { SearchInfoContainer, SearchInfoResult, SearchInfoLegendText };

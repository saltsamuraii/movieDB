import styled from 'styled-components';

const MovieCardPoster = styled.img`
  max-width: 100%;
  height: 500px;
`;

const MovieCardContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MovieCardTitle = styled.h5`
  margin: 5px 0;
  text-transform: uppercase;
`;

const MovieCardYear = styled.span`
  font-size: 15px;
  padding: 0 10px;
  border: 1px var(--black-color) solid;
`;

const MovieCardGenre = styled.p`
  margin: 0;
  font-size: 16px;
  color: var(--gray-color);
`;

export { MovieCardPoster, MovieCardContent, MovieCardTitle, MovieCardYear, MovieCardGenre };

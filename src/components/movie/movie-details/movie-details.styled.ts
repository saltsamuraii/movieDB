import styled from 'styled-components';
import { Button } from '../../app/app.styled';

const MovieDetailsContainer = styled.div`
  display: flex;
  background: linear-gradient(rgba(0, 0, 0, 0.8), var(--black-color)),
    url('https://i.redd.it/4fxxbm4opjd31.jpg') center, no-repeat;
  background-size: cover;
`;
const MovieDetailsPoster = styled.img`
  width: 300px;
  margin: 15px;
  max-width: 100%;
  border: 1px var(--red-color) solid;
`;
const MovieDetailsContent = styled.div`
  margin: 15px;
`;
const MovieDetailsTitle = styled.span`
  font-size: 40px;
  color: var(--red-color);
`;
const MovieDetailsRating = styled.span`
  margin: 0 30px;
  font-size: 20px;
  font-weight: bold;
  color: var(--white-color);
  padding: 7px;
  border: 1px var(--white-color) solid;
  border-radius: 30px;
`;
const MovieDetailsGenre = styled.p`
  font-size: 20px;
  color: var(--gray-color);
`;

const MovieDetailsYear = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: var(--white-color);
`;

const MovieDetailsDuration = styled.span`
  margin-left: 10px;
  font-size: 20px;
  font-weight: bold;
  color: var(--white-color);
`;

const MovieDetailsDescription = styled.p`
  font-size: 25px;
  color: var(--gray-color);
`;

const MovieDetailsButton = styled(Button)`
  width: 200px;
  padding: 10px;
  margin: 0;
  color: var(--white-color);
  background-color: var(--light-red);

  &:hover {
    background-color: var(--red-color);
  }
`;

export {
  MovieDetailsContainer,
  MovieDetailsPoster,
  MovieDetailsContent,
  MovieDetailsTitle,
  MovieDetailsRating,
  MovieDetailsGenre,
  MovieDetailsYear,
  MovieDetailsDuration,
  MovieDetailsDescription,
  MovieDetailsButton,
};

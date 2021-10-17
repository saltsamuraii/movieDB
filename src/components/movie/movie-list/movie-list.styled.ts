import styled from 'styled-components';
import Link from 'next/link';

const Movies = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
  list-style: none;
`;

const MovieCardList = styled.li`
  width: 325px;
  height: 100%;
  cursor: pointer;
  margin: 10px 15px;
`;

const MovieCardLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const MovieCardAnchor = styled.a`
  text-decoration: none;
`;

export { Movies, MovieCardList, MovieCardLink, MovieCardAnchor };

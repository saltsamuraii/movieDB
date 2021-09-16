import { connect } from 'react-redux';
import MovieList from './movie-list';
import { MoviesState } from '../../../redux/store/store';

const mapStateToProps = ({ movies: { data, isLoading } }: MoviesState) => ({
  movies: data,
  isLoading,
});

export const MovieListContainer = connect(mapStateToProps, null)(MovieList);

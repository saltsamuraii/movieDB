import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { connect } from 'react-redux';
import { loadMovie } from '../../../redux/redux-helpers/load-movie';
import { movieResetAction } from '../../../redux/action-creators/movie-action-creators';
import MovieDetails from './movie-details';
import { MoviesState } from '../../../redux/store/store';

const mapStateToProps = ({ movie: { data } }: MoviesState) => ({
  movie: data,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<void, void, AnyAction>) => ({
  onLoadMovie: (url: string) => dispatch(loadMovie(url)),
  resetMovie: () => dispatch(movieResetAction()),
});

export const MovieDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(MovieDetails);

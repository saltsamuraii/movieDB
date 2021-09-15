import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { connect } from 'react-redux';
import App from './app';
import { LoadDataParams } from '../../helpers/resourсe';
import { loadMovies } from '../../redux/redux-helpers/load-movies';

const mapDispatchToProps = (dispatch: ThunkDispatch<void, void, AnyAction>) => ({
  onLoadMovies: (url: string, params?: LoadDataParams) => dispatch(loadMovies(url, params)),
});

export const AppContainer = connect(null, mapDispatchToProps)(App);

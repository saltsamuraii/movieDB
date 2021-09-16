import { Dispatch } from 'redux';
import { loadData } from '../../helpers/resourсe';
import {
  movieErrorAction,
  movieLoadAction,
  movieStartAction,
} from '../action-creators/movie-action-creators';

export const loadMovie = (url: string) => (dispatch: Dispatch) => {
  dispatch(movieStartAction());

  loadData(url)
    .then((response) => {
      dispatch(movieLoadAction(response));
    })
    .catch((error) => {
      dispatch(movieErrorAction(error));
    });
};

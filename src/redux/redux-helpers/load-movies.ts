import { Dispatch } from 'redux';
import { loadData, LoadDataParams } from '../../helpers/resourсe';
import {
  moviesDoneAction,
  moviesErrorAction,
  moviesStartAction,
} from '../action-creators/movies-action-creators';

export const loadMovies = (url: string, params?: LoadDataParams) => (dispatch: Dispatch) => {
  dispatch(moviesStartAction());

  loadData(url, params)
    .then((response) => {
      dispatch(moviesDoneAction(response.data));
    })
    .catch((error) => {
      dispatch(moviesErrorAction(error));
    });
};

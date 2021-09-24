import { AnyAction, Dispatch, Store } from 'redux';
import { ThunkMiddleware } from 'redux-thunk';

export const loggerMiddleware: ThunkMiddleware<Store, AnyAction, void> =
  (store) => (next: Dispatch) => (action: AnyAction) => {
    console.group(action.type);
    console.log('dispatching', action);
    console.log('previously state', store.getState());

    const result = next(action);
    console.log('next state', store.getState());
    console.groupEnd();

    console.log('return result', result);
    return result;
  };

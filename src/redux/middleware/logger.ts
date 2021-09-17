import { AnyAction, Dispatch, Store } from 'redux';

export const loggerMiddleware = (store: Store) => (next: Dispatch) => (action: AnyAction) => {
  console.group(action.type);
  console.log('dispatching', action);
  console.log('previously state', store.getState());

  const result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();
  console.log('return result', result);
  return result;
};

import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import * as user from './user';
import * as register from './register';

const reducers = combineReducers({
  user: user.reducer,
  register: register.reducer
})

export const rootReducers = (state, action) => {
  return reducers(state, action);
}

export function* rootSagas() {
  yield all([
    user.saga(),
    register.saga()
  ]);
}
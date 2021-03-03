import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import * as user from './user';

const reducers = combineReducers({
  user: user.reducer,
})

export const rootReducers = (state, action) => {
  return reducers(state, action);
}

export function* rootSagas() {
  yield all([
    user.saga(),
  ]);
}
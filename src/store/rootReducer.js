import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import * as diary from './diary';

const reducers = combineReducers({
  diary: diary.reducer,
})

export const rootReducer = (state, action) => {
  return reducers(state, action);
}

export function* rootSaga() {
  yield all([
    diary.saga(),
  ]);
}
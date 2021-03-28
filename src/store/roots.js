import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import * as user from './user';
import * as register from './register';
import * as diary from './diary';
import * as feed from './feed';
import * as forum from './forum';
import * as notification from './notification';

const reducers = combineReducers({
  user: user.reducer,
  register: register.reducer,
  diary: diary.reducer,
  feed: feed.reducer,
  forum: forum.reducer,
  notifications: notification.reducer
})

export const rootReducers = (state, action) => {
  return reducers(state, action);
}

export function* rootSagas() {
  yield all([
    user.saga(),
    register.saga(),
    diary.saga(),
    feed.saga(),
    forum.saga()
  ]);
}
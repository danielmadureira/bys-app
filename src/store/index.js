import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga';

import { rootReducer, rootSaga } from './rootReducer';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  applyMiddleware(
    sagaMiddleware,
  ),
);
sagaMiddleware.run(rootSaga);

export {
  store,
}
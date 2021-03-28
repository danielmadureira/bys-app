import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import createSagaMiddleware from 'redux-saga';
import { rootReducers, rootSagas } from './roots';
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  timeout: null,
  whitelist: ['user', 'notifications']
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = createStore(
  persistedReducer,
  applyMiddleware(
    sagaMiddleware,
  ),
);
sagaMiddleware.run(rootSagas);

export const persistor = persistStore(store);
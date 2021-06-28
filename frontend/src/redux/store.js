import { applyMiddleware, createStore } from 'redux';
import rootReducer from './root-reducer';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './root-saga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [logger, sagaMiddleware];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);
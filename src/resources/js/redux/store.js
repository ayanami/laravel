import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'connected-react-router';
import { reducer } from './reducer';
import { history } from '../react/history';

export const store = createStore(reducer(history), applyMiddleware(createLogger(), routerMiddleware(history)));
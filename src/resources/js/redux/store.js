import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'connected-react-router';
import reducer from './reducer';
import saga from './saga';
import history from './history';

export default function initialize() {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(reducer(history), applyMiddleware(sagaMiddleware, createLogger(), routerMiddleware(history)));
    sagaMiddleware.run(saga);
    return store;
}
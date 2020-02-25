import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import reducer from './reducer';
import saga from './saga';

const initialize = state => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(reducer, state, applyMiddleware(sagaMiddleware, createLogger()));
    sagaMiddleware.run(saga);
    return store;
}

export default initialize;
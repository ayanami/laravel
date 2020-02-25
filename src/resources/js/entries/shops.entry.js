import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Shops from '../components/shops'
import initialize from '../redux/store';

const store = initialize();

render(
    <Provider store={store}>
        <Shops />
    </Provider>,
    document.getElementById('shops')
);
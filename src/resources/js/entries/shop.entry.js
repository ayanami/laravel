import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import ShopList from '../components/shop/list'
import initialize from '../redux/store';

const shops = document.getElementById('shops');
if (shops) {
    const store = initialize();

    render(
        <Provider store={store}>
            <ShopList />
        </Provider>,
        shops
    );
}

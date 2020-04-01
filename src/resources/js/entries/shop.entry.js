import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import initialize from '../redux/store';
import history from '../redux/history';
import ShopList from '../components/shop/list';
import ShopCreate from '../components/shop/create';

const store = initialize();

const shopList = document.getElementById('shopList');
if (shopList) {
    render(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <ShopList />
            </ConnectedRouter>
        </Provider>,
        shopList
    );
}

const shopCreate = document.getElementById('shopCreate');
if (shopCreate) {
    console.log(shopCreate);
    render(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <ShopCreate />
            </ConnectedRouter>
        </Provider>,
        shopCreate
    );
}
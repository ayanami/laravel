import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import initialize from './redux/store';
import history from './react/history';
import ShopList from './components/shop/shop.list';
import ShopCreate from './components/shop/shop.create';

const store = initialize();

const shopRoot = document.getElementById('shopRoot');
if (shopRoot) {
    render(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Switch>
                    <Route exact path="/shop/list" component={ShopList} />
                    <Route path="/shop/create" component={ShopCreate} />
                </Switch>
            </ConnectedRouter>
        </Provider>,
        shopRoot
    );
}
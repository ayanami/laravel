import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import store from './redux/store';
import { history } from './react/history';
import ShopListContainer from './containers/shop/shop.list.container';
import ShopCreateContainer from './containers/shop/shop.create.container';

const shopRoot = document.getElementById('shopRoot');
if (shopRoot) {
    render(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Switch>
                    <Route exact path="/shop/list" component={ShopListContainer} />
                    <Route path="/shop/create" component={ShopCreateContainer} />
                </Switch>
            </ConnectedRouter>
        </Provider>,
        shopRoot
    );
}
import React from 'react';
import { Route } from 'react-router-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { store } from './redux/store';
import { history } from './react/history';
import ShopListContainer from './containers/shop/shop.list.container';
import ShopCreateContainer from './containers/shop/shop.create.container';
import ShopEditContainer from './containers/shop/shop.edit.container';
import WordpressContainer from './containers/wordpress/wordpress.container';

const root = document.getElementById('root');
if (root) {
    render(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Switch>
                    <Route path="/shop/list" component={ShopListContainer} />
                    <Route path="/shop/create" component={ShopCreateContainer} />
                    <Route path="/shop/edit/:id" component={ShopEditContainer} />
                    <Route path="/wordpress/:id" component={WordpressContainer} />
                </Switch>
            </ConnectedRouter>
        </Provider>,
        root
    );
}
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import store from './redux/store';
import { history } from './react/history';
import { WrappedRoute } from './components/react/wrapped.route.component';
import ShopListContainer from './containers/shop/shop.list.container';
import ShopCreateContainer from './containers/shop/shop.create.container';
import ShopEditContainer from './containers/shop/shop.edit.container';

const root = document.getElementById('root');
if (root) {
    render(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Switch>
                    <WrappedRoute path="/shop/list" component={ShopListContainer} />
                    <WrappedRoute path="/shop/create" component={ShopCreateContainer} />
                    <WrappedRoute path="/shop/edit/:id" component={ShopEditContainer} />
                </Switch>
            </ConnectedRouter>
        </Provider>,
        root
    );
}
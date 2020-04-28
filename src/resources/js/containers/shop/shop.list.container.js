import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux';
import { ErrorPage } from '../../components/error/error.page.component';
import { ShopList } from '../../components/shop/list/shop.list.component';
import { get } from '../../utils/axios.utils';

class ShopListContainer extends Component {
    render() {
        const shops = get('/api/shop/list');
        return (
            <Suspense fallback={<p>Loading...</p>}>
                <ErrorPage>
                    <ShopList {...this.props} shops={shops} />
                </ErrorPage>
            </Suspense>
        );
    }
}

export default connect()(ShopListContainer);
import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux';
import { ErrorPage } from '../../components/error/error.page.component';
import { ShopEdit } from '../../components/shop/edit/shop.edit.component';
import { get } from '../../utils/axios.utils';

class ShopEditContainer extends Component {
    render() {
        const publisher = get('/api/shop/edit/' + this.props.match.params.id);
        return (
            <Suspense fallback={<p>Loading...</p>}>
                <ErrorPage>
                    <ShopEdit {...this.props} publisher={publisher} />
                </ErrorPage>
            </Suspense>
        );
    }
}

export default connect()(ShopEditContainer);
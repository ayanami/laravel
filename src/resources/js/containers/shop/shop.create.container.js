import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ErrorPage } from '../../components/error/error.page.component';
import { ShopCreate } from '../../components/shop/create/shop.create.component';

class ShopCreateContainer extends Component {
    render() {
        return (
            <ErrorPage>
                <ShopCreate {...this.props} />
            </ErrorPage>
        );
    }
}

export default connect()(ShopCreateContainer);
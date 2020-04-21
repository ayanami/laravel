import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ErrorPage } from '../../components/error/error.page.component';
import { ShopCreate } from '../../components/shop/create/shop.create.component';
import * as actions from '../../actions/shop/shop.create.action';

class ShopCreateContainer extends Component {
    componentDidMount() {
        this.props.initShopCreate();
    }
    render() {
        return (
            <ErrorPage>
                <ShopCreate {...this.props} />
            </ErrorPage>
        );
    }
}

export default connect(
    null,
    actions
)(ShopCreateContainer);
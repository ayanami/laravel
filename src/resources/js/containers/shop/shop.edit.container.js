import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ErrorPage } from '../../components/error/error.page.component';
import { ShopEdit } from '../../components/shop/edit/shop.edit.component';
import * as actions from '../../actions/shop/shop.edit.action';

class ShopEditContainer extends Component {
    componentDidMount() {
        this.props.initShopEdit();
    }
    render() {
        return (
            <ErrorPage>
                <ShopEdit />
            </ErrorPage>
        );
    }
}

export default connect(
    state => ({ shops: state.shops }),
    actions
)(ShopEditContainer);
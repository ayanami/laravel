import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/shop/shop.list.action';
import { ErrorPage } from '../../components/error/error.page.component';
import { ShopList } from '../../components/shop/list/shop.list.component';

class ShopListContainer extends Component {
    componentDidMount() {
        this.props.initShopList();
    }
    render() {
        return (
            <ErrorPage>
                <ShopList {...this.props} />
            </ErrorPage>
        );
    }
}

export default connect(
    state => ({ shops: state.shops }),
    actions
)(ShopListContainer);
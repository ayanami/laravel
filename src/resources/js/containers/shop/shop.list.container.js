import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/shop/shop.list.action';
import { ErrorPage } from '../../components/error/error.page.component';
import { ShopList } from '../../components/shop/list/shop.list.component';
import { log } from '../../utils/log.utils';

class ShopListContainer extends Component {
    componentDidMount() {
        this.props.initShopList();
    }
    render() {
        log({ props: this.props });
        return (
            <ErrorPage>
                <ShopList />
            </ErrorPage>
        );
    }
}

export default connect(
    state => ({
        shops: state.shops,
    }),
    actions
)(ShopListContainer);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/shop/shop.list.action';
import { Error } from '../../components/error.component';
import { ShopList } from '../../components/shop/list/shop.list.component';
import { log } from '../../utils/log.utils';

class ShopListContainer extends Component {
    constructor() {
        super();
    }
    componentDidMount() {
        this.props.initShopList();
    }
    render() {
        log({ props: this.props });
        return (
            <Error>
                <ShopList />
            </Error>
        );
    }
}

export default connect(
    state => ({
        shops: state.shops,
    }),
    actions
)(ShopListContainer);
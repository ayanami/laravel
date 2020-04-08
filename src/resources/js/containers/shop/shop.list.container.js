import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/shop/shop.list.action';
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
        log({state: this.props.state});
        return (<ShopList />);
    }
}

export default connect(
    state => ({ state: state.shops }),
    actions
)(ShopListContainer);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Error } from '../../components/error.component';
import { ShopCreate } from '../../components/shop/create/shop.create.component';
import * as actions from '../../actions/shop/shop.create.action';
import { log } from '../../utils/log.utils';

class ShopCreateContainer extends Component {
    constructor() {
        super();
    }
    componentDidMount() {
        this.props.initShopCreate();
    }
    render() {
        log({ state: this.props.state });
        return (
            <Error>
                <ShopCreate {...this.props} />
            </Error>
        );
    }
}

export default connect(
    null,
    actions
)(reduxForm({ form: 'shopCreate' })(ShopCreateContainer));
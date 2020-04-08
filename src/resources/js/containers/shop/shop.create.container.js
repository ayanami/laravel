import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
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
        log({state: this.props.state});
        return (
            <ShopCreate {...this.props}/>
        );
    }
}

export default connect(
    null,
    actions
)(reduxForm({ form: 'shopCreate' })(ShopCreateContainer));
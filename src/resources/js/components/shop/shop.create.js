import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/shop/shop.create.action';

class ShopCreate extends Component {
    constructor() {
        super();
    }
    componentDidMount() {
        this.props.initShopCreate();
        console.log(this.props);
    }
    render() {
        console.log(this.props.state);
        return (
            <div>hoge</div>
        );
    }
}

const mapStateToProps = state => {
    return {
        state: state.shop,
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopCreate);
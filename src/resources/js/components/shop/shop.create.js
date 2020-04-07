import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions/shop/shop.create.action';

class ShopCreate extends Component {
    constructor() {
        super();
    }
    componentDidMount() {
        this.props.initShopCreate();
    }
    submit(value, dispatch) {
        console.log('value => ' + JSON.stringify(value));
        dispatch(actions.postShopCreate(
            value,
            () => { this.props.history.push('/shop/list') }
        ));
    }
    render() {
        console.log(this.props.state);
        const { handleSubmit } = this.props;
        return (
            <div className="panel panel-default">
                <div className="panel-heading">店舗を追加する</div>
                <div className="panel-body">
                    <form onSubmit={handleSubmit(this.submit.bind(this))}>
                        <div className="form-group">
                            <label htmlFor="name">名前</label>
                            <Field id={'name'} name="name" component="input" type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="rate">レート</label>
                            <Field id={'rate'} name="rate" component="input" type="text" className="form-control" />
                        </div>
                        <div className="text-right">
                            <button type="submit" className="btn btn-primary">送信</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default connect(
    null,
    actions
)(reduxForm({ form: 'shopCreate' })(ShopCreate));
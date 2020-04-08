import React from 'react';
import { Field } from 'redux-form';
import { useDispatch } from 'react-redux';
import * as actions from '../../../actions/shop/shop.create.action';

export const ShopCreate = (props) => {
    const dispatch = useDispatch();
    const submit = value => {
        dispatch(actions.postShopCreate(value, () =>
            props.history.push('/shop/list')
        ));
    }
    return (
        <div className="panel panel-default">
            <div className="panel-heading">店舗を追加する</div>
            <div className="panel-body">
                <form onSubmit={props.handleSubmit(submit)}>
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
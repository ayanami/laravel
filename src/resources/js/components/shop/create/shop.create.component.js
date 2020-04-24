import React from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../../../actions/shop/shop.create.action';
import { ShopInput } from '../common/shop.input.component';

export const ShopCreate = (props) => {
    const dispatch = useDispatch();
    const submit = values => {
        dispatch(actions.postShopCreate(
            values,
            () => props.history.push('/shop/list')
        ));
    }
    return (
        <div className="panel panel-default">
            <div className="panel-heading">店舗を追加する</div>
            <ShopInput
                {...props}
                submit={submit}
            />
        </div>
    );
}
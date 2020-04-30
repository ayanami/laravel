import React from 'react';
import { ShopInput } from '../common/shop.input.component';
import { post } from '../../../utils/axios.utils';

export const ShopCreate = props => {
    const submit = values => {
        post('/api/shop/create', values, () => props.history.push('/shop/list'));
    }
    return (
        <div className="panel panel-default">
            <div className="panel-heading">店舗を追加する</div>
            <ShopInput {...props} submit={submit} />
        </div>
    );
}
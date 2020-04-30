import React from 'react';
import { ShopInput } from '../common/shop.input.component';
import { patch } from '../../../utils/axios.utils';

export const ShopEdit = props => {
    const shop = props.publisher.subscribe();
    const submit = values => {
        patch('/api/shop/edit/' + props.match.params.id, values, () => props.history.push('/shop/list'));
    }
    return (
        <div className="panel panel-default">
            <div className="panel-heading">店舗を変更する</div>
            <ShopInput {...props} shop={shop} submit={submit} />
        </div>
    );
}
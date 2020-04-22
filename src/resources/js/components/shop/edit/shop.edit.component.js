import React from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../../../actions/shop/shop.edit.action';
import { ShopInput } from '../common/shop.input.component';

export const ShopEdit = (props) => {

    const dispatch = useDispatch();
    const submit = value => {
        dispatch(actions.patchShopEdit(
            props.match.params.id,
            value,
            () => props.history.push('/shop/list'))
        );
    }
    return (
        <div className="panel panel-default">
            <div className="panel-heading">店舗を変更する</div>
            <ShopInput
                {...props}
                submit={submit}
            />
        </div>
    );
}
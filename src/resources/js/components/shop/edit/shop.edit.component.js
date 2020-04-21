import React from 'react';
import * as actions from '../../../actions/shop/shop.edit.action';
import { ShopInput } from '../common/shop.input.component';

export const ShopEdit = (props) => {
    return (
        <ShopInput
            {...props}
            action={actions.patchShopEdit}
        />
    );
}
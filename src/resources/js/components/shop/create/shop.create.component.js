import React from 'react';
import * as actions from '../../../actions/shop/shop.create.action';
import { ShopInput } from '../common/shop.input.component';

export const ShopCreate = (props) => {
    return (
        <ShopInput
            {...props}
            action={actions.postShopCreate}
        />
    );
}
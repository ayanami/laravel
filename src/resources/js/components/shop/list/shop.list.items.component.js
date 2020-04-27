import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../actions/shop/shop.list.action';
import { DoubleClickProtectAnchor } from '../../custom/double.click.protect.anchor.component';

const EditLink = DoubleClickProtectAnchor(() => {
    return (
        <i className="fa fa-edit" aria-hidden="true" style={{ fontSize: "20px" }} />
    );
});
const DeleteButton = DoubleClickProtectAnchor(() => {
    return (
        <i className="fa fa-trash" aria-hidden="true" style={{ fontSize: "20px" }} />
    );
});

export const ShopListItems = () => {
    const dispatch = useDispatch();
    const shops = useSelector(state => state.shops.payload);
    return shops.map(shop => {
        return (
            <tr key={shop.id}>
                <td>{shop.id}</td>
                <td>{shop.name}</td>
                <td>
                    <span className="label">{shop.rate}</span>
                </td>
                <td>
                    <EditLink href={'/shop/edit/' + shop.id} />
                </td>
                <td>
                    <DeleteButton listener={() => { dispatch(actions.deleteShop(shop.id)) }} />
                </td>
            </tr>
        );
    });
}
import React from 'react';
import { createAnchor } from '../../creator/anchor.component.creator';
import { del } from '../../../utils/axios.utils';

const EditShop = createAnchor(() => {
    return (
        <i className="fa fa-edit" aria-hidden="true" style={{ fontSize: "20px" }} />
    );
});
const DeleteShop = createAnchor(() => {
    return (
        <i className="fa fa-trash" aria-hidden="true" style={{ fontSize: "20px" }} />
    );
});

export const ShopListItems = (props) => {
    const listener = (id) => {
        del('/api/shop/delete/' + id, () => {
            props.history.push('/shop/list');
        });
    }
    return props.shops.data.map(shop => {
        return (
            <tr key={shop.id}>
                <td>{shop.id}</td>
                <td>{shop.name}</td>
                <td>
                    <span className="label">{shop.rate}</span>
                </td>
                <td>
                    <EditShop href={'/shop/edit/' + shop.id} />
                </td>
                <td>
                    <DeleteShop listener={listener.bind(this, shop.id)} />
                </td>
            </tr>
        );
    });
}
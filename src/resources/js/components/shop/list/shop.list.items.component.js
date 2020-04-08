import React from 'react';
import { useSelector } from 'react-redux';
import { log } from '../../../utils/log.utils';

export const ShopListItems = () => {
    const shops = useSelector(state => state.shops.payload);
    log({shops: shops});
    return shops.map(shop => {
        return (
            <tr key={shop.id}>
                <td>{shop.id}</td>
                <td>{shop.name}</td>
                <td>
                    <span className="label">{shop.rate}</span>
                </td>
                <td>
                    <a href="#">
                        <i className="fa fa-edit" aria-hidden="true" style={{ fontSize: "20px" }} />
                    </a>
                </td>
            </tr>
        );
    });
}
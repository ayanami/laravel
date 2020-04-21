import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const ShopListItems = () => {
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
                    <Link to={'/shop/edit/' + shop.id}>
                        <i className="fa fa-edit" aria-hidden="true" style={{ fontSize: "20px" }} />
                    </Link>
                </td>
            </tr>
        );
    });
}
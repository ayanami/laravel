import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../actions/shop/shop.list.action';

export const ShopListItems = () => {
    const [disabled, setDisabled] = useState(false);
    const dispatch = useDispatch();
    const handleClick = useCallback(id => {
        setDisabled(true);
        dispatch(actions.deleteShop(id));
    }, []);
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
                <td>
                    <Link onClick={handleClick.bind(this, shop.id)} style={disabled ? { pointerEvents: "none" } : null}>
                        <i className="fa fa-trash" aria-hidden="true" style={{ fontSize: "20px" }} />
                    </Link>
                </td>
            </tr>
        );
    });
}
import React from 'react';
import { Link } from 'react-router-dom';
import { ShopListItems } from './shop.list.items.component';

export const ShopList = () => {
    return (
        <div className="panel panel-default">
            <div className="panel-heading">店舗</div>
            <div className="panel-body">
                <div className="text-right">
                    <Link to="/shop/create" className="btn btn-default btn-block">追加</Link>
                </div>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>名前</th>
                        <th>レート</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <ShopListItems />
                </tbody>
            </table>
        </div>
    );
}
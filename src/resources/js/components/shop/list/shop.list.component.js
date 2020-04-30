import React from 'react';
import { createAnchor } from '../../creator/anchor.component.creator';
import { ShopListItems } from './shop.list.items.component';

const AddShop = createAnchor(() => <span>追加</span>);

export const ShopList = props => {
    const shops = props.publisher.subscribe();
    return (
        <div className="panel panel-default">
            <div className="panel-heading">店舗</div>
            <div className="panel-body">
                <div className="text-right">
                    <AddShop href="/shop/create" className="btn btn-default btn-block" />
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
                    <ShopListItems {...props} shops={shops} />
                </tbody>
            </table>
        </div>
    );
}
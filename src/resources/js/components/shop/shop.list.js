import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../actions/shop/shop.list.action';

class ShopList extends Component {
    constructor() {
        super();
    }
    componentDidMount() {
        this.props.initShopList();
    }
    render() {
        console.log(this.props.state);
        const items = this.props.state.shops.map(shop => {
            return (
                <tr key={shop.id}>
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
                            <th>名前</th>
                            <th>レート</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>{items}</tbody>
                </table>
            </div>
        );
    }
}

export default connect(
    state => ({ state: state.shops }),
    actions
)(ShopList);
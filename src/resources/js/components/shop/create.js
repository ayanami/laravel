import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/shop.action';
import { bindActionCreators } from 'redux';

class ShopCreate extends Component {
    constructor() {
        super();
    }
    componentDidMount() {
        this.props.init();
        console.log(this.props);
    }
    render() {
        console.log(this.props.state);
        return (
            this.props.state.shops.map(shop => {
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
            })
        );
    }
}

const mapStateToProps = state => {
    return {
        state: state.shops,
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopCreate);
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Shops extends Component {
    constructor() {
        super();
        this.state = {
            shops: []
        }
    }
    componentDidMount() {
        axios
            .get('/api/shops')
            .then(response => {
                console.log(response);
                this.setState({
                    shops: response.data
                });
            }).catch(e => {
                console.log("error: " + e);
            });
    }
    render() {
        return (
            this.state.shops.map(shop => {
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

if (document.getElementById('shops')) {
    ReactDOM.render(<Shops />, document.getElementById('shops'));
}

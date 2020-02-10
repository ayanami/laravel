import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Shops extends Component {
    render() {
        return (
            <div>shops by react component</div>
        );
    }
}

if (document.getElementById('shops')) {
    ReactDOM.render(<Shops />, document.getElementById('shops'));
}

import React from 'react';
import { useSelector } from 'react-redux';
import { attributes } from '../../validation/attributes';

export const ClientValidateMessages = ({ name }) => {
    const clientError = useSelector(state => state.clientError.payload);
    if (!(name in clientError) || !clientError[name].filter(value => !!value).length) {
        return null;
    }
    const attribute = attributes[name];
    const messages = clientError[name].filter(value => !!value).map(value => 
        <li key={value}>{value.replace(':attribute', attribute)}</li>
    );
    return (
        <div className="validate-messages">
            <ul>{messages}</ul>
        </div>
    );
}
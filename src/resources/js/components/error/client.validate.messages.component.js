import React from 'react';
import { useSelector } from 'react-redux';
import { attributes } from '../../validation/attributes';

export const ClientValidateMessages = ({ name }) => {
    const clientError = useSelector(state => state.clientError.payload);
    if (!(name in clientError) || !clientError[name].filter(value => !!value).length) {
        return null;
    }
    const attribute = attributes[name];
    return (
        <div className="validate-messages">
            <ul>
                <Messages attribute={attribute} values={clientError[name]} />
            </ul>
        </div>
    );
}

const Messages = ({ attribute, values }) => {
    return values.filter(value => !!value).map(value => {
        return (
            <li key={value}>{value.replace(':attribute', attribute)}</li>
        );
    });
}
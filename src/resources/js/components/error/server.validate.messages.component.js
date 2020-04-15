import React from 'react';
import { useSelector } from 'react-redux';

export const ServerValidateMessages = ({fieldName}) => {
    const error = useSelector(state => state.error.payload);
    if (!error || error.status != 422 || !error.data.errors || !error.data.errors[fieldName]) {
        return null;
    }
    return (
        <div className="validate-messages">
            <ul>
                <Messages values={error.data.errors[fieldName]} />
            </ul>
        </div>
    );
}

const Messages = ({values}) => {
    return values.map(value => {
        return (
            <li key={value}>{value}</li>
        );
    });
}
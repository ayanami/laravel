import React from 'react';
import { useSelector } from 'react-redux';

export const ServerValidateMessages = ({ name }) => {
    const serverError = useSelector(state => state.serverError.payload);
    if (serverError?.status != 422 || !(name in serverError?.data?.errors)) {
        return null;
    }
    const messages = serverError.data.errors[name].map(value =>
        <li key={value}>{value}</li>
    );
    return (
        <div className="validate-messages">
            <ul>{messages}</ul>
        </div>
    );
}
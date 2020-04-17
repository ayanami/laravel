import React from 'react';
import { useSelector } from 'react-redux';

export const ServerValidateMessages = ({ name }) => {
    const serverError = useSelector(state => state.serverError.payload);
    if (serverError?.status != 422 || !(name in serverError?.data?.errors)) {
        return null;
    }
    return (
        <div className="validate-messages">
            <ul>
                <Messages values={serverError.data.errors[name]} />
            </ul>
        </div>
    );
}

const Messages = ({ values }) => {
    return values.map(value => {
        return (
            <li key={value}>{value}</li>
        );
    });
}
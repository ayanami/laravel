import React from 'react';
import { useSelector } from 'react-redux';

export const ServerValidateMessages = (props) => {
    const error = useSelector(state => state.error.payload);
    if (!error || error.status != 422 || !error.data.errors[props.name]) {
        return null;
    }
    return (
        <div className="validate-messages">
            <ul>
                <Messages {...props} />
            </ul>
        </div>
    );
}

const Messages = (props) => {
    const error = useSelector(state => state.error.payload);
    const messages = error.data.errors[props.name];
    return messages.map(message => {
        return (
            <li key={message}>{message}</li>
        );
    });
}
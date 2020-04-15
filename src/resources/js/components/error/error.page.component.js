import React from 'react';
import { useSelector } from 'react-redux';

export const ErrorPage = ({ children }) => {
    const error = useSelector(state => state.error.payload);
    if (!error || error.status == 422) {
        return children;
    }
    let message = error.data.message;
    if (!message) {
        message = error.data;
    }
    return (
        <div className="flex-center position-ref full-height">
            <div className="code">{error.status}</div>
            <div className="message" style={{ padding: "10px" }}>{message}</div>
        </div>
    );
}
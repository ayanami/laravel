import React from 'react';
import { useSelector } from 'react-redux';

export const ErrorPage = ({ children }) => {
    const serverError = useSelector(state => state.serverError.payload);
    if (!serverError || serverError.status == 422) {
        return children;
    }
    const message = serverError.data.message || serverError.data;
    return (
        <div className="flex-center position-ref full-height">
            <div className="code">{serverError.status}</div>
            <div className="message" style={{ padding: "10px" }}>{message}</div>
        </div>
    );
}
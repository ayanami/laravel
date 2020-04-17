import React from 'react';
import { attributes } from '../../validation/attributes';

export const ClientValidateMessages = ({ name, errors }) => {
    if (!(name in errors)) {
        return null;
    }
    const message = errors[name].message.replace(':attribute', attributes[name]);
    return (
        <div className="validate-messages">
            <ul><li>{message}</li></ul>
        </div>
    );
}
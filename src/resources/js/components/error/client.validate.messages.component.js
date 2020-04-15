import React from 'react';
import { useSelector } from 'react-redux';
import { attributes } from '../../validators/attributes';

export const ClientValidateMessages = ({ formName, fieldName }) => {
    const form = useSelector(state => state.form[formName]);
    if (!form || !form.submitFailed || !form.syncErrors || !form.syncErrors[fieldName]) {
        return null;
    }
    const message = form.syncErrors[fieldName];
    const attribute = attributes[fieldName];
    return (
        <div className="validate-messages">
            <ul>
                <li>{message.replace(':attribute', attribute)}</li>
            </ul>
        </div>
    );
}
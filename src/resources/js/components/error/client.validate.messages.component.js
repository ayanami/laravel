import React from 'react';
import { useSelector } from 'react-redux';

export const ClientValidateMessages = (props) => {
    const form = useSelector(state => state.form[props.data]);
    if (!form || !form.submitFailed || !form.syncErrors[props.name]) {
        return null;
    }
    return (
        <div className="validate-messages">
            <ul>
                <li>{form.syncErrors[props.name]}</li>
            </ul>
        </div>
    );
}
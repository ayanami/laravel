import React from 'react';
import { useSelector } from 'react-redux';

export const ErrorMessages = (props) => {
    const error = useSelector(state => state.error.payload);
    if (!error || error.status != 422 || !error.data.errors[props.name]) {
        return null;
    }
    return (
        <div className="validate-message">
            <ul>
                <Values {...props} />
            </ul>
        </div>
    );
}

const Values = (props) => {
    const error = useSelector(state => state.error.payload);
    const values = error.data.errors[props.name];
    return values.map(value => {
        return (
            <li>{value}</li>
        );
    });
}
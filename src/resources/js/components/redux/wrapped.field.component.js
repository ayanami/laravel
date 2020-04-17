import React from 'react';
import { Field } from 'redux-form';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { notifyClientError } from '../../actions/error/client.error.action';
import { clearServerError } from '../../actions/error/server.error.action';

export const WrappedField = (props) => {
    const dispatch = useDispatch();
    dispatch(clearServerError());
    const form = useSelector(state => state.form[props.form]);
    console.log(form);
    const clientError = useSelector(state => state.clientError.payload);
    clientError[props.name] = props.validate.map(
        fn => fn(form?.values && props.name in form.values ? form.values[props.name] : undefined)
    );
    console.log(clientError);
    dispatch(notifyClientError(clientError));
    return <Field {...props} />;
}
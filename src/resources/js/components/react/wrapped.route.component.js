import React from 'react';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearServerError } from '../../actions/server.error.action';

export const WrappedRoute = (props) => {
    const dispatch = useDispatch();
    dispatch(clearServerError());
    return <Route {...props} />;
}
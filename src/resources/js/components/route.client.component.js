import React from "react";
import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { notifyError } from "../actions/error.action";

export const RouteClient = (props) => {
    const dispatch = useDispatch();
    dispatch(notifyError(null));
    return <Route {...props} />;
}
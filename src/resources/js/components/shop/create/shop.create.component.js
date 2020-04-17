import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../../../actions/shop/shop.create.action';
import { WrappedField } from '../../redux/wrapped.field.component';
import * as validators from '../../../validation/validator';
import { ClientValidateMessages } from '../../error/client.validate.messages.component';
import { ServerValidateMessages } from '../../error/server.validate.messages.component';

export const ShopCreate = (props) => {
    const dispatch = useDispatch();
    const submit = useCallback(value => {
        dispatch(actions.postShopCreate(value, () =>
            props.history.push('/shop/list')
        ));
    }, []);
    return (
        <div className="panel panel-default">
            <div className="panel-heading">店舗を追加する</div>
            <div className="panel-body">
                <form onSubmit={props.handleSubmit(submit)}>
                    <div className="form-group">
                        <label htmlFor="name">名前</label>
                        <WrappedField
                            form="shopCreate"
                            id={'name'}
                            name="name"
                            component="input"
                            type="text"
                            className="form-control"
                            validate={[
                                validators.required,
                                validators.max(50)
                            ]}
                        />
                        <ClientValidateMessages name="name" />
                        <ServerValidateMessages name="name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="rate">レート</label>
                        <WrappedField
                            form="shopCreate"
                            id={'rate'}
                            name="rate"
                            component="input"
                            type="text"
                            className="form-control"
                            validate={[
                                validators.required
                            ]}
                        />
                        <ClientValidateMessages name="rate" />
                        <ServerValidateMessages name="rate" />
                    </div>
                    <div className="text-right">
                        <button type="submit" className="btn btn-primary">送信</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
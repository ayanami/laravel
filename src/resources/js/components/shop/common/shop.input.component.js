import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../../../actions/shop/shop.create.action';
import * as validators from '../../../validation/validator';
import { ClientValidateMessages } from '../../error/client.validate.messages.component';
import { ServerValidateMessages } from '../../error/server.validate.messages.component';

export const ShopInput = (props) => {
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
                        <input
                            id={'name'}
                            name="name"
                            type="text"
                            className="form-control"
                            ref={props.register({
                                validate: {
                                    required: validators.required,
                                    maxLength: validators.maxLength(50)
                                }
                            })}
                        />
                        <ClientValidateMessages name="name" errors={props.errors} />
                        <ServerValidateMessages name="name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="rate">レート</label>
                        <input
                            id={'rate'}
                            name="rate"
                            type="text"
                            className="form-control"
                            ref={props.register({
                                validate: {
                                    required: validators.required,
                                    regex: validators.regex(/^([1-9][0-9]{0,1}|0)(\.[0-9]{1})?$/)
                                }
                            })}
                        />
                        <ClientValidateMessages name="rate" errors={props.errors} />
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
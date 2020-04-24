import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as validators from '../../../validation/validator';
import { ClientValidateMessages } from '../../error/client.validate.messages.component';
import { ServerValidateMessages } from '../../error/server.validate.messages.component';

export const ShopInput = (props) => {
    console.log("props: ", props);
    const shop = props?.shop?.payload;
    console.log("shop: ", shop);
    const { register, errors, handleSubmit } = useForm({
        defaultValues: {
            name: shop?.name,
            rate: shop?.rate
        }
    });
    const [disabled, setDisabled] = useState(false);
    return (
        <div className="panel-body">
            <form onSubmit={handleSubmit((values) => {
                setDisabled(true);
                props.submit(values);
            })}>
                <div className="form-group">
                    <label htmlFor="name">名前</label>
                    <input
                        id={'name'}
                        name="name"
                        type="text"
                        className="form-control"
                        onChange={() => setDisabled(false)}
                        ref={register({
                            validate: {
                                required: validators.required,
                                maxLength: validators.maxLength(50)
                            }
                        })}
                    />
                    <ClientValidateMessages name="name" errors={errors} />
                    <ServerValidateMessages name="name" />
                </div>
                <div className="form-group">
                    <label htmlFor="rate">レート</label>
                    <input
                        id={'rate'}
                        name="rate"
                        type="text"
                        className="form-control"
                        onChange={() => setDisabled(false)}
                        ref={register({
                            validate: {
                                required: validators.required,
                                regex: validators.regex(/^([1-9][0-9]{0,1}|0)(\.[0-9]{1})?$/)
                            }
                        })}
                    />
                    <ClientValidateMessages name="rate" errors={errors} />
                    <ServerValidateMessages name="rate" />
                </div>
                <div className="text-right">
                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={disabled}>送信</button>
                </div>
            </form>
        </div>
    );
}
import React from 'react';
import { useForm } from 'react-hook-form';
import * as validators from '../../../validation/validator';
import { createForm } from '../../creator/form.component.creator';
import { ClientValidateMessages } from '../../error/client.validate.messages.component';
import { ServerValidateMessages } from '../../error/server.validate.messages.component';


const Form = createForm(({ disabled, setDisable, register, errors }) => {
    return (
        <div>
            <div className="form-group">
                <label htmlFor="name">名前</label>
                <input id={'name'}
                    name="name"
                    type="text"
                    className="form-control"
                    onChange={() => setDisable(false)}
                    ref={register({
                        validate: {
                            required: validators.required,
                            maxLength: validators.maxLength(50)
                        }
                    })} />
                <ClientValidateMessages name="name" errors={errors} />
                <ServerValidateMessages name="name" />
            </div>
            <div className="form-group">
                <label htmlFor="rate">レート</label>
                <input id={'rate'}
                    name="rate"
                    type="text"
                    className="form-control"
                    onChange={() => setDisable(false)}
                    ref={register({
                        validate: {
                            required: validators.required,
                            regex: validators.regex(/^([1-9][0-9]{0,1}|0)(\.[0-9]{1})?$/)
                        }
                    })} />
                <ClientValidateMessages name="rate" errors={errors} />
                <ServerValidateMessages name="rate" />
            </div>
            <div className="text-right">
                <button type="submit" className="btn btn-primary" disabled={disabled}>送信</button>
            </div>
        </div>
    )
});

export const ShopInput = (props) => {
    const shop = props?.shop?.data;
    const { register, errors, handleSubmit } = useForm({
        defaultValues: {
            name: shop?.name,
            rate: shop?.rate
        }
    });
    return (
        <div className="panel-body">
            <Form register={register}
                errors={errors}
                handler={handleSubmit}
                listener={props.submit} />
        </div >
    );
}
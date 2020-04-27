import React, { useState } from 'react';

export const DoubleSubmitProtectForm = FormComponent => {
    return (({ register, errors, handler, listener }) => {

        const [disabled, setDisabled] = useState(false);

        const submitHandler = (values) => {
            setDisabled(true);
            listener(values);
        }

        return (
            <form onSubmit={handler((values) => {
                submitHandler(values);
            })} >
                <FormComponent disabled={disabled}
                    setdisabled={setDisabled}
                    register={register}
                    errors={errors} />
            </form>
        )
    })
};
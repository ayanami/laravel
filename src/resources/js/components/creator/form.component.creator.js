import React, { useState } from 'react';

export const createForm = ChildComponent => {
    return ({ register, errors, handler, listener }) => {

        const [disabled, setDisable] = useState(false);

        const submitHandler = (values) => {
            setDisable(true);
            listener(values);
        }

        return (
            <form onSubmit={handler((values) => {
                submitHandler(values);
            })} >
                <ChildComponent disabled={disabled}
                    setDisable={setDisable}
                    register={register}
                    errors={errors} />
            </form>
        )
    }
};
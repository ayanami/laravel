import React, { useState } from 'react';

export const SafetySubmitForm = FormComponent => {
    return (
        ({ register, errors, handler, callback }) => {

            const [disabled, setDisabled] = useState(false);

            const submitHandler = (values) => {
                setDisabled(true);
                callback(values);
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
        }
    )
};
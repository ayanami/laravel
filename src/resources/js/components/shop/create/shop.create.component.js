import React from 'react';
import { useForm } from 'react-hook-form';
import { ShopInput } from '../common/shop.input.component';

export const ShopCreate = () => {
    const { register, handleSubmit, errors } = useForm();
    return (
        <ShopInput
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
        />
    );
}
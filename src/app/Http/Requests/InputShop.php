<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class InputShop extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|max:50',
            'rate' => ['required', 'regex:/^([1-9][0-9]{0,1}|0)(\.[0-9]{1})?$/'],
        ];
    }

    public function attributes()
    {
        return [
            'name' => '名前',
            'rate' => 'レート',
        ];
    }
}

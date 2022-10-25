<?php

namespace App\Http\Requests\Product;

use Illuminate\Foundation\Http\FormRequest;

class StoreProductRequest extends FormRequest
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
            'name'          => 'bail|required|string|max:191',
            'reference'     => 'bail|required|string|max:191|unique:products',
            'price'         => 'bail|required|integer|gt:0',
            'weight'        => 'bail|required|integer|gt:0',
            'stock'         => 'bail|required|integer|gt:-1',
            'category'      => 'bail|required|exists:categories,id',            
        ];
    }

    public function messages()
    {
        return [
            'name.required'         => 'Nombre de producto es requerido.',
            'name.string'           => 'Nombre de producto debe contener caracteres.',
            'name.max'              => 'Nombre de producto puede contener máximo 191 caracteres.',
            'reference.required'    => 'Referencia de producto es requerido.',
            'reference.string'      => 'Referencia de producto debe contener caracteres.',
            'reference.max'         => 'Referencia de producto puede contener máximo 191 caracteres.',
            'reference.unique'      => 'Referencia ya se encuentra en uso.',
            'price.required'        => 'Precio de producto es requerido.',
            'price.integer'         => 'Precio de producto debe ser númerico.',
            'price.gt'              => 'Precio de producto debe ser mayor a 0.',
            'weight.required'       => 'Peso de producto es requerido.',
            'weight.integer'        => 'Peso de producto debe ser númerico.',
            'weight.gt'             => 'Peso de producto debe ser mayor a 0.',
            'stock.required'        => 'Stock de producto es requerido.',
            'stock.integer'         => 'Stock de producto debe ser númerico.',
            'stock.gt'              => 'Stock de producto no debe ser menor a 0.',
            'category.required'     => 'Categoría de producto es requerido.',
            'category.exists'       => 'Categoría de producto es inválido.',            
        ];
    }
}

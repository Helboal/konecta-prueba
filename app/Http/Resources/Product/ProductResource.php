<?php

namespace App\Http\Resources\Product;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        //return parent::toArray($request);

        $category = $this->category()->value('category');

        return [
            'id'            => $this->id,
            'name'          => $this->name,
            'reference'     => $this->reference,
            'price'         => $this->price,
            'weight'        => $this->weight,
            'stock'         => $this->stock,
            'category'      => $category
        ];
    }
}

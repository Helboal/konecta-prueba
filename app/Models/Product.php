<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'reference',
        'price',
        'weight',
        'stock'
    ];

    public function orderDetails()
    {
        return $this->hasMany(OrderDetail::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}

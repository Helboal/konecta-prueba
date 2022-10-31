<?php

namespace App\Http\Controllers;

use App\Http\Resources\Product\ProductCollection;
use App\Models\Product;
use Illuminate\Http\Request;

class ReportsController extends Controller
{
    public function maxStockProducts()
    {
        $products =  Product::where('stock', Product::max('stock'))->get();
        
        $response = new ProductCollection($products);

        return $response;
        
    }
    
    public function bestSellerProducts()
    {
        
    }
}

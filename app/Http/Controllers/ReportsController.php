<?php

namespace App\Http\Controllers;

use App\Http\Resources\Product\ProductCollection;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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
        $products = DB::select("
            SELECT  *, (SELECT MAX(SUM(quantity)) OVER() FROM order_details GROUP BY product_id LIMIT 1) AS total_sales FROM products WHERE id IN (
                SELECT product_id FROM (
                    SELECT product_id , SUM(quantity) AS total_quantity, MAX(SUM(quantity)) OVER() AS max_quantity FROM order_details GROUP BY product_id
                ) AS b
                WHERE total_quantity = max_quantity
            )
        ");
        
        $response = new ProductCollection($products);

        return $response;
    }
}

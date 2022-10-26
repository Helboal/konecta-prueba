<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\OrderDetail;
use App\Models\Product;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function newOrder(Request $request)
    {
        //return json_decode($request->purchase);
        $purchase = json_decode($request->purchase);
        $total_order = 0;
        $total_products = 0;
        $order = new Order();
        $order->total_products +=  $total_products;
        $order->total_order +=  $total_order;
        $order->save();
        
        for($i=0; $i<count($purchase); $i++) {
            $product = Product::where('id', $purchase[$i]->id)->first();
            $order_detail = new OrderDetail();
            $order_detail->current_price = $product->price;
            $order_detail->quantity = $purchase[$i]->quantity;
            $order_detail->total_price = $product->price * $purchase[$i]->quantity;
            $order_detail->order()->associate($order);
            $order_detail->product()->associate($product);
            $order_detail->save();
            
            $total_products += $purchase[$i]->quantity;
            $total_order += $product->price * $purchase[$i]->quantity;           

            $product->stock = $product->stock - $purchase[$i]->quantity;
            $product->save();
        }

        $order->total_products +=  $total_products;
        $order->total_order +=  $total_order;
        $order->save();
        
        return $order;
    }
}

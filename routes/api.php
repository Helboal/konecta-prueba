<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ReportsController;
use App\Http\Controllers\ProductsController;

Route::resource('products', ProductsController::class);
Route::post('order', [OrderController::class, 'newOrder']);

route::group(['prefix' => 'reports'], function() {
    route::get('max-stock', [ReportsController::class, 'maxStockProducts']);
    route::get('best-seller', [ReportsController::class, 'bestSellerProducts']);
});
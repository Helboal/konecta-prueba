<?php

use App\Http\Controllers\OrderController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductsController;


Route::resource('products', ProductsController::class);
Route::post('order', [OrderController::class, 'newOrder']);
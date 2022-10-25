<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\Category;
use Illuminate\Database\Seeder;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories = Category::pluck('id');
        $categories->each(function ($category) {
            Product::factory()->count(20)->create([
                'category_id' => $category,
            ]);
        });        
    }
}

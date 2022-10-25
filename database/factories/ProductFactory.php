<?php

namespace Database\Factories;

use App\Models\Product;
use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
     /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */

    protected $model = Product::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name'          => $this->faker->sentence(2),
            'reference'     => $this->faker->sentence(1),
            'price'         => $this->faker->numberBetween(1000, 10000),
            'weight'        => $this->faker->randomNumber(1),
            'stock'         => $this->faker->randomNumber(1),
            'category_id'   => Category::factory()
        ];
    }
}

<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\Product;
use App\Models\Category;
use App\Traits\ApiResponser;
use Illuminate\Http\Request;
use App\Http\Resources\Product\ProductResource;
use App\Http\Resources\Product\ProductCollection;
use App\Http\Requests\Product\StoreProductRequest;
use App\Http\Requests\Product\UpdateProductRequest;

class ProductsController extends Controller
{
    use ApiResponser;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Product::paginate(10);
        $response =  new ProductCollection($products);

        return $response;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $categories = Category::select('id', 'category')->get();

        return $this->successResponse(['categories' => $categories]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreProductRequest $request)
    {
        try {
            $product = Product::create([
                'name'          => $request->name,
                'reference'     => $request->reference,
                'price'         => $request->price,
                'weight'        => $request->weight,
                'stock'         => $request->stock,
                'category_id'   => $request->category,
            ]);

            $response = new ProductResource($product);

            return $this->successResponse($response);
        }
        catch(Exception $e) {
            return $this->errorResponse('Error al crear el producto, por favor intente nuevamente.', $e->getMessage(), 422);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        $response = new ProductResource($product);

        return $this->successResponse($response);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        $categories = Category::select('id', 'category')->get();

        return $this->successResponse([
            'categories'    => $categories,
            'product'       => $product
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateProductRequest $request, Product $product)
    {
        try {
            $product->update([
                'name'          => $request->name,
                'reference'     => $request->reference,
                'price'         => $request->price,
                'weight'        => $request->weight,
                'stock'         => $request->stock,
                'category_id'   => $request->category,
            ]);

            $response = new ProductResource($product);

            return $this->successResponse($response);
        }
        catch(Exception $e) {
            return $this->errorResponse('Error al actualizar el producto, por favor intente nuevamente.', $e->getMessage(), 422);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        try {
            $product->delete();

            return $this->successResponse(null, 'Producto eliminado exitosamente.');
        }
        catch(Exception $e) {
            return $this->errorResponse('Error al eliminar el producto, por favor intente nuevamente.', $e->getMessage(), 422);
        }
    }
}

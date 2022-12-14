<?php

namespace App\Exceptions;

use Throwable;
use App\Traits\ApiResponser;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;
//use Illuminate\Database\Eloquent\ModelNotFoundException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;

class Handler extends ExceptionHandler
{
    use ApiResponser;
    /**
     * A list of the exception types that are not reported.
     *
     * @var array<int, class-string<Throwable>>
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    public function register()
    {
        $this->renderable(function (Throwable $exception, $request) {
            if ($request->is('api/*')) {
                if($exception instanceof ValidationException) {
                    $errors = $exception->validator->errors()->getMessages();
                    return $this->errorResponse($exception->getMessage(), $errors, Response::HTTP_UNPROCESSABLE_ENTITY);
                }
                if($exception instanceof NotFoundHttpException){                   
                    return $this->errorResponse("No se encontraron datos asociados", null, Response::HTTP_NOT_FOUND);
                }
            }
        });
    }
}

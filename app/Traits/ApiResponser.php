<?php

namespace App\Traits;

use Illuminate\Http\Response;

trait ApiResponser {

    public function successResponse($data, $message=null, $code = Response::HTTP_OK) {

        return response()->json([
            'success'   => true,
            'message'   => $message,
            'data'      => $data
        ], $code);

    }

    public function errorResponse($message=null, $error, $code) {

        return response()->json([
            'success'   => false,
            'message'   => $message,
            'errors'    => $error,
            'code'      => $code
        ], $code);

    }
}

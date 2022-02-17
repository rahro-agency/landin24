<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client;
use Illuminate\Support\Facades\Http;
use Illuminate\Http\Request;
use Illuminate\Support\Env;
use JavaScript;

class HomeController extends Controller
{
    public function index(Request $request)
    {
        $token = Env('CODA_API_TOKEN');
        $docId = Env('TORANJINO_DOC_ID');

        $response = Http::withHeaders([
            'Content-Type' => 'application/json',
            'Accept' => 'application/json',
            'Authorization' => 'Bearer ' . $token,
        ])->get('https://coda.io/apis/v1/docs/'. $docId . '/tables/grid-5yWlr9SKQp/rows');

        if ($response->failed()) {
            abort(401);
        }

        JavaScript::put([
            'data' => json_decode($response),
            'imageId' => 'c-6rK19jk8yC',
        ]);

        return view('toranjino');
    }
}

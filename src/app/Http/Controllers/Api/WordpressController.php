<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use GuzzleHttp\Client;


class WordpressController extends Controller
{
    public function get(int $id)
    {
        $client = new Client();
        // $response = $client->get("http://wp_web:80/wp-json/wp/v2/posts/$id");
        $response = $client->get("http://wp_web:80/?p=$id");
        return $response->getBody()->getContents();
    }
}

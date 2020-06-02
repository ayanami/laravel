<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;

class WordpressController extends Controller
{
    public function get()
    {
        $client = new Client();
        $response = $client->get('http://wp_web:80/wp-json/wp/v2/posts/1');
        return $response->getBody()->getContents();
    }
}

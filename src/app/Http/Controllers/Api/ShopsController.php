<?php

namespace App\Http\Controllers\Api;

use App\Shop;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ShopsController extends Controller
{
    public function get()
    {
        return Shop::all();
    }
}

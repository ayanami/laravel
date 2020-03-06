<?php

namespace App\Http\Controllers\Api;

use App\Shop;
use App\Http\Controllers\Controller;

class ShopController extends Controller
{
    public function list()
    {
        return Shop::all();
    }
}

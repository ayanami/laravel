<?php

namespace App\Http\Controllers\Api;

use App\Shop;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ShopController extends Controller
{
    public function list()
    {
        return Shop::all();
    }

    public function create(Request $request)
    {
        $shop = new Shop();
        $shop->name = $request->name;
        $shop->rate = $request->rate;
        $shop->save();

        return response('create shop succeed', 200);
    }
}

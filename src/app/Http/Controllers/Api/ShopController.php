<?php

namespace App\Http\Controllers\Api;

use App\Shop;
use App\Post;
use App\Http\Controllers\Controller;
use App\Http\Requests\CreateShop;

class ShopController extends Controller
{
    public function list()
    {
        // \Log::info(Post::all());
        return Shop::all();
    }

    public function create(CreateShop $request)
    {
        // abort(403, 'Unauthorized action.');
        $shop = new Shop();
        $shop->name = $request->name;
        $shop->rate = $request->rate;
        $shop->save();

        return response('create shop succeed', 200);
    }
}

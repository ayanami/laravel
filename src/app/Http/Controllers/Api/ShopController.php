<?php

namespace App\Http\Controllers\Api;

use App\Shop;
use App\Post;
use App\Http\Controllers\Controller;
use App\Http\Requests\InputShop;

class ShopController extends Controller
{
    public function list()
    {
        // abort(403, 'Unauthorized action.');
        // \Log::info(Post::all());
        return Shop::all();
    }

    public function create(InputShop $request)
    {
        // abort(403, 'Unauthorized action.');
        $shop = new Shop();
        $shop->name = $request->name;
        $shop->rate = $request->rate;
        $shop->save();

        return response('create shop succeed', 200);
    }

    public function get(int $id) {
        $shop = Shop::find($id);
        if (!$shop) {
            abort(404, 'Not Found');
        }
        return $shop;
    }

    public function edit(int $id, InputShop $request)
    {
        $shop = Shop::find($id);
        $shop->name = $request->name;
        $shop->rate = $request->rate;
        $shop->save();

        return response('edit shop succeed', 200);
    }

    public function delete(int $id)
    {
        Shop::find($id)->delete();

        return response('delete shop succeed', 200);
    }
}

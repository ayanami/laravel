<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => 'api'], function() {
    Route::get('/shop/list', 'Api\ShopController@list');
    Route::post('/shop/create', 'Api\ShopController@create');
    Route::get('/shop/edit/{id}', 'Api\ShopController@get');
    Route::patch('/shop/edit/{id}', 'Api\ShopController@edit');
    Route::delete('/shop/delete/{id}', 'Api\ShopController@delete');
});


<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes(['verify' => true]);

Route::get('/home', 'HomeController@index')->middleware('verified');

Route::get('/shop/list', function() {
    return view('root');
})->middleware('verified')->name('shop.list');

Route::get('/shop/create', function() {
    return view('root');
})->middleware('verified')->name('shop.create');

Route::get('/shop/edit/{id}', function() {
    return view('root');
})->middleware('verified')->name('shop.edit');
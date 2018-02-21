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

Route::get('me', 'ApiController@me');

Route::get('setWebHook', 'ApiController@setWebHook');

Route::post('512319574:AAH7WzHcjf83VClQl3h4Jo9D-P2FK7P0uuw/webhook', 'ApiController@setWebHook');

Route::any('updater', 'ApiController@updater');

Route::get('test', 'ApiController@test');

Route::get('respond', 'ApiController@respond');

Route::get('updates', 'ApiController@updates');

Route::get('/', function () {
    return view('welcome');
});

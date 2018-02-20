<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Telegram\Bot\Api;

class ApiController extends Controller
{
    public function me()
    {
        $telegram = new Api(env('TELEGRAM_BOT_TOKEN'));
        $response = $telegram->getMe();
        return $response;
    }

    public function updates()
    {
        $telegram = new Api(env('TELEGRAM_BOT_TOKEN'));
        $response = $telegram->getUpdates();
        return view("updatesShow", ['res' => implode("spliter", $response)]);
    }

    public function respond()
    {
        $telegram = new Api(env('TELEGRAM_BOT_TOKEN'));
        $response = $telegram->getUpdates();
        $request = collect(end($response)); // fetch the last request from the collection

        $chatid = $request['message']['chat']['id']; // get chatid from request
        $text = $request['message']['text']; // get the user sent text

        $response = $telegram->sendMessage([
            'chat_id' => $chatid,
            'text' => 'Hey! This is bot sending you the first message :)'
        ]);
    }

}

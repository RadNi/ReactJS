<?php

namespace App\Http\Controllers;

use App\teluser;
use Illuminate\Http\Request;
use Telegram\Bot\Api;
use GuzzleHttp;
use DOMXPath;
use DOMDocument;


class ApiController extends Controller
{
    public static $countt=10;
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

    public function test($aliceid=null, $message = null){
        if($message == null) {
            $client = new GuzzleHttp\Client();
            $res = $client->request('GET', 'http://sheepridge.pandorabots.com/pandora/talk?botid=b69b8d517e345aba&skin=custom_input');
            //        echo $res->getBody(); // { "type": "User", ....
            $received_str = 'Your received html';


            $DOM = new DOMDocument();
            $DOM->loadHTML($res->getBody());

            $searchNode = $DOM->getElementsByTagName("input");

            $valueID = $searchNode[0]->getAttribute('value');

            return $valueID;
        }

        $url = 'http://sheepridge.pandorabots.com/pandora/talk?botid=b69b8d517e345aba&skin=custom_input';
        $data = array('botcust2' => $aliceid, 'input' => $message);

// use key 'http' even if you send the request to https://...
        $options = array(
            'http' => array(
                'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
                'method'  => 'POST',
                'content' => http_build_query($data)
            )
        );
        $context  = stream_context_create($options);
        $result = file_get_contents($url, false, $context);
        echo $result;

        $DOM = new DOMDocument();
        $DOM->loadHTML($result);

        $searchNode = $DOM->getElementsByTagName("body");

        $pos = strpos($searchNode[0]->nodeValue, "A.L.I.C.E.:");

        return substr($searchNode[0]->nodeValue, $pos + 11 , strpos($searchNode[0]->nodeValue, 'You say') - $pos - 11);




//        $res = $client->request('POST', 'http://sheepridge.pandorabots.com/pandora/talk?botid=b69b8d517e345aba&skin=custom_input',
//            ['json' => ['botcust2' => $valueID, 'input' => "hi"]]);
//        echo $res->getBody();


//        $DOM = new DOMDocument();
//        $DOM->loadHTML($res -> getBody());
//
//        $xpath = new DOMXPath($DOM);
//        $elements = $xpath->query('*/form');
//        if (!is_null($elements)) {
//            foreach ($elements as $element) {
//                echo "<br/>[". $element->nodeName. "]";
//
//                $nodes = $element->childNodes;
//                foreach ($nodes as $node) {
//                    echo $node->nodeValue. "\n";
//                }
//            }
//        }
// ...

    }

    public function updater() {
        $telegram = new Api(env('TELEGRAM_BOT_TOKEN'));
        $response = $telegram->getUpdates();
//        if ((int)env('QUERY_NUMBERS') != count($response)) {
////            $this->setEnvironmentValue('QUERY_NUMBERS', count($response));
////            return  "  counttttt : " . env('QUERY_NUMBERS') ." other " . count($response);
////            ApiController::$countt = count($response) + 1 - 1;
//            $this->respond();
//        }
        echo count($response);

    }

    public function setWebHook()
    {
        $telegram = new Api(env('TELEGRAM-BOT-TOKEN'));

        $response = $telegram->setWebhook(['url' => 'https://radni.ir/512319574:AAH7WzHcjf83VClQl3h4Jo9D-P2FK7P0uuw/webhook']);

        return $response;
    }


    public function setEnvironmentValue($envKey, $envValue)
    {
        $envFile = app()->environmentFilePath();
        $str = file_get_contents($envFile);

        $oldValue = strtok($str, "{$envKey}=");

        $str = str_replace("{$envKey}={$oldValue}", "{$envKey}={$envValue}\n", $str);

        $fp = fopen($envFile, 'w');
        fwrite($fp, $str);
        fclose($fp);
    }

    public function chatAlice($telegram, $chatid, $userid, $msg){

        $useridd = teluser::where('user_id', '=', $userid) -> first();

        if($useridd == null) {
            $tmp = $this->test();
            teluser::create(array(
                'alice_id' => $tmp,
                'user_id' => $userid
            ));
            $message = "Now you can Chat with Alice.";
        }
        else {
            $message = $this->test($useridd -> alice_id, $msg);
        }


        $response = $telegram->sendMessage([
            'chat_id' => $chatid,
            'text' => $message
        ]);
    }

    public function respond(){
        $telegram = new Api(env('TELEGRAM_BOT_TOKEN'));
        $response = $telegram->getUpdates();
        $request = collect(end($response));

        $chatid = $request['message']['chat']['id'];
        $userid = $request['message']['from']['id'];
        $text = $request['message']['text'];

        switch($text) {
            case '/start':
                $this->showMenu($telegram, $chatid);
                break;
            case '/alice':
                $this->chatAlice($telegram, $chatid, $userid, $text);
                break;
            case '/menu':
                $this->showMenu($telegram, $chatid);
                break;
            case '/website':
                $this->showWebsite($telegram, $chatid);
                break;
            case '/contact';
                $this->showContact($telegram, $chatid);
                break;
            default:
                $info = 'I do not understand what you just said. Please choose an option';
                $this->chatAlice($telegram, $chatid, $userid, $text);

//                $this->showMenu($telegram, $chatid, $info);
        }
    }

    public function showMenu($telegram, $chatid, $info = null){
        $message = '';
        if($info !== null){
            $message .= $info.chr(10);
        }
        $message .=  '/website'.chr(10);
        $message .= '/contact'.chr(10);;
        $message .= '/alice'.chr(10);

        $response = $telegram->sendMessage([
            'chat_id' => $chatid,
            'text' => $message
        ]);
    }

    public function showWebsite($telegram, $chatid){
        $message = 'http://google.com';

        $response = $telegram->sendMessage([
            'chat_id' => $chatid,
            'text' => $message
        ]);
    }

    function str_get_html($str, $lowercase = true) {
        $dom = new simple_html_dom;
        $dom->load($str, $lowercase);
        return $dom;
    }

    public function showContact($telegram, $chatid){
        $message = 'info@jqueryajaxphp.com';

        $response = $telegram->sendMessage([
            'chat_id' => $chatid,
            'text' => $message
        ]);
    }

}

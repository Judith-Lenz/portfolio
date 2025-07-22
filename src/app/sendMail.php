<?php

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
        case("POST"): //Send the email;
            header("Access-Control-Allow-Origin: *");
            // Payload is not send to $_POST Variable,
            // is send to php:input as a text
            $json = file_get_contents('php://input');
            //parse the Payload from text format to Object
            $params = json_decode($json);
    
            $email = $params->email;   //das params ist das json, dass übergeben wird. wenn ich also noch etwas darüber hinaus übergeben möchte, außer mail, name und message, dann muss es hier mit rein.
            $name = $params->name;
            $message = $params->message;
    
            $recipient = 'kontakt.judithlenz@outlook.de';  //hier muss meine eigene Mail rein!
            $subject = "Nachricht von deiner Website: $name <$email>";
           $message = "<strong>From:</strong> $name ($email)<br><br>" . nl2br($message);
    
            $headers   = array();
            $headers[] = 'MIME-Version: 1.0';
            $headers[] = 'Content-type: text/html; charset=utf-8';

            // Additional headers
            $headers[] = "From: noreply@mywebsite.com";

            mail($recipient, $subject, $message, implode("\r\n", $headers));
            break;
        default: //Reject any non POST or OPTIONS requests.
            header("Allow: POST", true, 405);
            exit;
    } 

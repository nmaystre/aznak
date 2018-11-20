<?php
require_once("site.conf");
/*Mail*/

$to = MAIL_TO;
$subject = '[А-Знак] Новая заявка с сайта';
$message =
    'Имя: '.$_REQUEST['your-name'].'<br><br>'.
    'Телефон: <a href="tel:'.$_REQUEST['your-phone'].'">'.$_REQUEST['your-phone'].'</a><br><br>'.
    'Комментарий: '.$_REQUEST['your-text'].'<br><br>';
$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
$headers .= 'From: '.$_REQUEST['your-phone'].  "\r\n";
$headers .= 'X-Mailer: PHP/' . phpversion();

if ($_REQUEST['your-name']) {
	mail($to, $subject, $message, $headers);
}
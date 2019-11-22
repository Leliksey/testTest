<?php
	if(isset($_POST['userName']) && isset($_POST['userPassword']) && 
    isset($_POST['userEmail']) && isset($_POST['userName-reg']) && isset($_POST['userPassword-reg'])) 
	{	
		$userName = $_POST['userName'];
		echo $userName;
		$password = md5['userPassword'];
		echo $password;
		$userEmail = $_POST['userEmail'];
		echo $userEmail;
		$userNameReg = $_POST['userName-reg'];
		echo $userEmail;
		$userPasswordReg = md5['userPassword-reg'];
		echo $userPasswordReg;
	}
?>
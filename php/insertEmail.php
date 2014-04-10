<?php


$con = mysql_connect("localhost","root","ilikecake");
mysql_select_db("mysql",$con) or die("Could not select examples");

$email = mysql_real_escape_string( $_POST["email"] );

$doesExist = mysql_query("SELECT email FROM Singups WHERE email = '$email'", $con);
 


if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    // invalid emailaddress
	echo 0;

} else if(! mysql_num_rows($doesExist) ){

mysql_query("INSERT INTO Singups(email) VALUES ('$email')", $con);

echo 1;

}else{

echo 2;

}

mysql_close($con);
?>

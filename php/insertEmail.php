<?php


$con=mysqli_connect("ec2-54-227-167-5.compute-1.amazonaws.com","root","ilikecake");
mysql_select_db("ByteDB",$con) or die("Could not select examples");

$isValid = mysql_query($con, "SELECT email FROM Singups WHERE email = $email");
 echo $isValid;

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    // invalid emailaddress
	echo 0;

} else if( mysql_query($con, "SELECT email FROM Singups WHERE email = $email"){

echo 2;

}else{

mysqli_query($con,"INSERT INTO Singups (EmailAddress)
VALUES ('emailBLAH')");

echo 1;

}

mysqli_close($con);
?>
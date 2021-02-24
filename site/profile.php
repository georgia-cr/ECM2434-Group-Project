<!--
authors: Elias Kroha, Seungwoo Kim
dates edited:
16/02/2021
24/02/2021
-->
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="main.css">
    <title>Profile Page</title>
</head>
<body>
<h1>This is your profile page</h1>
<p>Check out these cool buttons</p>
<form>
    <a href="AddFriends.html" class="button">Add friends</a>
    <a href="EditProfile.html" class="button">Edit</a>
    <a href="FriendsList.html" class="button">View friends list</a>
    <a href="index.html" class="button">Back Home</a>
</form>
<br>

<?php

    //start session
    session_start();
    require 'config.php';

    $conn = new mysqli(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);

    if ($conn->connect_error) {
        die ("Connection failure: " . $conn->connect_error);
    }

    //set username to current session's username
    $username = $_SESSION['username'];

    //select profile info of the user 'username'
    $sql = "SELECT username, firstName, lastName, DOB, bio FROM Account
    WHERE username = '$username'";
    $match = $conn->query($sql);

    //echo profile
    if($match) {
        echo "<h1>Profile</h1>";
        
        while($row = mysqli_fetch_array($match)) {
            echo "Username: " . $row['username'] . "<br>";
            echo "Name: " . $row['firstName'] . " " . $row['lastName'] . "<br>";
            echo "Date of birth: " . $row['DOB'] . "<br>";
            echo "Bio: " . $row['bio'] . "<br>";
        }
    } else {
        echo "No profile." . $conn->error;
    }
?>

</body>
</html>

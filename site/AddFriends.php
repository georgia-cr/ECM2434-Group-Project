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
    <title>Add Friends</title>
</head>
<body>
<h1>Here you can add new friends</h1>
<p>Check out these cool buttons</p>

<a href="profile.php" class="button">Profile Page</a>
<a href="EditProfile.html" class="button">Edit</a>
<a href="FriendsList.php" class="button">View friends list</a>
<a href="index.php" class="button">Back Home</a>

<form action="<?=$_SERVER['addfriends.php']?>" method="post">
    <input type="text" name="friendname">
    <input type="submit">
</form>

<?php

//start session
session_start();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {    
    require 'config.php';

    $conn = new mysqli(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);

    if ($conn->connect_error) {
        die ("Connection failure: " . $conn->connect_error);
    }

    //set username to current session's username
    $username = $_SESSION['username'];

    //need changes to the database and the query (will be updated later)
    $sql = "INSERT INTO FriendRelationship(usernameOne, usernameTwo, friendstatus)
    VALUES ('$username', '$_POST[friendname]', 'friend');";

    //if the query was successful, redirect to profile.php
    if ($conn->query($sql)) {
        header("location: profile.php");
    } else {
        echo "Something went wrong: " . $conn->error;
    }
}
?>

</body>
</html>

<!--
authors: George Daish
dates edited:

24/02/2021,
-->


<form action="/bulletinboard.php" method="post" id="back">
  <input type="text" name="content">
  <input type="text" name="title">
    <input type="submit">
</form>

<h1> Add a Post</h1>
<form action="<?=$_SERVER['createbilletin.php']?>" method="post" id="addBulletin">
  <input type="text" name="content">
  <input type="text" name="title">
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
    $sql = "INSERT INTO Bulletin(username, title, content, numComments, upvotes)
    VALUES ('$username', '$_POST[title]', '$_POST[content]', 0, 0);";

    //if the query was successful, redirect to profile.php
    if ($conn->query($sql)) {
        header("location: profile.php");
    } else {
        echo "Something went wrong: " . $conn->error;
    }
}
?>

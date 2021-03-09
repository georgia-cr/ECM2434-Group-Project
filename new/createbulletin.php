<!--
authors: George Daish, George Daish
dates edited:

24/02/2021,
07/03/2021,
-->
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="./bb.css">
</head>
<body>


<div class="create-b" >
<h1> Add a Post</h1>
<form action="<?=$_SERVER['createbilletin.php']?>" method="post" id="addBulletin">
  <h3> Title: </h3>
  <input type="text" name="title"><br><br>
  <h3> Content: </h3>
  <textarea name="content" cols="40" rows="5"></textarea>
  <br>
    <input type="submit">
</form>
<form action="/bulletinb.html" method="post" id="back">

    <input type="submit" value="Return to Bulletin">
</form>

</div>

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


<footer class="site-footer">
<div class="container-footer">
    <p>
    &copy; <script>document.write(new Date().getFullYear())</script> University of Exeter. All rights reserved.
    </p>
</div>
</footer>
</body>
</html>

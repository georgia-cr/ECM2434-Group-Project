<!--
authors: Seungwoo Kim
dates edited:
24/02/2021
-->
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="main.css">
    <title>Add Friends</title>
</head>
<body>
<h1>Find friend</h1>

<form action="<?=$_SERVER['findfriend.php']?>" method="post">
    <input type="text" name="friendname">
    <input type="submit">
</form>

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

    $sql = "SELECT usernameOne, usernameTwo FROM FriendRelationship
    WHERE usernameOne = '$username'";
    $match = $conn->query($sql);

    //echo friends
    if($match) {
        echo "<h1>Friends</h1>";
        echo "<ul>";

        while($row = mysqli_fetch_array($match)) {
            echo "<li> " . $row['usernameTwo'] . "</li>";
        }
        echo "</ul>";
    } else {
        echo "No friends" . $conn->error;
    }
?>

</body>
</html>

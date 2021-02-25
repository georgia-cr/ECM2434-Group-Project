<!--
authors: Elias Kroha
dates edited:
21/02/2021
-->
<?php
$servername = "localhost";
$username = "username";
$password = "password";
$conn = new mysqli($servername, $username, $password);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
if (isset($_POST["submit"])) {
    $username = $_POST["username"];
    $password = $_POST["password"];
    require_once 'errorHandler.php';

    if (emptyInputLogin($username) !== false) {
        header("location: ./login.php?error=emptyInput");
        exit();
    }
    loginUser($conn, $username, $password);

} else {
    header("location: /login.php");
    exit();
}

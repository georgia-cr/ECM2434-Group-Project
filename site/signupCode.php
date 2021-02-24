<!--
authors: Elias Kroha
dates edited:
21/02/2021
-->

<?php
if (isset($_POST["submit"])) {
    $firstName = $_POST["firstName"];
    $lastName = $_POST["lastName"];
    $username = $_POST["username"];
    $password = $_POST["password"];
    $password2 = $_POST["password2"];
    $email = $_POST["email"];
    $DOB = $_POST["DOB"];
    $studentNo = $_POST["studentNo"];
    require_once 'errorHandler.php';

    if (emptyInput($firstName, $lastName, $username, $password, $password2, $email, $DOB, $studentNo) !== false) {
        header("location: ./signup.html?error=emptyInput");
        exit();
    }
    if (invalidUser($username) !== false) {
        header("location: ./signup.html?error=usernameInvalid");
        exit();
    }
    if (invalidEmail($email) !== false) {
        header("location: ./signup.html?error=invalidEmail");
        exit();
    }
    if (invalidStudentNumber($studentNo) !== false) {
        header("location: ./signup.html?error=invalidStudentNumber");
        exit();
    }
    if (samepassword($password, $password2) !== false) {
        header("location: ./signup.html?error=passwordsDoNotMatch");
        exit();
    }/*
    if (usernameTaken($conn, $username, $email) !== false){
        header("location: ../signup.html?error=usernameOrEmailTakenAlready");
        exit();
   }*/


} else {
    header("location: ./signup.html");
    exit();
}

include_once 'signup.html';
echo $_POST['firstName'];


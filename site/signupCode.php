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
    #Checks that the User accessed the website in the correct manner.
    require_once 'errorHandler.php';
    #Uses the errorHandler.php to check for error in the given inputs.

    if (emptyInput($firstName, $lastName, $username, $password, $password2, $email, $DOB, $studentNo) !== false) {
        header("location: ./signup.php?error=emptyInput");
        exit();
    }
    if (invalidUser($username) !== false) {
        header("location: ./signup.php?error=usernameInvalid");
        exit();
    }
    if (invalidEmail($email) !== false) {
        header("location: ./signup.php?error=invalidEmail");
        exit();
    }
    if (invalidStudentNumber($studentNo) !== false) {
        header("location: ./signup.php?error=invalidStudentNumber");
        exit();

    }
    if (samepassword($password, $password2) !== false) {
        header("location: ./signup.php?error=passwordsDoNotMatch");
        exit();
    }
    if (usernameTaken($conn, $username, $email) !== false) {
        header("location: ./signup.php?error=usernameOrEmailTakenAlready");
        exit();
    }
    SignUp($conn, $username, $email, $firstName, $lastName, $DOB, $password, $studentNo);
    #If everything works out the new user will be transfered to the main index page.

} else {
    header("location: ./signup.php");
}


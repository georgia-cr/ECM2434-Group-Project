<!--
authors: Elias Kroha
dates edited:
21/02/2021
-->

<?php
function emptyInput($firstName, $lastName, $username, $password, $password2, $email, $studentNo, $DOB)
#Checks that every signup input is filled out.
{
    $result;
    if (empty($firstName) || empty($lastName) || empty($username) || empty($password) || empty($password2) || empty($email) || empty($studentNo) || empty($DOB)) {
        $result = true;
    } else {
        $result = false;
    }
    return $result;
}

function invalidUser($username)
#Checks that the Username does not use any special charaters.
{
    $result;
    if (!preg_match('/^[a-zA-Z0-9]*$/', $username)) {
        $result = true;
    } else {
        $result = false;
    }
    return $result;
}

function invalidEmail($email)
#Checks that the email input is actually an email.
{
    $result;
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $result = true;
    } else {
        $result = false;
    }
    return $result;
}

function samepassword($password, $password2)
#Checks that the two passwords match.
{
    $result;
    if ($password !== $password2) {
        $result = true;
    } else {
        $result = false;
    }
    return $result;
}

function invalidStudentNumber($studentNo)
#Checks that the Student Number input is only numerical and fits the length
{
    $result;
    if (!preg_match('/^[0-9]{9}$/', $studentNo)) {
        $result = true;
    } else {
        $result = false;
    }
    return $result;
}


function usernameTaken($conn, $username, $email)
#Checks if the email or username is already taken.
{
    $sql = "SELECT * FROM studentaccount WHERE username = ? OR email = ?;";
    $stmt = mysqli_stmt_init($conn);
    if (!mysqli_stmt_prepare($stmt, $sql)) {
        header("location: /signup.php?error=preparedStatementFailed");
        exit();
    }
    mysqli_stmt_bind_param($stmt, "ss", $username, $email);
    #Binds the username and email to the variable $stmt and looks in the DB for it
    mysqli_stmt_execute($stmt);

    $data = mysqli_stmt_get_result($stmt); #Checks if there is a user with the same email or username
    if ($line = mysqli_fetch_assoc($data)) {
        return $line; #If there is an account this will return true and bind the information to $line
    } else {
        $data = false;
        return $data; #If not it will return false and continue
    }
    mysqli_stmt_close($stmt);
}

function SignUp($conn, $username, $email, $firstName, $lastName, $DOB, $password, $studentNo)

{
    $sql = "INSERT INTO studentaccount ('I need the order in which the columns are set up for this') VALUES )(?, ?, ?, ?, ?, ?, ?);";
    $stmt = mysqli_stmt_init($conn);
    if (!mysqli_stmt_prepare($stmt, $sql)) {
        header("location: /signup.php?preparedStatementFailed");
        exit();
    }
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
    mysqli_stmt_bind_param($stmt, "sssssss", $username, $email, $firstName, $lastName, $DOB, $hashedPassword, $studentNo);
    mysqli_stmt_execute($stmt);
    mysqli_stmt_close($stmt);
    header("location: /index.html");
    exit();
}

function emptyInputLogin($username, $password)
#Checks that every login input is filled out.
{
    $result;
    if (empty($username) || empty($password)) {
        $result = true;
    } else {
        $result = false;
    }
    return $result;
}
function loginUser($conn, $username, $password){
    $usernameExists = usernameTaken($conn, $username, $username);
    if ($usernameExists == false){
        header("location: /login.php?error=LoginFailed");
        exit();
    }
    $passwordHashed = $usernameExists["password"];
    $passwordChecker = password_verify($password, $passwordHashed);
    if($passwordChecker == false){
        header("location: /login.php?error=wrongPassword");
        exit();
    }elseif ($passwordChecker == true){
        session_start();
        $_SESSION["username"] = $usernameExists["username"];
        header("location: /index.html");
        exit();

    }
}


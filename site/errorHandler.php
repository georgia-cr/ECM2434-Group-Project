<!--
authors: Elias Kroha
dates edited:
21/02/2021
-->

<?php
function emptyInput($firstName, $lastName, $username, $password, $password2, $email, $studentNo, $DOB)
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
{
    $result;
    if (!preg_match("/^[a-zA-Z0-9]*$/", $username)) {
        $result = true;
    } else {
        $result = false;
    }
    return $result;
}

function invalidEmail($email)
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
{
    $result;
    if (!is_numeric($studentNo)) {
        $result = true;
    } else {
        $result = false;
    }
    return $result;
}

function usernameTaken($conn, $username, $email)
{
    $sql = "SELECT * FROM users WHERE username = ? OR email = ?;";
}

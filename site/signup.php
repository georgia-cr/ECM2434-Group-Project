<!-- 
authors: Henry Cook, Seungwoo Kim, Elias Kroha
dates edited: 
11/02/2021
19/02/2021
21/02/2021
-->

<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="main.css">
    <title>Sign Up</title>
</head>
<body>
<section class="SignupSheet">
    <h1>Sign up here</h1>
    <form action="signupCode.php" method="POST">
        <input type="text" name="firstName" id="firstName" placeholder="First name">
        <input type="text" name="lastName" id="lastName" placeholder="Last name"> <br><br>
        <input type="text" name="username" id="username" placeholder="Username"> <br><br>
        <input type="password" name="password" id="password" placeholder="Password"> <br><br>
        <input type="password" name="password2" id="password2" placeholder="Confirm password"> <br><br>
        <input type="text" name="email" id="email" placeholder="Email"> <br><br>
        <label for="DOB">Birthday:</label>
        <input type="date" name="DOB" id="DOB" placeholder="Birthday"> <br><br>
        <input type="text" name="studentNo" id="studentNo" placeholder="StudentID"> <br><br>
        <button type="submit" name="submit">Sign up now!</button>
        <br><br>
    </form>
    <?php
    if (isset($_GET["error"])) {
        if ($_GET["error"] == "emptyInput") {
            echo "<p>Looks like you forgot to fill in some fields :)</p>";
        } else if ($_GET["error"] == "usernameInvalid") {
            echo "<p>Please only use letters and numbers for your username :)</p>";
        } else if ($_GET["error"] == "invalidEmail") {
            echo "<p>Looks like that is not a valid email :)</p>";
        } else if ($_GET["error"] == "invalidStudentNumber") {
            echo "<p>Looks like that is not a valid student number, it is either too short, long or contains 
                invalid characters :)</p>";
        } else if ($_GET["error"] == "passwordsDoNotMatch") {
            echo "<p>Looks like your passwords do not match :)</p>";
        } else if ($_GET["error"] == "usernameOrEmailTakenAlready") {
            echo "<p>Looks like someone already chose that name or used this email :)</p>";
        } else if ($_GET["error"] == "preparedStatementFailed") {
            echo "<p>Looks like something went wrong try again.</p>";
        }

    }
    ?>
</section>

</body>
</html>

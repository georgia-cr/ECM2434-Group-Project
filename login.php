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
    <title>Log In</title>
</head>
<body>

<section>
    <h1>Login</h1>
    <form action="loginCode.php" method="POST">
        <input type="text" name="username" id="username" placeholder="Username"><br><br>
        <input type="password" name="password" id="password" placeholder="Password"><br><br>
        <button type="submit" name="submit">Log in now!</button>
        <br><br>
    </form>
    <?php
    if (isset($_GET["error"])) {
        if ($_GET["error"] == "emptyInput") {
            echo "<p>Looks like you forgot to fill in some fields :)</p>";
        } else if ($_GET["error"] == "usernameInvalid") {
            echo "<p>Incorrect Login :)</p>";
        }
    }
    ?>

</section>
</body>
</html>

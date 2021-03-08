<?php
session_start();
if(isset($_SESSION['username']) && $_SESSION['accessLevel'] == 'admin') { 
?>
<html>
<head>
    <link rel="stylesheet" href="main.css">
    <title>Admin page</title>
    <script>
    function showUser(filter) {
        var searchname = document.getElementById('name_search').value;
        if (filter == "") {
            document.getElementById("txtHint").innerHTML = "";
            return;
        } else {
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
            };
            xmlhttp.open("GET","getStudents.php?filter="+filter'&text='+searchname',true);
            xmlhttp.send();
        }
    }
    </script>
</head>
<body>
    <h1>Admin tools</h1>
    <p>For staff only.</p>
    <h2>View Students</h2>
    <input type="text" name="name_search" id="name_search" placeholder="Search..">
    <form>
        <select name="users">
            <option value="">Filter</option>
            <option value="1">Low Wellbeing</option>
            <option value="2">High Wellbeing</option>
            <option value="3">Low Quiz Score</option>
            <option value="4">High Quiz Score</option>
            <button type="button" onclick="showUser(this.value)">Search!</button>
        </select>
    </form>
    <br>
    <div id="txtHint"><b>Person info will be listed here...</b></div>
    <h2>Add News</h2>
    <form> // action="action.php" method="post"> I dont know if this is needed cus it's just gonna call the javascript which will add it to the db.
        <label for="title">Title:</label><br>
        <input type="text" id="ntitle" name="ntitle" value="News Title"><br>
        <label for="lname">Body:</label><br>
        <input type="text" id="nbody" name="nbody" value="News Body"><br>
        <input type="submit" value="post">
    </form> 
</body>
</html>

<?php
}
else {
    header("Location: /login.php");
}
?>

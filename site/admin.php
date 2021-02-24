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
    <input type="text" name="name_search" id="name_search" placeholder="Search..">
    <form>
        <select name="users">
            <option value="">Filter</option>
            <option value="1">Low Wellbeing</option>
            <option value="2">High Wellbeing</option>
            <option value="3">Low Quiz Score</option>
            <option value="4">High Quiz Score</option>
            <button type="button" onchange="showUser(this.value)">Search!</button>
        </select>
    </form>
    <br>
    <div id="txtHint"><b>Person info will be listed here...</b></div>
</body>
</html>

<?php
}
else {
    header("Location: /login.php");
}
?>
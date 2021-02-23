<!DOCTYPE html>
<html>
<head>
<style>
table {
  width: 100%;
  border-collapse: collapse;
}

table, td, th {
  border: 1px solid black;
  padding: 5px;
}

th {text-align: left;}
</style>
</head>
<body>

<?php
// print table of students
    $q = intval($_GET['filter']);
    $sname = $_GET['text'];
    if ($sname == ''){$sname = '*'};
    

    $con = mysqli_connect('localhost','peter','abc123','my_db'); // replace with our db
    if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
    }

    mysqli_select_db($con,"students"); // replace with user table
    if ($q == 1) {
        $sql="SELECT * FROM user WHERE wellbeing > 4 AND studentname = '".$sname."'"; // replace
    } elseif ($q == 2) {
        $sql="SELECT * FROM user WHERE wellbeing < 4 AND studentname = '".$sname."'"; // replace
    } elseif ($q == 3) {
        $sql="SELECT * FROM user WHERE quizscore > 4 AND studentname = '".$sname."'"; // replace
    } elseif ($q == 4) {
        $sql="SELECT * FROM user WHERE quizscore < 4 AND studentname = '".$sname."'"; // replace
    } else {
        echo "Error, invalid filter..";
    }


    $result = mysqli_query($con,$sql);

    // this needs to be replaced with the actualy user details + their wellbeing
    echo "<table> 
    <tr>
    <th>FirstName</th>
    <th>LastName</th>
    <th>Wellbeing</th>
    <th>Quizscore</th>
    </tr>";
    while($row = mysqli_fetch_array($result)) {
    echo "<tr>";
    echo "<td>" . $row['FirstName'] . "</td>";
    echo "<td>" . $row['LastName'] . "</td>";
    echo "<td>" . $row['Wellbeing'] . "</td>";
    echo "<td>" . $row['Quizscore'] . "</td>";
    echo "</tr>";
    }
    echo "</table>";
    mysqli_close($con);
?>
</body>
</html>
<!-- 
authors: Henry Cook, George Daish, George Daish
dates edited: 
11/02/2021
20/02/2021,
24/02/2021,
7/03/2021,
-->

<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="./bulletinboard.css">
</head>
<body>
    <header>
        <h1><a href="#">Main Page</a></h1>
        <div class="menu">
            <div>
                <nav>
                    <ul>
                        <li><a href="#">Minigames</a></li>
                        <li><a href="#">Bulletin</a></li>
                        <li><a href="#">Friends</a></li>
                        <li><a href="#">Profile</a></li>
                        <li><a href="#">Log Out</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>

    <div id="root">
        <div class="bulletinboard-container">
            <div class="post-nav"> <!-- contains all the posts -->
                <div class="post-explore">
                    <h1>Explore</h1>
                </div>
                <div class="post-search">
                    <input type="text" id="search-text" name="search-text" placeholder="Search...">
                </div>
                <div class="post-create">
                    <h1>Create</h1>
                    <form action="createbulletin.php">
                        <input type="submit" value="Create a Bulletin Post" />
                    </form>
                </div>
            </div>
            <div class="post-section">
                <div class="post-container-header">
                    <div class="post-container-header-filtertext">
                        <h2>Hot Posts</h2>
                    </div>
                    <div class="post-container-header-filter">
                        <h3>Filter</h3>
			<br> Add Filters here <br>
                    </div>
                </div>
                <div class="post-container"> <!-- contains all the posts -->
                  <?php
                  //Selects all entries from the Bulletin Database and list them all with the relevant comments below each bulletin entry
                  $sql = "SELECT postID, date,username, title,content ,numComments, upvotes FROM Bulletin ORDER BY date";
                  $result = $conn->query($sql);


                  if ($result->num_rows > 0) {
                    while($row = $result->fetch_assoc()) {
                      echo "
                      <div class="post-header">
                          <div class="post-upvotes">
                              <p>Upvotes: " . $row["upvotes"] . "</p>
                          </div>
                          <div class="post-comments">
                              <p>Comments: " . $row["numComments"]. "</p>
                          </div>
                          <div class="post-user">
                              <p>User: " . $row["username"]. "</p>
                          </div>
                      </div>
                      <div class="post-body">
                          <div class="post-title">
                              <h2>" . $row["title"]. "</h2>
                          </div>
                          <div class="post-text">
                              <p>" . $row["content"]. "</p>
                          </div>
                      </div><br>
                      ";

                      //select all comments where the postID matches and display given there is more than 0 comments
                      if(numComments > 0){
                        $sql2 = "SELECT comment, username FROM BulletinPostComment WHERE postID = '" . $row["postID"]. "'";
                        $result2 = $conn->query($sql2);

                        if ($result2->num_rows > 0) {
                          while($row2 = $result2->fetch_assoc()) {
                            echo "
                            
                            <div class="post-comments">
                                <div class="post-title">
                                    <h2>User: " . $row2["username"]. "</h2>
                                </div>
                                <div class="post-text">
                                    <p>" . $row2["comment"]. "</p>
                                </div>
                            </div><br>
                            ";
                          }
                        
                      
                        
                      }
                    }
                   } else {
                       echo "
                       <div class="post-body">
                           <div class="post-title">
                               <h2>No Posts</h2>
                           </div>
                           <div class="post-text">
                               <p>No Posts</p>
                           </div>
                       </div>
                       ";
                   }
                   ?>
                    
                </div>
            </div>
        </div>
    </div>
    <footer class="site-footer">
    <div class="container-footer">
        <p>
        &copy; <script>document.write(new Date().getFullYear())</script> University of Exeter. All rights reserved.
        </p>
    </div>
    </footer>
</body>
</html>

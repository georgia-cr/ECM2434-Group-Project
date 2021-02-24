<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="./index.css">
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
        <div class="homepage-container">
            <div class="news-container">
                <div class="container-title">
                    <h1>Latest News</h1>
                </div>

                <?php
                 $sql = "SELECT title, content,date FROM News ORDER BY date LIMIT 5";
                 $result = $conn->query($sql);


                 if ($result->num_rows > 0) {
                   // output data of each row
                   while($row = $result->fetch_assoc()) {
                     echo "<div class="newsblock">
                         <div class="newsblock-title">
                             <h2> " . $row["title"] . " Date: " . $row["date"]. "</h2>
                         </div>
                         <div class="newsblock-body">
                             <p> " . $row["content"]. "</p>
                         </div>
                     </div><br>";
                   }
                  } else {
                      echo "<div class="newsblock">
                          <div class="newsblock-title">
                              <h2> No News</h2>
                          </div>
                          <div class="newsblock-body">
                              <p>Come back later for the latest news!</p>
                          </div>
                      </div>";
                  }
                  ?>
            </div>
            <div class="topquiz-container">
              <?php
              $sql = "SELECT quizID, quizTitle,quizRanking, Category FROM Quiz ORDER BY quizRanking DESC LIMIT 5";
              $result = $conn->query($sql);


              if ($result->num_rows > 0) {
                // output data of each row
                while($row = $result->fetch_assoc()) {
                  echo "
                  <div class="quizblock">
                      <div class="quizblock-title">
                          <h2> Quiz: " . $row["quizTitle"] . " </h2>
                      </div>
                      <div class="quizblock-upvote">
                          <p> Upvotes: " . $row["quizRanking"]. "</p>
                      </div>
                  </div><br>
                  ";
                }
               } else {
                   echo "
                   <div class="quizblock">
                       <div class="quizblock-title">
                           <h2> Quiz: No Quizzes Yet </h2>
                       </div>
                       <div class="quizblock-upvote">
                           <p> Upvotes: N/A</p>
                       </div>
                   </div><br>
                   ";
               }
               ?>




            </div>
            <div class="wellbeingcheck-container">
                <div class="container-title">
                    <h1>How Are You Feeling?</h1>
                </div>
                <div class="smileyblock">
                    <p>:)</p>
                </div>
                <div class="smileyblock">
                    <p>:|</p>
                </div>
                <div class="smileyblock">
                    <p>:(</p>
                </div>
            </div>


        <div class="boardposts-container">
          <div class="boardposts-title">
              <h1>Recent Top Posts From Bulletin Board</h1>
          </div>
          <div class="boardpostsblock">
              <div class="post-container"> <!-- contains all the posts -->

          <?php
          $sql = "SELECT postID, date,username, title,content ,numComments, upvotes FROM Bulletin ORDER BY date LIMIT 5";
          $result = $conn->query($sql);


          if ($result->num_rows > 0) {
            // output data of each row
            while($row = $result->fetch_assoc()) {
              echo "
              <div class="post-header">
                  <div class="post-upvotes">
                      <p> Upvotes: " . $row["upvotes"] . " </p>
                  </div>
                  <div class="post-comments">
                      <p> Comments: " . $row["numComments"]. "</p>
                  </div>
                  <div class="post-user">
                      <p>" . $row["username"]. "</p>
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

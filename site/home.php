<!-- 
authors: Henry Cook, Seungwoo Kim
dates edited: 
11/02/2021
19/02/2021
20/02/2021
-->


I believe this file is obselete 


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
                <div class="newsblock">
                    <div class="newsblock-title">
                        <h2>Example News Post</h2>
                    </div>
                    <div class="newsblock-body">
                        <p>Example Test</p>
                    </div>
                </div>
            </div>
            <div class="topquiz-container">
                <div class="container-title">
                    <h1>Top Quizzes</h1>
                </div>
                <div class="quizblock">
                    <div class="quizblock-title">
                        <h2>Example Quiz</h2>
                    </div>
                    <div class="quizblock-upvote">
                        <p>100 upvotes</p>
                    </div>
                </div>
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
        </div>
        <div class="boardposts-container">
            <div class="boardposts-title">
                <h1>Recent Top Posts From Bulletin Board</h1>
            </div>
            <div class="boardpostsblock">
                <div class="post-container"> <!-- contains all the posts -->
                    <div class="post-header">
                        <div class="post-upvotes">
                            <p>10 upvotes</p>
                        </div>
                        <div class="post-comments">
                            <p>5 comments</p>
                        </div>
                        <div class="post-user">
                            <p>Example User</p>
                        </div>
                    </div>
                    <div class="post-body">
                        <div class="post-title">
                            <h2>Example Post</h2>
                        </div>
                        <div class="post-text">
                            <p>Example Text</p>
                        </div>
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

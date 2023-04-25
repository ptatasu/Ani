<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://code.jquery.com/jquery-3.6.4.min.js" integrity="sha256-oP6HI9z1XaZNBrJURtCoUT5SUnxFr8s3BzRl+cbzUq8=" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="css/index.css">
    <title>Document</title>
</head>
<nav class="navbar">
    <div class="logo">
        <img src="src/logo.svg" alt="AniJutsu Logo" />
    </div>
    <div class="search-bar">
        <input class="search" type="text" placeholder="Search" />
    </div>
    <div class="profile">
        <p id="name">Name</p>
        <img class="pfp" src="src/sample.png" alt="Profile Picture" />
        <img class="chev" src="src/expand.svg" />
    </div>
</nav>

<body>
    <div class="main-container">
        <h1 class="main-title">TOP AIRING</h1>
        <div class="container">
        </div>
    </div>
    <div class="side-container">
        <h1 class="recent-title">RECENT EPISODES</h1>
        <div class="recent-container"></div>
    </div>
</body>
<script src="js/index.js" type="module"></script>

</html>
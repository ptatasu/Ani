<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://code.jquery.com/jquery-3.6.4.min.js" integrity="sha256-oP6HI9z1XaZNBrJURtCoUT5SUnxFr8s3BzRl+cbzUq8=" crossorigin="anonymous"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Mukta&family=Roboto:wght@100;300&family=Sansita&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../css/navbar.css">
    <link rel="stylesheet" href="../css/watch.css">
    <title>Document</title>
</head>

<body>
    <nav class="navbar">
        <div class="logo">
            <img src="../src/logo.svg" alt="AniJutsu Logo" />
        </div>
        <div class="search-bar">
            <input class="search" type="text" placeholder="Search" />
        </div>
        <div class="profile">
            <p id="name">Name</p>
            <img class="pfp" src="../src/sample.png" alt="Profile Picture" draggable="false" />
            <img id="off" class="chev" src="../src/expand.svg" draggable="false" />
        </div>
    </nav>
    <div class="container"></div>
</body>
<script src="../js/watch.js" type="module"></script>

</html>
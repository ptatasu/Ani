<?php
session_start();
if (!isset($_SESSION['user'])) {
    header('Location: user/signin.php');
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://code.jquery.com/jquery-3.6.4.js" integrity="sha256-a9jBBRygX1Bh5lt8GZjXDzyOB+bWve9EiO7tROUtj/E=" crossorigin="anonymous"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Mukta&family=Roboto:wght@100;300&family=Sansita&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../css/navbar.css">
    <link rel="stylesheet" href="../css/info.css">
    <title>INFO</title>
</head>

<body>
    <nav class="navbar">
        <div class="logo">
            <img src="../src/logo.svg" alt="AniJutsu Logo" />
        </div>
        <div class="home"><a href="/anijutsu">HOME</a></div>
        <div class="search-bar">
            <input class="search" type="text" placeholder="Search" />
        </div>
        <div class="search-items">
        </div>
        <div class="profile">
            <p id="name"><?php echo $_SESSION['user']; ?></p>
            <img class="pfp" src="../src/sample.png" alt="Profile Picture" draggable="false" />
            <img id="off" class="chev" src="../src/expand.svg" alt="chev" draggable="false" />
        </div>
        <div class="dropdown">
        <ul>
            <!-- <li><a class="drop" href="">Account</a></li> -->
            <li><a class="drop" href="">About</a></li>
            <li><a class="drop" href="../php/logout.inc.php">Logout</a></li>
        </ul>
    </div>
    </nav>
    <div class="container"></div>
</body>
<script src="../js/info.js" type="module"></script>

</html>
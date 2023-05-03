<?php
session_start();
if (!isset($_SESSION['user'])) {
    header('Location: ../user/signin.php');
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://code.jquery.com/jquery-3.6.4.js" integrity="sha256-a9jBBRygX1Bh5lt8GZjXDzyOB+bWve9EiO7tROUtj/E=" crossorigin="anonymous"></script>
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
        <div class="home"><a href="/anijutsu">HOME</a></div>
        <div class="search-bar">
            <input class="search" type="text" placeholder="Search" />
        </div>
        <div class="search-items">
        </div>
        <div class="profile">
            <p id="name"><?php echo $_SESSION['user']; ?></p>
            <?php
if (!isset($_SESSION['pfp'])) {
    echo '<img class="pfp" id="pfp" src="../src/initials.svg" alt="Profile Picture" draggable="false" />';
} else {
    echo '<img class="pfp" src="' . $_SESSION['pfp'] . '" alt="Profile Picture" draggable="false" />';
}
?>
            <!-- <img class="pfp" src="../src/sample.png" alt="Profile Picture" draggable="false" /> -->
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
    <footer>
        <div class="texts">
            <div class="tagline">
                Watch Animes even if its still airing or completed
            </div>
            <div class="disclaimer">
                <p>All the Videos are not owned by AniJutsu</p>
            </div>
        </div>
        <div class="socials">
            <p class="contact-title">CONTACT US</p>
            <div class="contact">
                <a href=""><img src="../src/facebook.svg" alt="facebook_logo" height="50" width="50"/></a>
                <a href=""><img src="../src/twitter.svg" alt="twitter_logo" height="50" width="50"/></a>
                <a href=""><img src="../src/discord.svg" alt="discord_logo" height="50" width="50"/></a>
            </div>
        </div>
    </footer>
</body>
<script src="../js/watch.js" type="module"></script>

</html>
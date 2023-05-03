<?php
session_start();
if (isset($_SESSION['user'])) {
    header('Location: ../');
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://accounts.google.com/gsi/client" async defer></script>
    <script src="https://code.jquery.com/jquery-3.6.4.js" integrity="sha256-a9jBBRygX1Bh5lt8GZjXDzyOB+bWve9EiO7tROUtj/E=" crossorigin="anonymous"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <link href="https://fonts.googleapis.com/css2?family=Mukta&family=Roboto:wght@100;300&family=Sansita&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../css/signin.css">
    <link rel="stylesheet" href="../css/navbar.css">
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
    </nav>
    <div class="form-container">
        <h1 class="title">Sign In</h1>
        <p class="subtext">Sign In first to access this website</p>
        <div class="error-container"></div>
        <h2 class="line short">
            <span class="text-in-line">Sign In with</span>
        </h2>
        <div class="buttons">
            <div id="g_id_onload" data-client_id="366938963776-tp966sp9fggu49p0gbaff4di9e65cueo.apps.googleusercontent.com" data-context="signin" data-ux_mode="popup" data-login_uri="http://localhost/anijutsu/user/signin.php" data-auto_prompt="false" data-callback="handleCredentialResponse">
            </div>
            <div class="g_id_signin" data-type="standard" data-shape="rectangular" data-theme="outline" data-text="signin_with" data-size="large" data-logo_alignment="left">
            </div>
        </div>
        <h2 class="line"><span class="text-in-line">or Sign In using Email/Username</span></h2>
        <form action="#" class="main-form">
            <input class="textbox border-normal" type="text" name="email" id="email" placeholder="E-mail/Username" />
            <input class="textbox border-normal" type="password" name="password" id="password" placeholder="Password">
            <input id="signup" class="btn-submit" type="submit" value="Sign In">
            <p class="subtext">No Account? <span class="link login"><a href="signup.php">Sign Up</a></span></p>
            <p class="copyright">&copy; All rights reserved.</p>
        </form>
    </div>
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
<script src="../js/user/signin.js" type="module"></script>
</html>

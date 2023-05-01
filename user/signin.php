<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://accounts.google.com/gsi/client" async defer></script>
    <script src="https://code.jquery.com/jquery-3.6.4.min.js" integrity="sha256-oP6HI9z1XaZNBrJURtCoUT5SUnxFr8s3BzRl+cbzUq8=" crossorigin="anonymous"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
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
        <h2 class="line short">
            <span class="text-in-line">Sign In with</span>
        </h2>
        <div class="buttons">
            <div id="g_id_onload" data-client_id="366938963776-tp966sp9fggu49p0gbaff4di9e65cueo.apps.googleusercontent.com" data-context="signin" data-ux_mode="popup" data-login_uri="http://localhost/anijutsu/user/login.php" data-auto_prompt="false" data-callback="handleCredentialResponse">
            </div>
            <div class="g_id_signin" data-type="standard" data-shape="rectangular" data-theme="outline" data-text="signin_with" data-size="large" data-logo_alignment="left">
            </div>
        </div>
        <h2 class="line"><span class="text-in-line">or Sign In using Email/Username</span></h2>
        <form action="#" class="main-form">
            <input class="textbox" type="text" name="email" id="email" placeholder="E-mail/Username" />
            <input class="textbox" type="text" name="password" id="password" placeholder="Password">
            <input id="signup" class="btn-submit" type="submit" value="Sign In">
            <p class="subtext">No Account? <span class="link login"><a href="signup.php">Sign Up</a></span></p>
            <p class="copyright">&copy; All rights reserved.</p>
        </form>
    </div>
</body>

</html>

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
    <script src="https://code.jquery.com/jquery-3.6.4.js" integrity="sha256-a9jBBRygX1Bh5lt8GZjXDzyOB+bWve9EiO7tROUtj/E=" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="../css/navbar.css">
    <link rel="stylesheet" href="../css/signup.css">
    <title>Signup</title>
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
        <h1 class="title">Create an Account</h1>
        <p class="subtext">You must have an account to access this website</p>
        <!-- <h2 class="line short">
            <span class="text-in-line">Continue with</span>
        </h2> -->
        <!-- <div class="buttons">
            <div id="g_id_onload" data-client_id="366938963776-tp966sp9fggu49p0gbaff4di9e65cueo.apps.googleusercontent.com" data-context="signin" data-ux_mode="popup" data-login_uri="http://localhost/anijutsu/user/login.php" data-auto_prompt="false" data-callback="handleCredentialResponse">
            </div>
            <div class="g_id_signin" data-type="standard" data-shape="rectangular" data-theme="outline" data-text="continue_with" data-size="large" data-logo_alignment="left">
            </div>
        </div> -->
        <h2 class="line short"><span class="text-in-line">Sign Up using Email</span></h2>
        <form action="#" class="main-form">
            <input class="textbox border-normal" type="text" name="firstname" id="firstname" placeholder="Firstname" />
            <input class="textbox border-normal" type="text" name="middle-initial" id="middle-initial" placeholder="Middle Initial (Optional)" />
            <input class="textbox border-normal" type="text" name="lastname" id="lastname" placeholder="Lastname" />
            <input class="textbox border-normal" type="text" name="email" id="email" placeholder="E-mail" />
            <input class="textbox border-normal" type="text" name="username" id="username" placeholder="Username" />
            <input class="textbox border-normal" type="password" name="password" id="password" placeholder="Password">
            <input class="textbox border-normal" type="password" name="conf-password" id="conf-password" placeholder="Confirm Password">
            <input type="checkbox" name="terms" id="terms">
            <label class="terms" for="terms" class="">I agree to the </label>
            <span class="link"><a href="terms.php" target="_blank">Terms and Conditions</a></span>
            <input id="signup" class="btn-submit" type="submit" value="Sign Up">
            <p class="subtext">Already have an Account? <span class="link login"><a href="signin.php">Sign in</a></span></p>
            <p class="copyright">All data provided is used by AniJutsu only<br>&copy; All rights reserved.</p>
        </form>
    </div>
</body>
<script src="../js/user/signup.js"></script>

</html>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://accounts.google.com/gsi/client" async defer></script>
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
        <h2 class="line short">
            <span class="text-in-line">Continue with</span>
        </h2>
        <div class="buttons">
            <div id="g_id_onload" data-client_id="366938963776-tp966sp9fggu49p0gbaff4di9e65cueo.apps.googleusercontent.com" data-context="signin" data-ux_mode="popup" data-login_uri="http://localhost/anijutsu/user/login.php" data-auto_prompt="false" data-callback="handleCredentialResponse">
            </div>
            <div class="g_id_signin" data-type="standard" data-shape="rectangular" data-theme="outline" data-text="continue_with" data-size="large" data-logo_alignment="left">
            </div>
        </div>
        <h2 class="line short"><span class="text-in-line">or Continue using Email</span></h2>
        <form action="#" class="main-form">
            <input class="textbox" type="text" name="firstname" id="firstname" placeholder="Firstname" />
            <input class="textbox" type="text" name="middle-initial" id="middle-initial" placeholder="Middle Initial (Optional)" />
            <input class="textbox" type="text" name="lastname" id="lastname" placeholder="Lastname" />
            <input class="textbox" type="text" name="email" id="email" placeholder="E-mail" />
            <input class="textbox" type="text" name="username" id="username" placeholder="Username" />
            <input class="textbox" type="text" name="password" id="password" placeholder="Password">
            <input class="textbox" type="text" name="conf-password" id="conf-password" placeholder="Confirm Password">
            <input type="checkbox" name="terms" id="terms">
            <label class="terms" for="terms" class="">I agree to the </label>
            <span class="link">Terms and Conditions</span>
            <input id="signup" class="btn-submit" type="submit" value="Sign Up">
            <p class="subtext">Already have an Account? <span class="link login">Sign in</span></p>
            <p class="copyright">&copy; All rights reserved.</p>
        </form>
    </div>
</body>
<script src="../js/user/signup.js"></script>

</html>
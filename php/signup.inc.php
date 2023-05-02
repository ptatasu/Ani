<?php
include_once 'connection.db.php';
// $middleInitial = $_POST['middleInitial'];
// echo json_encode($firstName);
//  Function for Sanitizing all input data
function sanitize_input($data)
{
    $data = trim($data);
    $data = stripcslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

// Function for validating if input is valid name
function isValidName($name)
{
    if (preg_match("/^[a-zA-Z .]*$/", $name)) {
        return true;
    } else {
        return false;
    }
}
// Function for validating if input is valid username
function isValidUserName($name)
{
    // ^[a-zA-Z]+[a-zA-Z0-9_\.]*$
    if (preg_match("/^[a-zA-Z]+[a-zA-Z0-9_\.]*$/", $name)) {
        return true;
    } else {
        return false;
    }
}

// Function for checking if email is existing in the database, return boolean true or false
// function isEmailExist($email)
// {
//     $email = mysqli_real_escape_string($GLOBALS['conn'], $email);
//     $CheckEmailQuery = mysqli_query($GLOBALS['conn'], "SELECT email FROM jobseeker WHERE email = '$email'");
//     if (mysqli_num_rows($CheckEmailQuery) > 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

if (isset($_POST['signup'])) {

// Validation for Firstname
    if (empty($_POST['firstName'])) {
        $firstNameErr = array('status' => 'error', 'msg' => 'Firstname is required.');
    } else if (!isValidName($_POST['firstName'])) {
        $firstNameErr = array('status' => 'error', 'msg' => 'Only characters are allowed.');
    } else {
        $firstNameErr = array('status' => 'success');
        $firstName = sanitize_input($_POST['firstName']);
    }

// Validation for Lastname
    if (empty($_POST['lastName'])) {
        $lastNameErr = array('status' => 'error', 'msg' => 'Lastname is required.');
    } else if (!isValidName($_POST['lastName'])) {
        $lastNameErr = array('status' => 'error', 'msg' => 'Only characters are allowed.');
    } else {
        $lastNameErr = array('status' => 'success');
        $lastName = sanitize_input($_POST['lastName']);
    }

// Validation for Email
    if (empty($_POST['email'])) {
        $emailErr = array('status' => 'error', 'msg' => 'Email is required.');
    } elseif (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
        $emailErr = array('status' => 'error', 'msg' => 'Email is invalid.');
        // elseif (isEmployer($_POST['email']) || isJobseeker($_POST['email'])) {
        //     $emailErr = array('status' => 'error', 'msg' => 'Email is already used.');
    } else {
        $emailErr = array('status' => 'success');
        $email = $_POST['email'];
    }

// Validation for Username
    if (empty($_POST['userName'])) {
        $userNameErr = array('status' => 'error', 'msg' => 'Username is required.');
    } else if (!isValidUserName($_POST['userName'])) {
        $userNameErr = array('status' => 'error', 'msg' => 'Only alphabets, alphanumeric, . and _ are allowed.');
    } else {
        $userNameErr = array('status' => 'success');
        $userName = sanitize_input($_POST['userName']);
    }

// Validation for Password
    if (empty($_POST['password'])) {
        $passwordErr = array('status' => 'error', 'msg' => 'Password is required.');
    } elseif (strlen($_POST['password']) < 8 || strlen($_POST['password']) > 30) {
        $passwordErr = array('status' => 'error', 'msg' => 'Password must be between 8 and 30 characters.');
    } else {
        $passwordErr = array('status' => 'success');
        $password = $_POST['password'];
        $password = password_hash($pass, PASSWORD_DEFAULT);
    }

// Validation for Confirm Password
    if (empty($_POST['confPassword'])) {
        $confPasswordErr = array('status' => 'error', 'msg' => 'Confirm password is required.');
    } elseif ($_POST['password'] != $_POST['confPassword']) {
        $confPasswordErr = array('status' => 'error', 'msg' => 'Confirm password does not match.');
    } else {
        $confPasswordErr = array('status' => 'success');
    }
    if (
        $firstNameErr['status'] == 'success' && $lastNameErr['status'] == 'success' && $emailErr['status'] == 'success' && $userNameErr['status'] == 'success' && $passwordErr['status'] == 'success' && $confPasswordErr['status'] == 'success'
    ) {
        $first = mysqli_real_escape_string($conn, $firstName);
        $middle = mysqli_real_escape_string($conn, $_POST['middleInitial']);
        $last = mysqli_real_escape_string($conn, $lastName);
        $eMail = mysqli_real_escape_string($conn, $email);
        $user = mysqli_real_escape_string($conn, $userName);
        $pswd = mysqli_real_escape_string($conn, $password);
        $sql = 'INSERT INTO `users`(`first_name`, `middle_initial`, `last_name`, `email`, `username`, `password`) VALUES (?, ?, ?, ?, ?, ?)';
        $stmt = mysqli_stmt_init($conn);
        if (!mysqli_stmt_prepare($stmt, $sql)) {
            echo json_encode('SQL Error');
        } else {
            mysqli_stmt_bind_param($stmt, 'ssssss', $first, $middle, $last, $eMail, $user, $password);
            mysqli_stmt_execute($stmt);
        }

        echo json_encode($response);
        $response = array('firstName' => $first, 'lastNameErr' => $last, 'middleInitial' => $middle, 'email' => $eMail, 'username' => $user, 'password' => $pswd);

    } else {
        // If not successful, return the error reponse
        $response = array(
            'status' => 'error', 'firstNameErr' => $firstNameErr, 'lastNameErr' => $lastNameErr,
            'emailErr' => $emailErr, 'userNameErr' => $userNameErr, 'passwordErr' => $passwordErr, 'confPaswordErr' => $confPasswordErr,
        );
    }

    echo json_encode($response);
    // echo json_encode('nagana');
}

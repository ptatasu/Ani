<?php
include_once 'connection.db.php';
if (isset($_POST['signin'])) {

    //  Function for Sanitizing all input data
    function sanitize_input($data)
    {
        $data = trim($data);
        $data = stripcslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    function isValidUserName($name)
    {
        if (preg_match("/^[a-zA-Z]+[a-zA-Z0-9_\.]*$/", $name)) {
            return true;
        } else {
            return false;
        }
    }

    function isValidEmail($name)
    {
        if (preg_match("/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/", $name)) {
            return true;
        } else {
            return false;
        }
    }

    // Validation for Username
    if (empty($_POST['userName'])) {
        $userNameErr = array('status' => 'error', 'msg' => 'Email/Username is required.');
    } else if (!isValidUserName($_POST['userName']) && !isValidEmail($_POST['userName'])) {
        $userNameErr = array('status' => 'error', 'msg' => 'Email/Username is invalid.');
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
        $pass = $_POST['password'];
        $password = password_hash($pass, PASSWORD_DEFAULT);
    }

    if ($userNameErr['status'] == 'success' && $passwordErr['status'] == 'success') {
        $sql = 'SELECT * FROM users WHERE email = ? OR username = ?;';
        $stmt = mysqli_stmt_init($conn);
        if (!mysqli_stmt_prepare($stmt, $sql)) {
            $response = array('status' => 'error', 'msg' => 'SQL ERROR');
        } else {
            mysqli_stmt_bind_param($stmt, 'ss', $userName, $userName);
            mysqli_stmt_execute($stmt);
            $res = mysqli_stmt_get_result($stmt);
            if ($row = mysqli_fetch_assoc($res)) {
                if (password_verify($pass, $row['password'])) {
                    $_SESSION['user'] = $row['first_name'] . ' ' . $row['last_name'];
                    $response = array('status' => 'success');
                } else {
                    $response = array('status' => 'error', 'userNameErr' => $userNameErr, 'passwordErr' => $passwordErr, 'msg' => 'Wrong Password');
                }
            } else {
                $response = array('status' => 'error', 'userNameErr' => $userNameErr, 'passwordErr' => $passwordErr, 'msg' => 'No user found');
            }
        }
    } else {
        $response = array(
            'status' => 'error', 'userNameErr' => $userNameErr, 'passwordErr' => $passwordErr, 'msg' => '');
    }

    echo json_encode($response);
} else if (isset($_POST['google'])) {
    $_SESSION['user'] = $_POST['first_name'];
    $_SESSION['pfp'] = $_POST['pfp'];
    $response = array('status' => 'success', 'data' => $_SESSION['user'], 'pfp' => $_SESSION['pfp']);
    echo json_encode($response);
}

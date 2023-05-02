<?php
include_once 'connection.db.php';
if (isset($_POST['signin'])) {
    $user = $_POST['user'];
    $pass = $_POST['pass'];
    $sql = 'SELECT * FROM users WHERE email = ? OR username = ?;';
    $stmt = mysqli_stmt_init($conn);
    if (!mysqli_stmt_prepare($stmt, $sql)) {
        echo json_encode('SQL Error');
    } else {
        mysqli_stmt_bind_param($stmt, 'ss', $user, $user);
        mysqli_stmt_execute($stmt);
        $res = mysqli_stmt_get_result($stmt);
        if ($row = mysqli_fetch_assoc($res)) {
            if (password_verify($pass, $row['password'])) {
                $_SESSION['user'] = $row['first_name'];
                $response = array('status' => 'success');
            } else {
                $response = array('status' => 'error', 'msg' => 'Wrong Password');
            }
        } else {
            $response = array('status' => 'error', 'msg' => 'No user found');
        }
    }
    echo json_encode($response);
} else if (isset($_POST['google'])) {
    $_SESSION['user'] = $_POST['first_name'];
    $_SESSION['pfp'] = $_POST['pfp'];
    $response = array('status' => 'success', 'data' => $_SESSION['user'], 'pfp' => $_SESSION['pfp']);
    echo json_encode($response);
}

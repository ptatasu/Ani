<?php
include_once 'connection.db.php';

$sql = 'SELECT * FROM users;';

$res = mysqli_query($conn, $sql);
// $result = mysqli_num_rows($res);

while ($row = mysqli_fetch_assoc($res)) {
    print_r($row);
}

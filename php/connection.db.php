<?php
$name = 'localhost';
$username = 'root';
$pass = '';
$dtbName = 'anijutsu';

$conn = mysqli_connect($name, $username, $pass, $dtbName);

if (!$conn) {
    die("Connection Failed: " . mysqli_connect_error());
}
session_start();

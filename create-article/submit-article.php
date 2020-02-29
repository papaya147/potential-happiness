<?php
session_start();
$_SESSION['user'] = "Abhinav";
error_reporting(0);

$file_name = $_POST['title'];
$count = $_POST['count'];

$path = "../articles/" . $_SESSION['user'] . "/";
try {
    mkdir($path);
} catch (Exception $e) {
}

$file = fopen($path . $file_name . ".html", "a");

$head = '
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="../articles/css/styles.css">
        <link rel="stylesheet" type="text/css" href="../css/styles.css">
        <script src=".../bootstrap/js/bootstrap.min.js"></script>
        <link rel="stylesheet" type="text/css" href=".../bootstrap/css/bootstrap.min.css">
    </head>
    <body>
        <div align="center">
';
fwrite($file, $head);

$file_name = '<h2 class="topic">' . $file_name . '</h2>';
fwrite($file, $file_name);

$var = 0;
while ($var < $count) {
    try {
        $p = "paragraph" . strval($var) . "0";
        $para = '<p class="para">' . $_POST[$p] . '</p>';
        fwrite($file, $para);
    } catch (Exception $e) {
    }
    $var++;
}

fwrite($file, "</div></body></html>");

fclose($file);

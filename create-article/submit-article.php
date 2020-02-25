<?php
$file_name = $_POST['title'];
$file_contents = $_POST['article'];

mkdir("../articles/" . $file_name);

$title = "<h2>" . $file_name . "</h2>";

$article_file = fopen("../articles/" . $file_name . "/" . $file_name . ".txt", 'w');
fwrite($article_file, $file_contents);
fclose($article_file);

<?php
function endsWith($haystack, $needle)
{
    $length = strlen($needle);
    if ($length == 0) {
        return true;
    }

    return (substr($haystack, -$length) === $needle);
}

$files = scandir("//articles/Suggested");

$var = 0;
while ($var < count($files)) {
    if (!endsWith($files[$var], ".html"))
        unset($files[$var]);
    $var++;
}

echo $files;

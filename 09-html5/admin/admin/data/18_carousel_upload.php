<?php
@$file=$_FILES["mypic"];
$type = strstr($_FILES["mypic"]["name"], '.');
move_uploaded_file(
    $file["tmp_name"],
    "../img/".time().rand(1,9999).$type
);
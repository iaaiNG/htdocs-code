<?php
$file=$_FILES["file"];
move_uploaded_file(
    $file["tmp_name"],
    "upload/".$file["name"]
);
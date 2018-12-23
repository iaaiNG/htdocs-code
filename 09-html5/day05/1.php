<?php
    header("Content-Type:application/json");
    $output = '[
        {"label":"HTML","value":4},
        {"label":"CSS","value":5},
        {"label":"JS","value":9},
        {"label":"DOM","value":8},
        {"label":"AJAX","value":8},
        {"label":"H5","value":6}
    ]';
    echo ($output);
<?php
    header("Content-Type:application/json");
    $output = '[
        {"label":"一季度","value":120},
        {"label":"二季度","value":220},
        {"label":"三季度","value":320},
        {"label":"四季度","value":180}
    ]';
    echo $output;
<?php 
/*
$output = exec("python partidos.py");
echo $output;
*/
$json = json_encode($_POST);
$json = str_replace('"', '\"', $json);
echo $json;
$output = exec('python partidos.py '.$json);
$output = str_replace("'", '"', $output);
echo $output;

?>
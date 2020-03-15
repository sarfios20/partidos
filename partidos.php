<?php 
/*
$output = exec("python partidos.py");
echo $output;
*/
$json = json_encode($_POST);
$output = exec('python partidos.py "'.$json.'"');
echo $output;

?>
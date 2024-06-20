<?php

$dati = file_get_contents("data.json");

header('Content-Type: application/json');
echo $dati;

?>
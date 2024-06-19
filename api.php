<?php

$to_do = [
    [
        "task" => "Esempio di compito da svolgere #1",
        "statoTask" => "To-Do",
        "scadenza" => "1-1-2001"
    ],
    [
        "task" => "Esempio di compito da svolgere #2",
        "statoTask" => "To-Do",
        "scadenza" => "2-1-2001"
    ],
    [
        "task" => "Esempio di compito da svolgere #3",
        "statoTask" => "To-Do",
        "scadenza" => "3-1-2001"
    ],
    [
        "task" => "Esempio di compito da svolgere #4",
        "statoTask" => "To-Do",
        "scadenza" => "4-1-2001"
    ],
    [
        "task" => "Esempio di compito da svolgere #5",
        "statoTask" => "To-Do",
        "scadenza" => "5-1-2001"
    ],
    [
        "task" => "Esempio di compito da svolgere #6",
        "statoTask" => "To-Do",
        "scadenza" => "6-1-2001"
    ]
];
$toJson = json_encode($to_do);
echo $toJson;

?>
<?php
// Establece la cabecera para indicar que la respuesta es JSON
header('Content-Type: application/json');
// Datos de ejemplo que se enviarán en la respuesta JSON
$datos = [
    "nombre"    => "Juan",
    "edad"      => 30,
    "profesion" => "Programador"
];
// Codifica el array a formato JSON
$json = json_encode($datos);
// Envía la respuesta JSON
echo $json;
?>
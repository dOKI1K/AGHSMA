<?php

    $destinatario = 'lahuenesc@gmail.com';

    $nombre = $_POST['name'];
    $email = $_POST['email'];
    $telefono = $_POST['telefono'];
    $mensaje = $_POST['message'];
  
    $cabecera = "Para AHGSMA";
    $mensajeCompleto = $mensaje . "\nAtentamente: " . $nombre;

    mail($destinatario, $telefono, $mensajeCompleto, $cabecera);
?>
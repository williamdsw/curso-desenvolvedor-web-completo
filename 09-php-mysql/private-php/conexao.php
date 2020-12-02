<?php 
    /* Parametros */
    $servidor = "localhost";
    $usuario = "root";
    $senha = "root";
    $database = "andes";

    /* Conecta */
    $conecta = mysqli_connect ($servidor, $usuario, $senha, $database);

    /* Verifica conexao */
    if (mysqli_connect_errno ())
        die ("Conexão falhou: " . mysqli_connect_errno ());
?>
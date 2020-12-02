<?php

    function abre_conexao ()
    {
        /* Parametros */
        $server = "localhost";
        $user = "root";
        $password = "";
        $database = "andes";

        /* Abre conexao */
        $conecta = mysqli_connect ($server, $user, $password, $database);
        
        if (mysqli_connect_errno ())
        {
            die ("Erro na conexão");
            return null;
        }
        
        return $conecta;
    }

    function fecha_conexao ($conecta)
    {
        mysqli_close ($conecta);
    }
?>
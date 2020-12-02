<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title> Liberar Dados Consultados </title>
    </head>
    <body>
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

            /* SQL */
            $consulta = " SELECT * FROM categorias ";

            /* Busca */
            $query = mysqli_query ($conecta, $consulta);

            if (!$query)
                die ("Falha na consulta ao banco");
        
            /* Lista ... */
            echo "<ul>";
        
            /* Itera */
            while ($registro = mysqli_fetch_assoc ($query))
            {
                /* Busca valor pelo nome da coluna */
                echo "<li>" . $registro["nomecategoria"] . "</li>";
            }
            
            echo "</ul>";
            
            /* "mysqli_free_result ()" = Libera os dados da consulta no servidor */
            mysqli_free_result ($query);
            
            /* "mysqli_close ()" = Fecha a conexao */
            mysqli_close ($conecta);
        ?>
    </body>
</html>
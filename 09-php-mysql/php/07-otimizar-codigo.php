<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title> Otimizando Código </title>
    </head>
    <body>
        <?php
            /* Utilizando importacao para manter seguranca */
            require_once ("../private-php/conexao.php");

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
            
            /* Libera dados */
            mysqli_free_result ($query);
            
            /* Fecha conexao */
            mysqli_close ($conecta);
        ?>
    </body>
</html>
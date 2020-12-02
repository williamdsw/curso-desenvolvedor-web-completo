<?php 
    $nome = "Curso PHP Fundamental";
?>

<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title> Funções Strings </title>
    </head>

    <body>
        <?php
            /* Printa conteudo */
            echo $nome;
            echo "<br>";
        
            /* strlen - Retorna numero de letras */
            echo strlen ($nome);
            echo "<br>";
                
            /* stripos  - Retorna primeira ocorrencia */
            echo stripos ($nome, "u");
            echo "<br>";

            /* strripos - Retorna ultima ocorrencia */
            echo strripos ($nome, "u");
            echo "<br>";
            
            /* strtolower - converte para letras minusculas */
            echo strtolower ($nome);
            echo "<br>";

            /* strtoupper - converte para letras maiusculas */
            echo strtoupper ($nome);
            echo "<br>";

            /* substr_count - Retorna quantas ocorrencias existem 
             * diferenciando letras maiusculas e minusculas */
            echo substr_count ($nome, "c");
        ?>
    </body>
</html>
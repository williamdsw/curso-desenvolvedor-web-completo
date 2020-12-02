<?php 
    /* Exemplo de array */
    $_times = array ("São Paulo", "Palmeiras", "Santos", "Corinthians");
?>
    

<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title> Arrays </title>
    </head>
    <body>
        <?php
            /* Printando itens individuais do array */
            echo "Primeiro Time: " . $_times[0] . "<br>";
            echo "Segundo Time: " . $_times[1] . "<br>";
            echo "Terceiro Time: " . $_times[2] . "<br>";
            echo "Quarto Time: " . $_times[3] . "<br>";
        
            /* Adicionar item ao array */         
            $_times[] = "Portuguesa";
        
            /* count (array) = Retorna o numero de itens do array */
            echo "Número de times: " . count ($_times) . "<br>";
        ?>
        
        <pre>
            <?php  print_r($_times); ?>
        </pre>
        
    </body>
</html>
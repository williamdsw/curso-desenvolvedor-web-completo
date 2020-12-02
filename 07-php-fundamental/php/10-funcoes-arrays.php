<?php 
    $lost = array (23, 15, 16, 8, 42, 4);
?>

<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title> Funções Arrays </title>
    </head>
    <body>
        <?php
            /* Printa array */
            print_r ($lost);
            echo "<br>";
        
            /* max (array) = Retorna maior valor do array */
            echo "Maior número: " . max ($lost). "<br>";
        
            /* min (array) = Retorna menor valor do array */
            echo "Maior número: " . min ($lost). "<br>";
        
            /* array_sum (array) = Retorna soma de itens do array */
            echo "Maior número: " . array_sum ($lost). "<br>";
            
            /* sort (array) = Ordena array de forma crescente */
            sort ($lost);
        
            print_r ($lost);
            echo "<br>"; 
        
            /* rsort (array) = Ordena array de forma descrescente */
            rsort ($lost);
        
            print_r ($lost);
            echo "<br>";   
        
            /* shuffle (array) = Ordena array de forma aleatoria */
            shuffle ($lost);
        
            print_r ($lost);
            echo "<br>";
        ?>
    </body>
</html>
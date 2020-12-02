<?php
    /* Exemplo de variaveis int */
    $salario = 800;
    $meses = 3;
?>

<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title> Números Inteiros </title>
    </head>

    <body>
        <?php 
            /* Multiplicacao e Divisao */
            echo "Trimestre: " . ($salario * $meses);
            echo "<br>";
            echo "Quinzena: " . ($salario / 2);
            echo "<br>";

            /* Exponencial */
            echo "Exponencial: " . pow(6,3);
            echo "<br>";
                
            /* Raiz Quadrada */
            echo "Raiz Quadrada: " . sqrt(36);
            echo "<br>";

            /* Randomico Generica */
            echo "Randômico: " . rand();
            echo "<br>";

            /* Randomico entre um intervalo */
            echo "Randômico entre 1 a 10: " . rand(1,10);
            echo "<br>";

            /* Valor absoluto */
            echo "Absoluto: " . abs(-300);
            echo "<br>";
        ?>
    </body>
</html>
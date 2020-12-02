<?php
    /* Exemplo de floats */
    $salario = 800.55;
    $gasolina = 2.79891273;
?>

<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title> Números Float </title>
    </head>

    <body>
        
        <?php
            /* is_numeric () = Verifica se a variavel e numerica */
            echo "O $salario é um número? " . is_numeric ($salario);
            echo "<br>";
            echo "O $gasolina é um número? " . is_numeric ($gasolina);
            echo "<br><br>";

            /* is_int () = Verifica se a variavel e um integer */
            echo "O $salario é um inteiro? " . is_int ($salario);
            echo "<br>";
            echo "O $gasolina é um inteiro? " . is_int ($gasolina);
            echo "<br><br>";

            /* is_float () = Verifica se a variavel e um ponto flutuante */
            echo "O $salario é um float? " . is_float ($salario);
            echo "<br>";
            echo "O $gasolina é um float? " . is_float ($gasolina);
            echo "<br><br>";
        
            /* round () = Arredonda o numero para cima ou baixo */
            echo "Gasolina arredondada: " . round ($gasolina);
            echo "<br>";
            
            /* floor () = Arredonda o numero para baixo */
            echo "Gasolina arredondada: " . floor ($gasolina);
            echo "<br>";
        
            /* ceil () = Arredonda o numero para cima */
            echo "Gasolina arredondada: " . ceil ($gasolina);
            echo "<br>";
        ?>
        
    </body>
</html>
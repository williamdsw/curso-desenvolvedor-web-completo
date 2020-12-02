<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title> Função com Retorno </title>
    </head>
    <body>
        <?php
            /* Exemplo de funcao com retorno */
            function calcularDiaria1 ()
            {
                return 800 / 30;
            }
        
            function calcularDiaria2 ()
            {
                $salario = 800;
                $dias = 30;
                
                /* number_format (var, decimal_places) = Formata um numero de acordo 
                 * com o numero de casas decimais informado */
                return number_format ($salario / $dias, 2);
            }
        
            /* Printa */
            echo "Valor da diária (1): " . calcularDiaria1 () . "<br>";
            echo "Valor da diária (2): " . calcularDiaria2 () . "<br>";
        ?>
    </body>
</html>
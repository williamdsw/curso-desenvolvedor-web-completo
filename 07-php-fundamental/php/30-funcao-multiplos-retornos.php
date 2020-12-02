<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title> Múltiplos Retornos de uma Função </title>
    </head>
    <body>
        <?php
            /* Exemplo de múltiplos retornos de uma função */
            function calcularDiaria ($salario, $numero_dias, $cotacao)
            {
                $real = number_format ($salario / $numero_dias, 2);
                $dolar = number_format (($salario / $numero_dias) / $cotacao, 2);
                
                /* Retorno de array para multiplos valores */
                return array ($real, $dolar);
            }
        
            /* Exemplo com array */
            $diaria_array = calcularDiaria (1500, 30, 3.6);
        
            echo "Valor da diária: " . $diaria_array[0] . " reais <br>";
            echo "Valor da diária: " . $diaria_array[1] . " doláres <br>";  
        
            /* Exemplo com list, onde pode definir lista de variaveis */
            list ($resultado_real, $resultado_dolar) = calcularDiaria (1500, 30, 3.6);
        
            echo "Valor da diária: " . $resultado_real . " reais <br>";
            echo "Valor da diária: " . $resultado_dolar . " doláres <br>";
        ?>
    </body>
</html>
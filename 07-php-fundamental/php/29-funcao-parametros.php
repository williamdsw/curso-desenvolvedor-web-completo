<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title> Função com Parâmetros </title>
    </head>
    <body>
        <?php
            /* Exemplo de parametros na funcao */
            function calcularDiaria ($salario, $numero_dias)
            {
                return number_format ($salario / $numero_dias, 2);
            }
        
            $diaria = calcularDiaria (1000, 28);
            echo "Valor da diária: " . $diaria . " reais ";
        ?>
    </body>
</html>
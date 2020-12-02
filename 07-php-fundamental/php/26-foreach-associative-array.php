<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title> Foreach Associative Array </title>
    </head>
    <body>
        <?php
            $agenda = array 
            (
                "nome" => "José",
                "sobrenome" => "Silva",
                "salario" => 1000.99
            );
        
            /* foreach para array associativo, onde necessita passar a "chave" e "valor" */
            foreach ($agenda as $atributo => $valor)
            {
                echo $atributo . " : " . $valor . "<br>";
            }
        ?>
    </body>
</html>
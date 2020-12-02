<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title> Condição Else / Else If </title>
    </head>
    <body>
        <?php
            $primeiro = 5;  //A
            $segundo = 3;   //B
        
            /* Exemplo de "if", "else-if" e "else" */
            if ($primeiro > $segundo)
            {
                echo "A é maior do que B";
            }
            else if ($primeiro < $segundo)
            {
                echo "A é menor do que B";
            }
            else 
            {
                echo "A é igual a B";
            }
        ?>
    </body>
</html>
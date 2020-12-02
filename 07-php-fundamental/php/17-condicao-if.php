<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title> Condição IF </title>
    </head>
    <body>
        <?php
            $primeiro = 5;
            $segundo = 3;
        
            /* IF sem chaves */
            if ($primeiro > $segundo)
                echo "A é maior do que B (Sem chaves) <br>";
        
            /* IF com chaves */
            if ($primeiro > $segundo)
            {
                echo "A é maior do que B (Com chaves) <br>";
            }
        
            $fumante = true;
        
            /* booleano */
            if ($fumante)
            {
                echo "Fumante não poderá entrar <br>";
            }
        
            /* negacao de booleano */
            if (!$fumante)
            {
                echo "Não fumante poderá entrar <br>";
            }
        ?>
    </body>
</html>
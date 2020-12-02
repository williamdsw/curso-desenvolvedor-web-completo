<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title> Sorteio da Mega Sena </title>
    </head>
    <body>
        <?php
            $megasena = array ();
            $contador = 0;
        
            while ($contador < 6)
            {
                /* Numero randomico entre 1 a 60 */
                $sorteio = rand (1, 60);
                
                /* Verificacao de valor duplicado */
                if (!in_array ($sorteio, $megasena))
                {
                    $megasena[] = $sorteio;
                    $contador++;
                }
            }
        
            /* Ordena */
            sort ($megasena);
        
            echo "Números sorteados: <br>";
        
            /* Exibe */
            foreach ($megasena as $numero)
            {
                echo $numero . " ";
            }
        ?>
    </body>
</html>
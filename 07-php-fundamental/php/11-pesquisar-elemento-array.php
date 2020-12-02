<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title> Pesquisar elementos em Arrays </title>
    </head>
    <body>
        <?php
            $times = array ("São Paulo", "Palmeiras", "Santos", "Corinthians");
        
            /* in_array (item, array) = Verifica se um item existe no array */
            echo "Existe o time São Paulo? " . in_array ("São Paulo", $times) . "<br>";
            echo "Existe o time Portuguesa? " . in_array ("Portuguesa", $times) . "<br>";
            
            /* array_search (item, array) = Retorna o index do array */
            echo "Qual index do time São Paulo? " . array_search ("São Paulo", $times) . "<br>";
            echo "Qual index do time Portuguesa? " . array_search ("Portuguesa", $times) . "<br>";
        ?>
    </body>
</html>
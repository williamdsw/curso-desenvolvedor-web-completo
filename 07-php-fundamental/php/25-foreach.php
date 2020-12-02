<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title> Foreach </title>
    </head>
    <body>
        <?php
            $times = array ("São Paulo", "Palmeiras", "Santos", "Corinthians");
        
            /* foreach para arrays */
            foreach ($times as $time)
            {
                echo "Time: " . $time . "<br>";
            }
        ?>
    </body>
</html>
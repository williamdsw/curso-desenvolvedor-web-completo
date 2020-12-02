<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title> For </title>
    </head>
    <body>
        <?php
            /* For "comum" */
            for ($contador = 1; $contador <= 20; $contador++)
            {
                echo rand (1, 1000) . " ";
            }
        
            echo "<br>";
        
            /* For sem delimitador, mas como break dentro */
            for ($contador = 1; ; $contador++)
            {
                if ($contador == 10)
                    break;
                
                echo rand (1, 1000) . " ";
            }
        ?>
    </body>
</html>
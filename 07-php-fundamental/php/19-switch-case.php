<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title> Switch Case </title>
    </head>
    <body>
        <?php
            $dia = "domingo";
        
            switch ($dia)
            {
                case "segunda":
                {
                    echo "Hoje ainda é segunda :( <br>";
                    break;
                }
                    
                case "quarta":
                {
                    echo "Hoje é quarta de futebol :) <br>";
                    break;
                }
                                        
                case "sexta":
                {
                    echo "Oba \o/ chegou o grande dia <br>";
                    break;
                }
                                                        
                case "sabado": case "domingo":
                {
                    echo "Final de Semana é pra descansar <br>";
                    break;
                }
                    
                default:
                {
                    echo "Trabalha ai que está chegando <br>";
                    break;
                }
            }
        ?>
    </body>
</html>
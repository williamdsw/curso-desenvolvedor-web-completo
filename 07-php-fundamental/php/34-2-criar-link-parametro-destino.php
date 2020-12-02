<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title> Criar Links PHP com parâmetros </title>
    </head>
    <body>
        <?php
            /* Array de imagens */
            $salada = array ("../imagens/laranja.jpg", "../imagens/maca.jpg", "../imagens/abacate.jpg");
        
            /* $_GET[str] = Permite recuperar um parametro enviado pela URL / form */
            $codigo = $_GET["codigo"];
        ?>
        
        <!-- Informa resultado no "src" -->
        <img src="<?php echo $salada[$codigo]; ?>" alt="fruta">
    </body>
</html>
<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title> Diferenças entre Include e Required </title>
    </head>
    <body>
        <?php
            /* "include ()" = Inclui uma pagina PHP, 
             * e nao termina a execucao caso houverem erros */
            include ("06-02-exemplo.php");
            echo "<br";
        
            /* "required ()" = Inclui uma pagina PHP, 
             * porem termina a execucao caso houverem erros */
            require ("06-03-exemplo.php");
            echo "<br";
        
            /* "include_once ()" = Inclui uma pagina PHP apenas uma vez */
            include_once ("06-02-exemplo.php");
            echo "<br";
        
            /* "require_once ()" = Inclui uma pagina PHP apenas uma vez */
            require_once ("06-03-exemplo.php");
            echo "<br";
        ?>
    </body>
</html>
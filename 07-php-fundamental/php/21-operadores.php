<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title> Operadores </title>
    </head>
    <body>
        <?php
            $salario = 800;
            $premio = "800";
        
            /* == igual */
            if ($salario == $premio)
            {
                echo "Salário é igual ao Prêmio <br>";
            }     
        
            /* > maior que */
            if ($salario > $premio)
            {
                echo "Salário é maior ao Prêmio <br>";
            }       
        
            /* >= maior ou igual que */
            if ($salario >= $premio)
            {
                echo "Salário é maior ou igual ao Prêmio <br>";
            }   
        
            /* < menor que */
            if ($_salario < $premio)
            {
                echo "Salário é menor ao Prêmio <br>";
            }  
        
            /* <= menor ou igual que */
            if ($_salario <= $premio)
            {
                echo "Salário é menor ou igual ao Prêmio <br>";
            }         
        
            /* != diferente que */
            if ($salario != $premio)
            {
                echo "Salário é diferente a Prêmio <br>";
            }   
        
            /* === igual em valor e tipo */
            if ($salario === $premio)
            {
                echo "Salário é idêntico a Prêmio <br>";
            }
        ?>
    </body>
</html>
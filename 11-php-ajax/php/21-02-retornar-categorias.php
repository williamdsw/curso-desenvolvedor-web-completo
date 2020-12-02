<?php 
    $callback = isset ($_GET["callback"]) ?  $_GET["callback"] : false;
    
    /* Abre conexao */
    require_once ("../private-php/conexao.php");
    $conecta = abre_conexao ();

    /* Query */
    $sql = " SELECT categoriaID, nomecategoria FROM categorias ";
    $result = mysqli_query ($conecta, $sql);

    $retorno = array ();
    while ($linha = mysqli_fetch_object ($result)) 
    {
        $retorno[] = $linha;
    } 	

    echo ($callback ? $callback . '(' : '') . json_encode ($retorno) . ($callback? ')' : '');
    
    fecha_conexao ($conecta);
?>
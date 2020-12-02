<?php 
    $callback = isset ($_GET["callback"]) ?  $_GET["callback"] : false;
    
    /* Abre conexao */
    require_once ("../private-php/conexao.php");
    $conecta = abre_conexao ();

    if (isset ($_GET["categoriaID"])) 
    {
        $catID = $_GET["categoriaID"];
    } 
    else 
    {
        $catID = 1;
    }

    /* Query */
    $sql  = " SELECT produtoID, nomeproduto FROM produtos ";
    $sql .= " WHERE categoriaID = {$catID} ";
    $result = mysqli_query ($conecta, $sql);
    
    /* Itera */
    $retorno = array ();
    while ($linha = mysqli_fetch_object ($result)) 
    {
        $retorno[] = $linha;
    } 	

    echo json_encode ($retorno);
    
    fecha_conexao ($conecta);
?>
  <?php
    include_once ("../private-php/conexao.php");

    if (isset ($_POST["transportadoraID"])) 
    {
        $conecta = abre_conexao ();
        
        /* Parametros */
        $transportadoraID = $_POST["transportadoraID"];
        $nome = $_POST["nome_transportadora"];
        $endereco = $_POST["endereco"];
        $cidade = $_POST["cidade"];
        $estadoID = $_POST["estado"];
        
        /* Query */
        $query = " UPDATE transportadoras ";
        $query .= " SET nometransportadora = '{$nome}', ";
        $query .= "     endereco = '{$endereco}', ";
        $query .= "     cidade = '{$cidade}', ";
        $query .= "     estadoID = {$estadoID} ";
        $query .= " WHERE transportadoraID = {$transportadoraID} ";
        
        $result = mysqli_query ($conecta, $query);
        
        /* Retorno do resultado */
        $retorno = array ();
        $retorno["sucesso"] = ($result ? true : false);
        $retorno["mensagem"] = ($result ? "Transportadora atualizada com sucesso!" : "Falha no sistema, tente mais tarde");
        
        echo json_encode ($retorno);
        
        fecha_conexao ($conecta);
    }
?>
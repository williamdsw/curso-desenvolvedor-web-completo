  <?php
    include_once ("../private-php/conexao.php");

    if (isset ($_POST["nometransportadora"])) 
    {
        $conecta = abre_conexao ();
        
        /* Parametros */
        $nome = $_POST["nometransportadora"];
        $endereco = $_POST["endereco"];
        $cidade = $_POST["cidade"];
        $estadoID = $_POST["estados"];
        
        /* Query */
        $query = " INSERT INTO transportadoras ";
        $query .= " (nometransportadora, endereco, cidade, estadoID) ";
        $query .= " VALUES ";
        $query .= " ('$nome','$endereco','$cidade', $estadoID) ";
        
        $result = mysqli_query ($conecta, $query);
        
        /* Retorno do resultado */
        $retorno = array ();
        $retorno["sucesso"] = ($result ? true : false);
        $retorno["mensagem"] = ($result ? "Transportadora inserida com sucesso!" : "Falha no sistema, tente mais tarde");
        
        echo json_encode ($retorno);
        
        fecha_conexao ($conecta);
    }
?>
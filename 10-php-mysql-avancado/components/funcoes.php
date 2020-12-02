<?php

    function gerar_nome_unico ()
    {
        /* Parametros */
        $alfabeto = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        $tamanho = 30;
        $letra = "";
        $resultado = "";
        
        /* Itera para gerar nome aleatorio */
        for ($index = 0; $index < 12; $index++)
        {
            $letra = substr ($alfabeto, rand (0, strlen ($alfabeto) - 1), 1);
            $resultado .= $letra;
        }
        
        /* Gera data atual */
        date_default_timezone_set ("America/Sao_Paulo");
        $agora = getdate ();
        $codigo_data = $agora["year"] . "_" . $agora["yday"];
        $codigo_data .= $agora["hours"] . $agora["minutes"] . $agora["seconds"];
        
        return "foto_" . $codigo_data . "_" . $resultado;
    }

    function pegar_extensao_arquivo ($arquivo)
    {
        return strrchr ($arquivo, ".");
    }

    function publicar_arquivo ($imagem)
    {
        /* Propriedades do arquivo */
        $arquivo_temporario = $imagem["tmp_name"];
        $nome_original = basename ($imagem["name"]);
        $nome_novo = gerar_nome_unico () . pegar_extensao_arquivo ($nome_original);
        $nome_completo = "../images/product_images/" . $nome_novo;
        
        /* Verifica se arquivo foi movido */
        if (move_uploaded_file ($arquivo_temporario, $nome_completo))
        {
            return array ("Imagem publicada com sucesso!", $nome_completo);
        }
        else 
        {
            return array (retornar_erro ($imagem["error"]), "");
        }
    }

    function retornar_erro ($numero)
    {
        /* Array com mensagens de erros */
        $array_erro = array
        (
            UPLOAD_ERR_OK => "Sem erro.",
            UPLOAD_ERR_INI_SIZE => "O arquivo enviado excede o limite definido na diretiva upload_max_filesize do php.ini.",
            UPLOAD_ERR_FORM_SIZE => "O arquivo excede o limite definido em MAX_FILE_SIZE no formulário HTML",
            UPLOAD_ERR_PARTIAL => "O upload do arquivo foi feito parcialmente.",
            UPLOAD_ERR_NO_FILE => "Nenhum arquivo foi enviado.",
            UPLOAD_ERR_NO_TMP_DIR => "Pasta temporária ausente.",
            UPLOAD_ERR_CANT_WRITE => "Falha em escrever o arquivo em disco.",
            UPLOAD_ERR_EXTENSION => "Uma extensão do PHP interrompeu o upload do arquivo."
        ); 
        
        return $array_erro[$numero];
    }

    function enviar_mensagem ($dados)
    {
        /* Dados do formulario */
        $nome_usuario = $dados["nome"];
        $email_usuario = $dados["email"];
        $mensagem_usuario = $dados["mensagem"];
        
        /* Dados de envio */
        $destino = "cliente@mail.com";
        $remetente = "remetente@mail.com"; // dominio do remetente (proprio site)
        $assunto = "Mensagem do site";
        
        /* Corpo da mensagem */
        $mensagem = "O usuário " . $nome_usuario . " enviou uma mensagem <br>";
        $mensagem .= "Email do usuário: " . $email_usuario . "<br>";
        $mensagem .= "Mensagem: <br> ";
        $mensagem .= $mensagem_usuario;
        
        /* Retorno */
        return mail ($destino, $assunto, $mensagem, $remetente);
    }
?>

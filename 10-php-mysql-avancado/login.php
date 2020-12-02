<!-- Inclui conexao -->
<?php require_once ("private-php/conexao.php"); ?>

<?php
    /* Abre sessao */
    session_start ();

    /* Verifica campo do form */
    if (isset ($_POST["usuario"]))
    {
        /* Campos de autenticacao */
        $usuario = $_POST["usuario"];
        $senha = $_POST["senha"];
        
        /* Query */
        $sql = " SELECT  * FROM clientes ";
        $sql .= " WHERE usuario = '${usuario}' ";
        $sql .= " AND senha = '${senha}' ";
        
        /* Pesquisa */
        $query = mysqli_query ($conecta, $sql);
        
        /* Tratamento de erro */
        if (!$query)
            die ("Falha na consulta ao banco");
        
        /* Array do resultado */
        $informacao = mysqli_fetch_assoc ($query);
        
        /* "empty" = Verifica se um array esta vazio */
        if (empty ($informacao))
        {
            $mensagem = "Login sem sucesso";
        }
        else 
        {
            /* Adiciona usuario da sessao */
            $_SESSION["usuario"] = $informacao;
            
            header ("location: produto-pesquisa");
        }
    }
?>

<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title> Login </title>
        
        <!-- estilo -->
        <link rel="stylesheet" href="css/estilo.css">
        <link rel="stylesheet" href="css/login.css">
    </head>

    <body>
        <header>
            <div id="header_central">
                <img src="assets/logo_andes.gif">
                <img src="assets/text_bnwcoffee.gif">
            </div>
        </header>
        
        <main>  
            <div id="janela_login">
                <form action="login.php" method="post">
                    <h2> Tela de Login </h2>
                    
                    <!-- Campos -->
                    <input type="text" name="usuario" placeholder="Usuário">
                    <input type="password" name="senha" placeholder="Senha">
                    <input type="submit" value="Login">
                    
                    <!-- Mensagem de falha de autenticacao -->
                    <?php 
                        if (isset ($mensagem))
                            echo "<p> $mensagem </p>";
                    ?>
                </form>
            
            </div>
        </main>
        
        <!-- inclui footer -->
        <?php include_once ("components/rodape.php"); ?>

    </body>
</html>

<?php
    // Fechar conexao
    mysqli_close ($conecta);
?>
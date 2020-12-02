<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title> Preencher e Receber Dados de um Formulário </title>
        <link href="../css/estilo.css" rel="stylesheet">
    </head>
    <body>
        
        <!-- Necessario passar a url do arquivo php de destino -->
        <form action="35-2-preencher-receber-destino.php" method="post">
            
            <!-- Nome -->
            <label for="nome"> Nome Completo </label>
            <input type="text" id="nome" name="nome">
            
            <!-- Email -->
            <label for="email"> Email </label>
            <input type="text" id="email" name="email">
            
            <!-- Submit -->
            <input type="submit" value="Enviar Cadastro">
        </form>
    </body>
</html>
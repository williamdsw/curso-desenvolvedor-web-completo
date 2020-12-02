<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title> Aplicar CEP em Formulário </title> 
        <link href="../css/estilo-form.css" rel="stylesheet">
    </head>
    <body>
        <main>  
            <div id="janela_formulario">
                
                <form id="formulario_transportadora">
                    <label for="nometransportadora">Nome da Transportadora</label>
                    <input type="text" value="" name="nometransportadora" id="nometransportadora">
                    
                    <label for="cep">CEP (ex: 58000-100)</label>
                    <input type="text" value="" name="cep" id="cep" maxlength="9">
                    
                    <label for="endereco">Endereço</label>
                    <input type="text" value="" name="endereco" id="endereco">

                    <label for="cidade">Cidade</label>
                    <input type="text" value="" name="cidade" id="cidade">

                    <label for="estado">Estado</label>
                    <input type="text" value="" name="estado" id="estado">

                    <label for="bairro">Bairro</label>
                    <input type="text" value="" name="bairro" id="bairro">
                    
                    <input type="submit" value="Confirmar alteração">  
                    
                    <div id="mensagem"><p></p></div>
                </form> 
            </div>
        </main>
        
        <script src="../libs/jquery-3.4.0.min.js"></script>
        <script src="../js/23-aplicar-cep-formulario.js"></script>
    </body>
</html>
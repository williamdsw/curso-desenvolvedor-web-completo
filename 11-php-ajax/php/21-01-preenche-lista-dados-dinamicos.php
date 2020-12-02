<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title> Preencher Lista com Dados Dinâmicos via AJAX </title>
        <link rel="stylesheet" href="../css/estilo-form.css">
    </head>
    <body>
        <main>
            <div id="janela_formulario">
                <form id="pesquisar_produtos">
                    <label for="categorias"> Categorias </label>
                    <select id="categorias"></select> 
                    
                    <label for="produtos"> Produtos </label>
                    <select id="produtos"></select>
                </form>
            </div>
        </main>
        
        <script src="../libs/jquery-3.4.0.min.js"></script>
        <script src="../js/21-preenche-lista-dados-dinamicos.js"></script>
        <script src="21-02-retornar-categorias.php?callback=retornarCategorias"></script>
    </body>
</html>
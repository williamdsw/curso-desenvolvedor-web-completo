"use strict";

$(document).ready (function ()
{
    $("select#categorias").change (function (ev)
    {
        ev.preventDefault ();
        
        /* Valor */
        let categoriaID = $(this).val ();
        
        $.ajax (
        {
            /* Parametros request */
            type: "GET",
            data: "categoriaID=" + categoriaID,
            url: "21-03-retornar-produtos.php",
            async: false
            
        }).done (function (data)
        {
            data = $.parseJSON (data);
            
            /* Gera template */
            let template = "";
            $.each (data, function (index, value)
            {
                template += `<option value="${value.produtoID}">${value.nomeproduto}</option>`;
            });
            
            $("select#produtos").html (template);
            
        }).fail (function () 
        {
            console.log ("Erro ao consultar URL");
        });
    });
    
    $("select#categorias").trigger ("change");
});

/* Preenche select de categorias */
function retornarCategorias (data)
{
    let elementos = "";
    
    /* Iterando */
    $.each (data, function (index, value)
    {
        elementos += `<option value="${value.categoriaID}">${value.nomecategoria}</option>`;
    });
    
    $("select#categorias").html (elementos);
}
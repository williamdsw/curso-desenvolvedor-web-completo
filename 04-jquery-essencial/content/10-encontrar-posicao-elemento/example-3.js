
$(document).ready (function (event)
{
   $("button").click (function (e)
   {
        changeFather ();
   });
});

function changeFather()
{
    /* $(seletor).offsetParent () = Acessa e modifica os atributos do elemento pai do seletor */
    $("#janelinha").offsetParent ().css ({"background-color": "#dbde09", "border": "4px dotted white"});
}


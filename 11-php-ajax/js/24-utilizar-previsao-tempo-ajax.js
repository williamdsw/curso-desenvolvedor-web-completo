"use strict";

$(document).ready (function ()
{
    /* Parametros */
    let base = "http://api.openweathermap.org/data/2.5/weather?q=";
    let cidade = "London";
    let pais = "uk";
    let unidade = "&units=metric";
    let linguagem = "&lang=pt";
    let appID = "&APPID=4b181a6773913a9d88c18c0564f798ca";
    let endereco = base + cidade + "," + pais + unidade + linguagem + appID;
    
    $.ajax (
    {
        type: "GET",
        url: endereco,
        async: false

    }).done (function (data)
    {
        /* Dados */
        let umidade = data.main.humidity;
        let pressao = data.main.pressure;
        let temperaturaMinima = data.main.temp_min;
        let temperaturaMaxima = data.main.temp_max;
        let temperaturaMedia = data.main.temp;
        let nome = data.name;
        let descricao = data.weather[0].description;
        
        /* Template */
        let template = "";
        template += `<p> Cidade : ${nome} </p>`;
        template += `<p> Descrição do Tempo : ${descricao} </p>`;
        template += `<p> Temperatura Mín. : ${temperaturaMinima}º C </p>`;
        template += `<p> Temperatura Máx. : ${temperaturaMaxima}º C </p>`;
        template += `<p> Temperatura Média : ${temperaturaMedia}º C </p>`;
        template += `<p> Umidade : ${umidade} </p>`;
        template += `<p> Pressão : ${pressao} </p>`;
        
        $("div#dados").html (template);

    }).fail (function ()
    {
        console.log ("Erro na consulta ao Open Weather");
    });
});


"use strict";

$(document).ready (function (ev)
{
    /* Parametros */
    let videosURL = "https://www.googleapis.com/youtube/v3/videos";
    let videoID = "tH2w6Oxx0kQ";
    let apiKey = "";
    
    /* Conecta com a URL da API */
    $.get (videosURL,
    {
        /* Parametros da conexao */
        part: "snippet",
        id: videoID,
        key: apiKey
    },
    function (data)
    {
        /* Pegando dados */
        let nomeCanal = data.items[0].snippet.channelTitle;
        let descricao = data.items[0].snippet.description;
        let titulo = data.items[0].snippet.title;
        let url = "https://youtube.com/embed/" + videoID;
        
        /* Elementos */
        let iframe = `<iframe width="560" height="315" src="${url}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br>`;
        let title = `<h2> ${titulo} </h2>`
        let channel = `<h4> ${nomeCanal} </h4>`
        
        $("div#janela").append (iframe).append (title).append (channel);
    });
 
    
    /* Conecta com a URL da API */
    $.get (videosURL,
    {
        /* Parametros da conexao */
        part: "statistics",
        id: videoID,
        key: apiKey
    }, 
    function (data)
    {
        /* Pegando dados */
        let numeroVisualizacoes = data.items[0].statistics.viewCount;
        let numeroGostei = data.items[0].statistics.likeCount;
        let numeroNaoGostei = data.items[0].statistics.dislikeCount;
        let numeroComentarios = data.items[0].statistics.commentCount;
        
        /* Elementos */
        let template = `<p>`;
        template += `<b> Visualizações: </b> ${formataString (numeroVisualizacoes)} <br>`;
        template += `<b> Gostei: </b> ${formataString (numeroGostei)} <br>`;
        template += `<b> Não Gostei: </b> ${formataString (numeroNaoGostei)} <br>`;
        template += `<b> Comentários: </b> ${formataString (numeroComentarios)} <br>`;
        template += `</p>`;
        
        $("div#janela").append (template);
        
        formataString (numeroVisualizacoes);
    });
    
    function formataString (str)
    {
        let newString = "";
        let counter = 1;
        for (let i = str.length - 1; i >= 0; i--)
        {
            newString += str.charAt (i);
            
            if (i !== 0 && counter === 3)
            {
                newString += ".";
                counter = 0;
            }
            
            counter++;
        }
        
        return newString.split ("").reverse ().join ("");
    }
});
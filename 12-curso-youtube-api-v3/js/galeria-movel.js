"use strict";

$(document).ready (function (ev)
{
    /* Parametros */
    let channelsURL = "https://www.googleapis.com/youtube/v3/channels";
    let playlistItemsURL = "https://www.googleapis.com/youtube/v3/playlistItems";
    let nomeCanal = "silmarazezao";
	let apiKey = "";
    
    /* Conecta com a URL da API */
    $.get (channelsURL,
    {
        /* Parametros da conexao */
        part: "contentDetails",
        forUsername: nomeCanal,
        key: apiKey
    }, 
    function (data)
    {
        let uploadID = data.items[0].contentDetails.relatedPlaylists.uploads;
        pegarVideos (uploadID);
    });
    
    function pegarVideos (id)
    {
        /* Conecta com a URL da API */
        $.get (playlistItemsURL, 
        {
            /* Parametros da conexao */
            part: "snippet",
            maxResults: 20,
            playlistId: id,
            key: apiKey
        }, 
        function (data) 
        {
            /* Itera sobre os itens (videos) */
            $.each (data.items, function (index, item)
            {
                /* Define URL do video */
                let videoID = item.snippet.resourceId.videoId;
                let url = "https://www.youtube.com/embed/" + videoID;
                
                /* Adiciona elemento */
                let templateElement = `<li class="principal"><iframe width="560" height="315" src="${url}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></li>`;
                $("div#janela ul").append (templateElement);
            });
        });
    }
});
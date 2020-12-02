"use strict";

$(document).ready (function (ev)
{
    /* Configuracao Fancy 
     * Obs: So funciona com site hospedado. */
    $(".fancybox").fancybox (function ()
    {
        let width = 800;
        let height = 480;
        
        $(".fancybox-media").attr ("rel", "media-gallery").fancybox 
        ({
            arrows: false,
            'maxWidth': width,
            'maxHeight': height,
            'width': width,
            'height': height,
            helpers: 
            {
                media: {},
                buttons: {}
            }
        });
    });
    
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
            maxResults: 50,
            playlistId: id,
            key: apiKey
        }, 
        function (data) 
        {
            let tituloCanal = data.items[0].snippet.channelTitle;
            $("div#janela ul").prepend (`<center><h1>${tituloCanal}</h1></center>`);
            
            /* Itera sobre os itens (videos) */
            $.each (data.items, function (index, item)
            {
                /* Propriedades do item */
                let imagemURL = item.snippet.thumbnails.medium.url;
                let titulo = item.snippet.title;
                let descricao = item.snippet.description;
                let dataPublicada = item.snippet.publishedAt;
                let videoID = item.snippet.resourceId.videoId;
                let url = "https://www.youtube.com/watch?v=" + videoID;
                
                let templateElement = "";
                templateElement += `<li class="principal">`;
                templateElement += `<a class="fancybox-media" href="${url}">`;
                templateElement += `<div class="foto">`;
                templateElement += `<img src="${imagemURL}" alt="Thumbnail">`;
                templateElement += `<div class="legenda">`;
                templateElement += `<h5 title="${titulo}"> ${titulo} </h5>`;
                templateElement += `<p> ${descricao} </p>`;
                templateElement += `<p> Publicado em: ${formatarData (dataPublicada)} </p>`;
                templateElement += `</div></div></a></li>`;
                
                $("div#janela ul").append (templateElement);
            });
        });
    }
    
    function formatarData (data)
    {
        return data.substr (8, 2) + "/" + data.substr (5, 2) + "/"  + data.substr (0, 4);
    }
});
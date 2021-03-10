"use strict";

/* Objeto */
let jogador = 
{
    /* Propriedades */
    nome: "Cristiano Ronaldo",
    habilidades: ["Chutar", "Driblar", "Correr", "Fazer gols", "Cobrar Falta", "Cabecear"],
    
    escreverHabilidades: function ()
    {
        /* O this aqui e utilizado para referenciar o objeto 'jogador' */
        console.log (this.nome);
        let _this = this;
        
        this.habilidades.forEach (function (skill)
        {
            console.log (_this.nome + " é craque em " + skill);
            
            document.getElementById ("output").innerHTML += `<p> ${_this.nome} é craque em ${skill} </p>`;
        });
    }
};

jogador.escreverHabilidades ();
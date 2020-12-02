"use strict";

let jogador = 
{
    nome: "Cristiano Ronaldo",
    habilidades: ["Chutar", "Driblar", "Correr", "Fazer gols", "Cobrar Falta", "Cabecear"],
    
    /* Escrita sem arrow function */
    escreverHabilidades1: function ()
    {
        this.habilidades.forEach (function (skill)
        {
            console.log (this.nome + " é craque em " + skill);
            
            document.getElementById ("output").innerHTML += `<p> ${this.nome} é craque em ${skill} </p>`;
            
        /* "bind (prop)" = Serve para passar parametros para a funcao */
        }.bind (this));
    },
    
    /* Escrita com arrow function */
    escreverHabilidades2 ()
    {
        this.habilidades.forEach ((skill) => 
        {
            console.log (this.nome + " é craque em " + skill);
            document.getElementById ("output").innerHTML += `<p> ${this.nome} é craque em ${skill} </p>`;
        });
    }
};

jogador.escreverHabilidades1 ();
jogador.escreverHabilidades2 ();
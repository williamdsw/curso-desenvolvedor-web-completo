"use strict";

/* Sintaxe de classe */
class Produto
{
    /* Metodo construtor com parametros */
    constructor (nome, preco)
    {
        this.nome = nome;
        this.preco = preco;
    }
    
    /* Funcao ... */
    escreverDados ()
    {
        console.log (`Minha ${this.nome} custa ${this.preco} reais`);
        document.getElementById ("output").innerHTML += `<p> Minha ${this.nome} custa ${this.preco} reais </p>`;
    }
}

/* Instancia e chamada */
let caneta = new Produto ("Caneta Bic", 3.00);
caneta.escreverDados ();

let televisao = new Produto ("Smart TV Samsung", 2000.50);
televisao.escreverDados ();

let computador = new Produto ("Computador", 2556.00);
computador.escreverDados ();
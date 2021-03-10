'use strict';

const output = document.querySelector('output');

// Classe mae / pai
class Poligono {

    // Construtor
    constructor(lados, altura, largura, nome) {
        this.lados = lados;
        this.altura = altura;
        this.largura = largura;
        this.nome = nome;
    }

    // Funcao
    escreverCaracteristicas() {
        let caracteristicas = `Eu sou um ${this.nome}, tenho ${this.lados} lados, tenho como largura ${this.largura} cm e tenho como altura ${this.altura} cm.`;
        if (output) {
            output.innerHTML += `<p> ${caracteristicas} </p>`;
        }
    }
}

// Classe que herda (extends) caracteristicas de 'Poligono'
class Quadrado extends Poligono {
    constructor(altura, largura) {
        // 'super (...)' = Implementa construtor da classe pai
        super(4, altura, largura, 'Quadrado');
    }
}

// Instancia direta da classe pai
let pentagono = new Poligono(5, 14, 12, 'Pentagono');
pentagono.escreverCaracteristicas();

// Instancia direta da classe filha
let quadrado = new Quadrado(10, 10);
quadrado.escreverCaracteristicas();
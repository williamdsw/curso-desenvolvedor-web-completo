var output = document.querySelector('output');

if (output) {

    // Object e uma classe generica que representa um objeto
    var produto = new Object();

    // Definindo propriedades para o objeto
    produto.nome = 'Caneta';
    produto.preco = 1.99;
    produto.cor = 'azul';

    // Definindo funcao
    function retornarInfo() {
        return `Meu produto ${this.nome} de cor ${this.cor}, custa ${this.preco} reais.`;
    }

    // Passando uma funcao para propriedade do objeto
    produto.info = retornarInfo;

    // Printando
    output.innerText = produto.info();
}

/* Declarando array*/
var bandas = new Array();

/* push() = Adiciona item no final do array */
bandas.push("Megadeth");
bandas.push("Anthrax");

/* unshift() = Adiciona item no inicio do array */
bandas.unshift("Metallica");
bandas.unshift("Slayer");

console.log(bandas);

/* length = Retorna o numero de itens do array */
console.log("tamanho do array depois de insercoes : " + bandas.length);

/* pop() = exclui o ultimo item do array */
bandas.pop();

/* shift() = exclui o primeiro item do array */
bandas.shift();

console.log(bandas);
console.log("Tamanho do array depois de exclusões : " + bandas.length);
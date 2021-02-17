/* Math.round() = Arredonda o numero para um Inteiro mais proximo 
             * Math.random() = Sorteia um numero aleatorio */
function sortear() {
    numero_aleatorio.innerHTML = Math.round(Math.random() * 100);
}

/* Quando a pagina iniciar */
window.onload = sortear;
'use strict';

let content = document.querySelector('article.content');
let LIMIT = 45;
if (content) {
    for (let i = 0; i < LIMIT; i++) {
        let div = document.createElement('div');
        div.addEventListener('click', () => alert(`Você clicou no element número ${i}`));
        content.append(div);
    }
}
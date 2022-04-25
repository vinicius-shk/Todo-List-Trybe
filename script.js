let botao = document.querySelector('button');
let input = document.querySelector('input');
let lista = document.querySelector('ol');
botao.addEventListener('click', adicionaTarefa);
function adicionaTarefa() {
    let itemLista = document.createElement('li');
    itemLista.innerText = input.value;
    input.value = '';
    lista.appendChild(itemLista);
}
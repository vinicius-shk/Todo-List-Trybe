let botao = document.querySelector('button');
let input = document.querySelector('input');
let lista = document.querySelector('ol');
let botaoLimpar = document.getElementById('apaga-tudo');
botaoLimpar.addEventListener('click', limpaLista);
botao.addEventListener('click', adicionaTarefa);
function adicionaTarefa() {
    let itemLista = document.createElement('li');
    itemLista.addEventListener('click', alteraCor);
    itemLista.addEventListener('dblclick', alteraEstilo);
    itemLista.innerText = input.value;
    input.value = '';
    lista.appendChild(itemLista);
}
function alteraCor(evento) {
    for (let index = 0; index < lista.children.length; index += 1) {
        lista.children[index].classList.remove('selected');
    }
    evento.target.classList.add('selected');
}
function alteraEstilo(evento) {
    if (evento.target.classList.contains('completed')) {
        evento.target.classList.remove('completed');
    } else {
        evento.target.classList.add('completed');
    }
}
function limpaLista() {
    let tamanhoLista = lista.children.length;
    for (let index = 0; index < tamanhoLista; index += 1) {
        lista.removeChild(lista.children[0]);
    }
}
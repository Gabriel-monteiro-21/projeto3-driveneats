function selecionarItens(selecao) {
    const selecionado = window.document.querySelector('.prato');

    if (selecionado != null) {
        selecionado.classList.toggle('selecionado');
    } else {
        selecionado.classList.remove('selecionado');
    }
}

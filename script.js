// Criar uma função para selecionar o prato
function selecionarPrato(seletor) {

    // Verificar se já existe um prato com a borda e buscar esse prato usando QuerySlector
    const pratoAnterior = window.document.querySelector('.menu-prato .borda'); 
    console.log(pratoAnterior);

    // Se já existir um prato com a borda, vou remover a borda desse prato
    if (pratoAnterior != null) {
        pratoAnterior.classList.remove('borda');
    }

    // Selecionar o prato que vai ficar com a borda verde
    const selecionado = window.document.querySelector(seletor);
    // Adiconar a borda verde nesse prato
    selecionado.classList.add('borda');
}

// Criar uma função para selecionar a bebida
function selecionarBebida(seletor) {

    // Verificar se já existe uma bebida com a borda e buscar essa bebida usando QuerySlector
    const bebidaAnterior = window.document.querySelector('.menu-bebida .borda');
    console.log(bebidaAnterior);

    // Se já existir uma bebida com a borda, vou remover a borda dessa bebida
    if (bebidaAnterior != null) {
        bebidaAnterior.classList.remove('borda');
    }

    // Selecionar a bebida que vai ficar com a borda verde
    const selecionado = window.document.querySelector(seletor);
    // Adiconar a borda verde nessa bebida
    selecionado.classList.add('borda');
}

// Criar uma função para selecionar a sobremesa
function selecionarSobremesa(seletor) {

    // Verificar se já existe uma sobremesa com a borda e buscar essa sobremesa usando QuerySlector
    const sobremesaAnterior = window.document.querySelector('.menu-sobremesa .borda');
    console.log( sobremesaAnterior);

    // Se já existir uma sobremesa com a borda, vou remover a borda dessa sobremesa
    if ( sobremesaAnterior != null) {
        sobremesaAnterior.classList.remove('borda');
    }

    // Selecionar a sobremesa que vai ficar com a borda verde
    const selecionado = window.document.querySelector(seletor);
    // Adiconar a borda verde nessa sobremesa
    selecionado.classList.add('borda');
}

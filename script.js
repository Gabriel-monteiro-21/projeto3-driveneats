let prato;
let bebida;
let sobremesa;

let precoPrato;
let precoBebida;
let precoSobremesa;

function selecionarBotao() {
    
    // Verficar se o prato foi selecionado
    if (prato !== undefined) {
        // Verificar se a bebida foi selecionada
        if (bebida !== undefined) {
            // Verificar se a sobremesa foi selecionada
            if (sobremesa !== undefined) {

                const botaoPedido = window.document.querySelector('.botao');
                botaoPedido.classList.add('ativarBotao');
                botaoPedido.innerHTML = 'Fechar Pedido';
                botaoPedido.removeAttribute('disabled');

            }

        }
    }
}

// Criar uma função para selecionar o prato (usando função parametrizada)

/*function selecionarPrato(seletor) {

    // Verificar se já existe um prato com a borda e buscar esse prato usando QuerySlector
    const pratoAnterior = window.document.querySelector('.menu-prato .borda');
    console.log(pratoAnterior);

    // Se já existir um prato com a borda, vou remover a borda desse prato
    if (pratoAnterior != null) {
        pratoAnterior.classList.remove('borda');
    }

    // Selecionar agora o novo prato que vai ficar com a borda verde, buscar o novo prato
    const pratoSelecionado = window.document.querySelector(seletor);

    // Adiconar a borda verde nesse prato
    pratoSelecionado.classList.add('borda');
}*/

//(usando o This)
function selecionarPrato(pratoSelecionado) {

    // Verificar se já existe um prato com a borda e buscar esse prato usando QuerySlector
    const pratoAnterior = window.document.querySelector('.menu-prato .borda');

    // Se já existir um prato com a borda, vou remover a borda desse prato
    if (pratoAnterior != null) {
        pratoAnterior.classList.remove('borda');
    }

    // Adiconar a borda verde nesse prato
    pratoSelecionado.classList.add('borda');

    prato = pratoSelecionado.querySelector('.titulo-prato').innerHTML;
    precoPrato = pratoSelecionado.querySelector('.preco-prato').innerHTML;

    selecionarBotao();
}

// Criar uma função para selecionar a bebida
function selecionarBebida(bebidaSelecionada) {

    // Verificar se já existe uma bebida com a borda e buscar essa bebida usando QuerySlector
    const bebidaAnterior = window.document.querySelector('.menu-bebida .borda');

    // Se já existir uma bebida com a borda, vou remover a borda dessa bebida
    if (bebidaAnterior != null) {
        bebidaAnterior.classList.remove('borda');
    }

    // Adiconar a borda verde nessa bebida
    bebidaSelecionada.classList.add('borda');

    bebida = bebidaSelecionada.querySelector('.titulo-bebida').innerHTML;
    precoBebida = bebidaSelecionada.querySelector('.preco-bebida').innerHTML;

    selecionarBotao();
}

// Criar uma função para selecionar a sobremesa
function selecionarSobremesa(sobremesaSelecionada) {

    // Verificar se já existe uma sobremesa com a borda e buscar essa sobremesa usando QuerySlector
    const sobremesaAnterior = window.document.querySelector('.menu-sobremesa .borda');

    // Se já existir uma sobremesa com a borda, vou remover a borda dessa sobremesa
    if (sobremesaAnterior != null) {
        sobremesaAnterior.classList.remove('borda');
    }

    // Adiconar a borda verde nessa sobremesa
    sobremesaSelecionada.classList.add('borda');

    sobremesa = sobremesaSelecionada.querySelector('.titulo-sobremesa').innerHTML;
    precoSobremesa = sobremesaSelecionada.querySelector('.preco-sobremesa').innerHTML;

    selecionarBotao();
}

function ativarBotao(){

    let precoPratoConvertido = precoPrato.replace('R$', '');
    precoPratoConvertido = precoPratoConvertido.replace(',', '.');
    precoPratoConvertido = Number(precoPratoConvertido);

    let precoBebidaConvertido = precoBebida.replace('R$', '');
    precoBebidaConvertido = precoBebidaConvertido.replace(',', '.');
    precoBebidaConvertido = Number(precoBebidaConvertido);

    let precoSobremesaConvertido = precoSobremesa.replace('R$', '');
    precoSobremesaConvertido = precoSobremesaConvertido.replace(',', '.');
    precoSobremesaConvertido = Number(precoSobremesaConvertido);

    const total = precoPratoConvertido +  precoBebidaConvertido + precoSobremesaConvertido;
    
    const mensagemWhatsApp = `Olá, gostaria de fazer o pedido:
    - Prato: ${prato}
    - Bebida: ${bebida}
    - Sobremesa: ${sobremesa}
    Total: R$ ${total.toFixed(2)}`;

    console.log(mensagemWhatsApp);

}
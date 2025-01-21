let listaNumeroSorteados = [];
let titulo = document.querySelector('h1');
let paragrafo = document.querySelector('p');
let input = document.querySelector('.container__input');
let numeroMaximo = 10;
let numeroAleatorio = gerarNumeroAleatorio();
let tentativas = 1;

titulo.innerHTML = 'Jogo do número secreto';
paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

function verificarChute() {
    let chute = parseInt(input.value); 

  if (isNaN(chute) || chute < 1 || chute > 10) {
    exibirTextoNaTela('h1', 'Número inválido!');
    exibirTextoNaTela('p', 'Por favor, escolha um número entre 1 e 10.');
    return;
  }


    mensagemInicial();

    if (chute === numeroAleatorio) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (chute < numeroAleatorio) {
        exibirTextoNaTela('h1', 'Errou!');
        exibirTextoNaTela('p', 'O número secreto é maior!');
    } else {
        exibirTextoNaTela('h1', 'Errou!');
        exibirTextoNaTela('p', 'O número secreto é menor!');
    } tentativas++;
      limparCampo();
}

function mensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}


function reiniciarJogo() {
    numeroAleatorio = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function gerarNumeroAleatorio() {
    let quantidadeNumeroLista = listaNumeroSorteados.length;
    let numeroEscolhido =  parseInt((Math.random() * numeroMaximo + 1)); 

    if (quantidadeNumeroLista == numeroMaximo) {
        listaNumeroSorteados = [];
    }

    if (listaNumeroSorteados.includes(numeroEscolhido)) { 
       return gerarNumeroAleatorio();    
    } {
        listaNumeroSorteados.push(numeroEscolhido);
        console.log(listaNumeroSorteados);
        return numeroEscolhido;
    }

}

function limparCampo () {
chute = document.querySelector('input');
chute.value = '';
}
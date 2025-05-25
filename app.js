// let titulo = document.querySelector('h1');
// titulo.innerHTML = "Jogo do Número Secreto";

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = "O número secreto é um número entre 1 e 100";

let numerosusados = [];
let numeromaximo = 100
let numeroSecreto = gerarnumero();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let elemento = document.querySelector(tag);
    elemento.innerHTML = texto;
}

function exibirMensagem(mensagem) {
    exibirTextoNaTela('h1', "Jogo do Número Secreto");
    exibirTextoNaTela('p', "O número secreto é um número entre 1 e 100");
}
exibirMensagem();

function verificarChute(){
    let chute = document.querySelector(`input`).value;
    
    if (chute == numeroSecreto) {
        let palavra = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagem = `Você acertou! O número secreto é ${numeroSecreto}. Você precisou de ${tentativas} ${palavra} para acertar.`;
        exibirTextoNaTela('h1', mensagem);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (chute < numeroSecreto) {
       exibirTextoNaTela('h1', `Você errou! O numero secreto é maior que ${chute}`);
       exibirTextoNaTela('p', 'Tente novamente!')
    } else {
        exibirTextoNaTela('h1', `Você errou! O numero secreto é menor que ${chute}`);
        exibirTextoNaTela('p', 'Tente novamente!')
    }
    tentativas++;
    limparcampo();
}

function gerarnumero() {
   let numeroescolhido = parseInt(Math.random() * 100 + 1);
   let quantidade = numerosusados.length;
   if (quantidade == 100){
    numerosusados = [];
   }
   if (numerosusados.includes(numeroescolhido)) {
    return gerarnumero();
   } else {
    numerosusados.push(numeroescolhido);
    return numeroescolhido;
   }
   
}

function limparcampo() {
    let campo = document.querySelector('input');
    campo.value = ''
}

function reiniciarjogo() {
    numeroSecreto = gerarnumero();
    tentativas = 1;
    limparcampo();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    exibirMensagem();
}


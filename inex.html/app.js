listaDeNumerosSorteados[];
let numeroLimite = 10;
let numeroSecreto = 2;
let tentativas = 1;
l
function exibirTextonaTela (tag, texto) { 
     let campo = document. querySelector (tag);
     campo. innerHTML = texto ;
     responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial () {
  exibirTextonaTela('p', 'escolha um numero de 1 a 100' );
  exibirTextonaTela('h1', 'jogo do numero secreto '); 
}


exibirMensagemInicial();

exibirTextonaTela('p', 'escolha um numero de 1 a 100' );
exibirTextonaTela('h1', 'jogo do numero secreto ');

function verificarChute() {
  console.log ('1 a 10');
}
   if ( chute == numeroSecreto) {
     exibirTextonaTela ('h1', 'acertou!');
     
     let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativas';
     let mensagemTentativas = `voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;
     exibirTextonaTela ('p', mensagemTentativas);
     document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
       if ('chute > numero secreto') { 
         exibirTextonaTela ('p', 'o numero secreto é menor' );
          else {
             exibirTextonaTela ('p','o numero secreto é maior' );
          }
          
          tentativas++;
          limparCampo();
       }
    }

function gerarNumeroAleatório () {
   let NumeroEscolhido = parseInt(Math.random() *numeroLimite + 1);
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

   if(quantidadeDeElementosNaLista == numeroLimite) {
      listaDeNumerosSorteados = [];
   }
    if(listaDeNumerosSorteados.includes(NumeroEscolhido)) {
      return gerarNumeroAleatório();
    } else {
      listaDeNumerosSorteados.push(NumeroEscolhido);
      console.log(listaDeNumerosSorteados)
       return NumeroEscolhido;
    }
}
function limparCampo() {
   chute = document.querySelector ('input');
   chute.value = ''; 
}

function reiniciarJogo (){
   numeroSecreto = gerarNumeroAleatório ();
   limparCampo ();
   tentativas = 1 ;
   exibirMensagemInicial();
   document,getElementById('reiniciar').setAttribute('disable', true)
}
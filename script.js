
// codigo funcionando, jogo baseando em desafios logicos com opções de acerto e erro.

function primeiraFase() { //script primeira fase do game
  var texto = document.querySelector('#texto');
  texto.textContent = 'O primeiro desafio será contra Galit, O guardião do primeiro portal voce precisa acertar o ultimo numero desta sequencia ( 8 = 56, 7 = 42, 6 = 30, 5 = 20 e 3 = ?? )';
  var botao1 = document.querySelector('#btn1');
  var botao2 = document.querySelector('#btn2');
  var botao3 = document.querySelector('#btn3');
  botao1.textContent = "= 6"
  botao2.textContent = "= 36"
  botao3.textContent = "= 19"
  btn1.onclick = primeiroEspirito // chamando função de continuar ou desistir do jogo.
  btn2.onclick = perder
  btn3.onclick = perder
}


function primeiroEspirito() { 
  var texto = document.querySelector('#texto');
  texto.textContent = 'hummm, muito bom Lucyan, vejo que esta preparado! Voce libertou o primeiro espirito ';
  var botao1 = document.querySelector('#btn1');
  var botao2 = document.querySelector('#btn2');
  var botao3 = document.querySelector('#btn3');
  botao1.textContent = "Quero parar aqui!"
  botao2.textContent = "Continuar"
  botao3.textContent = "ttttt"
  btn1.onclick = perder
  btn2.onclick = segundaFase
  btn3.onclick = perder
  document.querySelector("#btn3").style.display = "none";
}


function segundaFase() {// resposta certa RÉ 
  var texto = document.querySelector('#texto');
  texto.textContent = 'O Segundo desafio será contra DuaSan, o guardião do segundo portal. Na sequencia DÓ, RÉ, MI, RÉ, DÓ, RÉ, MI, RÉ,... O termo 200 é:\n ';
  var botao1 = document.querySelector('#btn1');
  var botao2 = document.querySelector('#btn2');
  var botao3 = document.querySelector('#btn3');
  botao1.textContent = "LÁ"
  botao2.textContent = "RÉ"
  botao3.textContent = "DÓ"
  btn1.onclick = perder
  btn2.onclick = segundoEspirito
  btn3.onclick = perder
  document.querySelector("#btn3").style.display = "inline";
}

function segundoEspirito() {
  var texto = document.querySelector('#texto');
  texto.textContent = 'Voce libertou o segundo espirito,\n restam 3 desafios';
  var botao1 = document.querySelector('#btn1');
  var botao2 = document.querySelector('#btn2');
  var botao3 = document.querySelector('#btn3');
  botao1.textContent = "Quero parar aqui!"
  botao2.textContent = "Continuar"
  botao3.textContent = "ttttt"
  btn1.onclick = perder
  btn2.onclick = terceiraFase
  btn3.onclick = perder
  document.querySelector("#btn3").style.display = "none";
}


function terceiraFase() { //resposta certa botao2
  var texto = document.querySelector('#texto');
  texto.textContent = 'O Terceiro desafio será contra Lorcán,Considere verdadeira a seguinte proposição: “Se x é par e y é ímpar, então z é par”. Pode-se afirmar que:  ';
  var botao1 = document.querySelector('#btn1');
  var botao2 = document.querySelector('#btn2');
  var botao3 = document.querySelector('#btn3');
  botao1.textContent = "se x é ímpar e y é ímpar, então z é ímpar."
  botao2.textContent = "se z é ímpar, então x é ímpar ou y é par."
  botao3.textContent = "se x é ímpar ou y é par, então z é ímpar."
  btn1.onclick = perder
  btn2.onclick = terceiroEspirito
  btn3.onclick = perder
  document.querySelector("#btn3").style.display = "inline";
}

function terceiroEspirito() {
  var texto = document.querySelector('#texto');
  texto.textContent = 'Voce libertou o terceiro espirito, restam 2 desafios...\n esta indo muito bem, Lucyan';
  var botao1 = document.querySelector('#btn1');
  var botao2 = document.querySelector('#btn2');
  var botao3 = document.querySelector('#btn3');
  botao1.textContent = "Quero parar aqui!"
  botao2.textContent = "Continuar"
  botao3.textContent = "ttttt"
  btn1.onclick = perder
  btn2.onclick = quartaFase
  btn3.onclick = perder
  document.querySelector("#btn3").style.display = "none";
}


function quartaFase() { /*Repare que, nesta sequência, vamos subtraindo 3 unidades a cada
  termo. Veja ainda que se dividirmos qualquer termo desta sequência por
  3, o resto será igual a 1. Portanto, para saber qual o menor número não
  negativo dela, basta pensarmos no menor número não negativo que,
  dividido por 3, deixa resto 1. No caso, estamos falando do próprio número
  1 (dividindo-o por 3 temos o resultado 0 e o resto igual a 1).
  Resposta: B */
  var texto = document.querySelector('#texto');
  texto.textContent = 'Chegamos ao quarto Desafio, aqui voce enfrenta Maylea... muito cuidado com ela ninguem costuma passar deste desafio. 523, 520, 517, 514, 511...Mantido o mesmo padrão da sequência, o menor número não negativo';
  var botao1 = document.querySelector('#btn1');
  var botao2 = document.querySelector('#btn2');
  var botao3 = document.querySelector('#btn3');
  botao1.textContent = "0"
  botao2.textContent = "3"
  botao3.textContent = "1"
  btn1.onclick = perder
  btn2.onclick = perder
  btn3.onclick = quartoEspirito
  document.querySelector("#btn3").style.display = "inline";
}

function quartoEspirito() {
  var texto = document.querySelector('#texto');
  texto.textContent = 'Voce libertou o quarto espirito. Sinceramente... estou surpreso! contra Oryn será diferente de tudo que passou';
  var botao1 = document.querySelector('#btn1');
  var botao2 = document.querySelector('#btn2');
  var botao3 = document.querySelector('#btn3');
  botao1.textContent = "Quero parar aqui!"
  botao2.textContent = "Continuar"
  botao3.textContent = "ttttt"
  btn1.onclick = perder
  btn2.onclick = finalFase
  btn3.onclick = perder
  document.querySelector("#btn3").style.display = "none";
}

function finalFase() {// Que animal anda pela manhã sobre quatro patas, a tarde sobre duas e a noite sobre três? o homem - resposta certa esfinge
  var texto = document.querySelector('#texto');
  texto.textContent = 'Chegamos a fase final, aqui voce enfretará Oryn. Caso você perca o desafio para ele, poderá barganha uma ultima vez... por uma ultima chance\n caso o contrario seu destino será sombrio. Quem é que se fizer uma pergunta, voce deve responder "o homem" senão será devorado vivo?'; 
  var botao1 = document.querySelector('#btn1');
  var botao2 = document.querySelector('#btn2');
  var botao3 = document.querySelector('#btn3');
  botao1.textContent = "Esfinge"
  botao2.textContent = "Maylea"
  botao3.textContent = "Medusa"
  btn1.onclick = venceu
  btn2.onclick = errou
  btn3.onclick = errou
  document.querySelector("#btn3").style.display = "inline";
}

function errou(){ 
  var texto = document.querySelector('#texto');
  texto.textContent = 'aaah... Lucyan estava tão proxima da gloria, mas ainda tenho algo para você, como conseguiu libertar todos os espiritos... jogue o random se fizer mais de 80 pontos você tera mais uma chance ';
  var botao1 = document.querySelector('#btn1');
  var botao2 = document.querySelector('#btn2');
  var botao3 = document.querySelector('#btn3');
  botao1.textContent = "Quero parar aqui!"
  botao2.textContent = "RANDOM"
  botao3.textContent = "ttttt"
  btn1.onclick = perder
  btn2.onclick = sorteia
  btn3.onclick = perder
  document.querySelector("#btn1").style.display = "none";
  document.querySelector("#btn2").style.display = "inline";
  document.querySelector("#btn3").style.display = "none";
}

function sorteia(n){ return Math.round(Math.random() * n) };
var num = sorteia(100);
var numero = document.querySelector('#sorte');
//terminar depois




function venceu(){
  var texto = document.querySelector('#texto');
  texto.textContent = 'Você consegiu Lucyan!!! completou toda a sua jornada, agora deixo por sua escolha para onde quer ir...';
  var botao1 = document.querySelector('#btn1');
  var botao2 = document.querySelector('#btn2');
  var botao3 = document.querySelector('#btn3');
  botao1.textContent = "Campo de Asfódelos"
  botao2.textContent = "rarasa"
  botao3.textContent = "Campos Elísios"
  btn1.onclick = alfo
  btn2.onclick = perder
  btn3.onclick = elisio
  document.querySelector("#btn1").style.display = "inline";
  document.querySelector("#btn2").style.display = "none";
  document.querySelector("#btn3").style.display = "inline";

 }

 function elisio(){
  var texto = document.querySelector('#texto');
  texto.textContent = 'Os Campos Elísios ficam localizados em um lugar privilegiado, onde as planícies são alcançadas pelos raios de sol. DESCANSE!';
  var botao1 = document.querySelector('#btn1');
  var botao2 = document.querySelector('#btn2');
  var botao3 = document.querySelector('#btn3');
  botao1.textContent = "Campo de Asfódelos"
  botao2.textContent = "rarasa"
  botao3.textContent = "Campos Elísios"
  btn1.onclick = perder
  btn2.onclick = perder
  btn3.onclick = perder
  document.querySelector("#btn1").style.display = "none";
  document.querySelector("#btn2").style.display = "none";
  document.querySelector("#btn3").style.display = "none";

 }


 function alfo(){
  var texto = document.querySelector('#texto');
  texto.textContent = 'O lugar de destino das almas dos humanos comuns, aquelas que não foram consideradas nem más e nem boas. DESCANSE!';
  var botao1 = document.querySelector('#btn1');
  var botao2 = document.querySelector('#btn2');
  var botao3 = document.querySelector('#btn3');
  botao1.textContent = "Campo de Asfódelos"
  botao2.textContent = "rarasa"
  botao3.textContent = "Campos Elísios"
  btn1.onclick = perder
  btn2.onclick = perder
  btn3.onclick = perder
  document.querySelector("#btn1").style.display = "none";
  document.querySelector("#btn2").style.display = "none";
  document.querySelector("#btn3").style.display = "none";

 }



function perder() {
  var texto = document.querySelector('#texto');
  texto.textContent = 'Parace que você não ficará em um bom lugar... vá direto para EREBUS HAHAHAAHAHAHAHAHAHAHAHAHAHA!!!!! ';
  var botao1 = document.querySelector('#btn1');
  var botao2 = document.querySelector('#btn2');
  var botao3 = document.querySelector('#btn3');
  botao1.textContent = "Quero parar aqui!"
  botao2.textContent = "Continuar"
  botao3.textContent = "ttttt"
  btn1.onclick = perder
  btn2.onclick = segundaFase
  btn3.onclick = perder
  document.querySelector("#btn1").style.display = "none";
  document.querySelector("#btn2").style.display = "none";
  document.querySelector("#btn3").style.display = "none";

}




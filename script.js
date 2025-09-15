const botaoMostraPalavras = document.querySelector("#botao-palavrachave");
botaoMostraPalavras.addEventListener("click" , MostraPalavrasChave);
function MostraPalavrasChave(){
const texto = document.querySelector("#entrada-de-texto").value;
const campoResultado = document.querySelector("#resultado-palavrachave");
campoResultado.textContent = texto;
const palavraChave = processaTexto(texto);
campoResultado.textContent = palavras.join(" , ");
}
function processaTexto(texto){
let palavras = texto.split(/\P{L}+/u);
return palavras;
}

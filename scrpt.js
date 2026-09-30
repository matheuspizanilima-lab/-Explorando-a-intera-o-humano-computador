// TAMANHO DE FONTES //
let tamanhoFonteAtual = 16;
const valorAdicionado = 2;
const valorSubtraido = 2;
let btnAumentaFonte = document.getElementById("btnAumentaTexto");
let btnDiminuiFonte = document.getElementById("btnDiminuiTexto");
btnAumentaFonte.addEventListener("click", aumentaFonte);
btnDiminuiFonte.addEventListener("click", diminuiFonte);
function aumentaFonte() {
    tamanhoFonteAtual = tamanhoFonteAtual + valorAdicionado;
    document.documentElement.style.fontSize = `${tamanhoFonteAtual}px`;
}
function diminuiFonte() {
    tamanhoFonteAtual = tamanhoFonteAtual - valorSubtraido;
    document.documentElement.style.fontSize = `${tamanhoFonteAtual}px`;
}
// LEITURA DE TELA
let lendo = false;
const btnLeitura = document.getElementById("btnVoz");
btnLeitura.addEventListener("click", lerEmVozAlta);
function lerEmVozAlta() {
    let conteudo = document.querySelector("main");
}
function lerEmVozAlta() {
    let conteudo = document.querySelector("main");
    let texto = conteudo.innerText;
}
let fala = new SpeechSynthesisUtterance(texto);
fala.lang = "pt-BR";
fala.onend = finalizarLeitura;
lendo = true
function lerEmVozAlta() {
    let conteudo = document.querySelector("main");
    let texto = conteudo.innerText;

    let fala = new SpeechSynthesisUtterance(texto);

    fala.lang = "pt-BR";
    fala.onend = finalizarLeitura;

    lendo = true;

}
speechSynthesis.speak(fala);
function finalizarLeitura() {
    // implemente aqui
}

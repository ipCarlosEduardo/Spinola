const telas = [
	"img/imagem1.png",
	"img/imagem2.png",
	"img/imagem3.png"
];

let telaAtual = 0;

const moldura = document.getElementById("moldura");
const btnVoltar = document.getElementById("btnVoltar");
const btnAvancar = document.getElementById("btnAvancar");

function mostrarTela(indice) {
	telaAtual = (indice + telas.length) % telas.length;
	moldura.src = telas[telaAtual];
}

btnVoltar.addEventListener("click", function () {
	mostrarTela(telaAtual - 1);
});

btnAvancar.addEventListener("click", function () {
	mostrarTela(telaAtual + 1);
});

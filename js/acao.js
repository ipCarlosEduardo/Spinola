const telas = [
	"img/quadro1.png",
	"img/quadro2.png",
	"img/quadro3.png"
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

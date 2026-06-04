const telas = [
	"img/quadro1.png",
	"img/quadro2.png"
];

let telaAtual = 0;

const moldura = document.getElementById("moldura");
const btnVoltar = document.getElementById("btnVoltar");
const btnAvancar = document.getElementById("btnAvancar");

function mostrarTela(indice) {
	telaAtual = (indice + telas.length) % telas.length;
	moldura.style.opacity = "0";

	setTimeout(function () {
		moldura.src = telas[telaAtual];
		moldura.style.opacity = "1";
	}, 180);
}

btnVoltar.addEventListener("click", function () {
	mostrarTela(telaAtual - 1);
});

btnAvancar.addEventListener("click", function () {
	mostrarTela(telaAtual + 1);
});

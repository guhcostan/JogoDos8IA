var _ = require('lodash');

function getRandomNumber() {
	var number = Math.floor(Math.random() * 9);
	if (!numeros.includes(number)) {
		numeros.push(number)
		return number;
	} else {
		return getRandomNumber()
	}
}

function printMatriz(matriz) {

	console.log(matriz[0])
	console.log(matriz[1])
	console.log(matriz[2])

	console.log()
}

var matriz = new Array(3)
matriz[0] = new Array(3)
matriz[1] = new Array(3)
matriz[2] = new Array(3)

var matrizSucesso = new Array(3)
matrizSucesso[0] = new Array(3)
matrizSucesso[1] = new Array(3)
matrizSucesso[2] = new Array(3)


var numeros = []

matriz[0][0] = getRandomNumber();
matriz[0][1] = getRandomNumber();
matriz[0][2] = getRandomNumber();
matriz[1][0] = getRandomNumber();
matriz[1][1] = getRandomNumber();
matriz[1][2] = getRandomNumber();
matriz[2][0] = getRandomNumber();
matriz[2][1] = getRandomNumber();
matriz[2][2] = getRandomNumber();

matrizSucesso[1][1] = 0;
matrizSucesso[0][0] = 1;
matrizSucesso[0][1] = 2;
matrizSucesso[0][2] = 3;

matrizSucesso[1][2] = 4;
matrizSucesso[2][2] = 5;
matrizSucesso[2][1] = 6;
matrizSucesso[2][0] = 7;
matrizSucesso[1][0] = 8;


function pegaPosicaoMe(matriz) {
	var xPositionMe;
	var yPositionMe;
	for (xPositionMe = 0; xPositionMe < matriz.length; ++xPositionMe) {
		for (yPositionMe = 0; yPositionMe < matriz[xPositionMe].length; ++yPositionMe) {
			if (matriz[xPositionMe][yPositionMe] === 0) {
				return { xPositionMe, yPositionMe };
			}
		}
	}

	return erro;
}

function calcularJogadasPossiveis(matriz, xPositionMe, yPositionMe) {
	var movimentosPossiveis = new Array();
	if (matriz[xPositionMe + 1][yPositionMe]) {
		movimentosPossiveis.push({ movimento: 'baixo', score: 0 })
	}
	if (matriz[xPositionMe - 1][yPositionMe]) {
		movimentosPossiveis.push({ movimento: 'topo', score: 0 })
	}
	if (matriz[xPositionMe][yPositionMe + 1]) {
		movimentosPossiveis.push({ movimento: 'direita', score: 0 })
	}
	if (matriz[xPositionMe][yPositionMe - 1]) {
		movimentosPossiveis.push({ movimento: 'esquerda', score: 0 })
	}

	return movimentosPossiveis;
}

function calculaScore(matrizComparativa, matrizSucesso) {
	var score = 0;
	for (var x = 0; x < matriz.length; ++x) {
		for (var y = 0; y < matriz[x].length; ++y) {
			if(matrizComparativa[x][y] === matrizSucesso[x][y]){
				score++;
			}
		}
	}
	return score;
}

function calculaMelhorJogada(matriz) {

	var { xPositionMe, yPositionMe } = pegaPosicaoMe(matriz);

	var jogadasPossiveis = calcularJogadasPossiveis(matriz,
	                                                xPositionMe, yPositionMe);

	var melhorJogada = {
		movimento: null,
		score: 0
	};

	for (var x1 = 0; x1 < jogadasPossiveis.length; ++x1) {

		var matrizComparativa = fazJogada(jogadasPossiveis[x1].movimento, matriz);

		jogadasPossiveis[x1].score = calculaScore(matrizComparativa, matrizSucesso);

	}

	for (var x2 = 0; x2 < jogadasPossiveis.length; ++x2) {
		if (jogadasPossiveis[x2].score > melhorJogada.score) {
			melhorJogada.movimento = jogadasPossiveis[x2].movimento;
		}
	}

	return melhorJogada.movimento;
}

function fazJogada(melhorMovimento, matriz) {
	var matrizCopy = _.clone(matriz);
	var { xPositionMe, yPositionMe } = pegaPosicaoMe(matrizCopy);

	var numeroTrocaMovimento;

	switch (melhorMovimento) {
		case 'baixo':
			if (matrizCopy[xPositionMe + 1][yPositionMe]) {
				numeroTrocaMovimento = matrizCopy[xPositionMe + 1][yPositionMe];
				matrizCopy[xPositionMe + 1][yPositionMe] = matrizCopy[xPositionMe][yPositionMe];
				matrizCopy[xPositionMe][yPositionMe] = numeroTrocaMovimento;
			}
			break
		case 'topo':
			if (matrizCopy[xPositionMe - 1][yPositionMe]) {
				numeroTrocaMovimento = matrizCopy[xPositionMe - 1][yPositionMe];
				matrizCopy[xPositionMe - 1][yPositionMe] = matrizCopy[xPositionMe][yPositionMe];
				matrizCopy[xPositionMe][yPositionMe] = numeroTrocaMovimento;
			}
			break
		case 'esquerda':
			if (matrizCopy[xPositionMe][yPositionMe - 1]) {
				numeroTrocaMovimento = matrizCopy[xPositionMe][yPositionMe - 1];
				matrizCopy[xPositionMe][yPositionMe - 1] = matrizCopy[xPositionMe][yPositionMe];
				matrizCopy[xPositionMe][yPositionMe] = numeroTrocaMovimento;
			}
			break
		case 'direita':
			if (matrizCopy[xPositionMe][yPositionMe + 1]) {
				numeroTrocaMovimento = matrizCopy[xPositionMe][yPositionMe + 1];
				matrizCopy[xPositionMe][yPositionMe + 1] = matrizCopy[xPositionMe][yPositionMe];
				matrizCopy[xPositionMe][yPositionMe] = numeroTrocaMovimento;
			}
			break
	}
	return matrizCopy;
}

while (true) {

	console.clear()

	printMatriz(matriz);

	var melhorMovimento = calculaMelhorJogada(matriz)

	fazJogada(melhorMovimento, matriz);


	break;
}

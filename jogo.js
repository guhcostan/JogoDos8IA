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


function pegaPosicao(matriz, elemento) {
	var xPosition;
	var yPosition;
	for (xPosition = 0; xPosition < matriz.length; ++xPosition) {
		for (yPosition = 0; yPosition < matriz[xPosition].length; ++yPosition) {
			if (matriz[xPosition][yPosition] === elemento) {
				return { xPosition, yPosition };
			}
		}
	}

	return erro;
}

function calcularJogadasPossiveis(matriz, xPositionMe, yPositionMe) {
	var movimentosPossiveis = [];
	if (matriz[xPositionMe + 1] && matriz[xPositionMe + 1][yPositionMe]) {
		movimentosPossiveis.push({ movimento: 'baixo', score: 0 })
	}
	if (matriz[xPositionMe] && matriz[xPositionMe][yPositionMe + 1]) {
		movimentosPossiveis.push({ movimento: 'direita', score: 0 })
	}
	if (matriz[xPositionMe - 1] && matriz[xPositionMe - 1][yPositionMe]) {
		movimentosPossiveis.push({ movimento: 'topo', score: 0 })
	}
	if (matriz[xPositionMe] && matriz[xPositionMe][yPositionMe - 1]) {
		movimentosPossiveis.push({ movimento: 'esquerda', score: 0 })
	}

	return movimentosPossiveis;
}

function calculaScore(matrizComparativa, matrizSucesso) {
	var score = 0;
	for (var x = 0; x < matrizComparativa.length; ++x) {
		for (var y = 0; y < matrizComparativa[x].length; ++y) {
			var { xPosition, yPosition } = pegaPosicao(matrizSucesso, matrizComparativa[x][y]);
			var movimentosX = (x - xPosition) > 0 ? (x - xPosition) : (x - xPosition) * -1;
			var movimentosY = (y - yPosition) > 0 ? (y - yPosition) : (y - yPosition) * -1;
			var motimentosTotal = movimentosX + movimentosY;
			score += motimentosTotal;
		}
	}
	return score;
}

function calculaMelhorJogada(matriz, ultimoMovimento, score) {

	var matrizCopy = JSON.parse(JSON.stringify(matriz))

	var { xPosition, yPosition } = pegaPosicao(matrizCopy, 0);

	var jogadasPossiveis = calcularJogadasPossiveis(matrizCopy,
	                                                xPosition, yPosition);

	var melhorJogada = jogadasPossiveis[Math.floor((Math.random() * jogadasPossiveis.length))];

	for (var x1 = 0; x1 < jogadasPossiveis.length; ++x1) {

		var matrizComparativa = fazJogada(jogadasPossiveis[x1].movimento, JSON.parse(JSON.stringify(matrizCopy)));

		jogadasPossiveis[x1].score = calculaScore(matrizComparativa, matrizSucesso);

	}

	for (var x2 = 0; x2 < jogadasPossiveis.length; ++x2) {
		if (jogadasPossiveis[x2].score < melhorJogada.score && jogadasPossiveis[x2].movimento !== ultimoMovimento && score > jogadasPossiveis[x2].score) {
			melhorJogada = jogadasPossiveis[x2];
		}
	}

	return melhorJogada.movimento;
}

function fazJogada(melhorMovimento, matriz) {
	var { xPosition, yPosition } = pegaPosicao(matriz, 0);

	var numeroTrocaMovimento;

	switch (melhorMovimento) {
		case 'baixo':
			if (matriz[xPosition + 1][yPosition]) {
				numeroTrocaMovimento = matriz[xPosition + 1][yPosition];
				matriz[xPosition + 1][yPosition] = matriz[xPosition][yPosition];
				matriz[xPosition][yPosition] = numeroTrocaMovimento;
			}
			break
		case 'esquerda':
			if (matriz[xPosition][yPosition - 1]) {
				numeroTrocaMovimento = matriz[xPosition][yPosition - 1];
				matriz[xPosition][yPosition - 1] = matriz[xPosition][yPosition];
				matriz[xPosition][yPosition] = numeroTrocaMovimento;
			}
			break
		case 'topo':
			if (matriz[xPosition - 1][yPosition]) {
				numeroTrocaMovimento = matriz[xPosition - 1][yPosition];
				matriz[xPosition - 1][yPosition] = matriz[xPosition][yPosition];
				matriz[xPosition][yPosition] = numeroTrocaMovimento;
			}
			break
		case 'direita':
			if (matriz[xPosition][yPosition + 1]) {
				numeroTrocaMovimento = matriz[xPosition][yPosition + 1];
				matriz[xPosition][yPosition + 1] = matriz[xPosition][yPosition];
				matriz[xPosition][yPosition] = numeroTrocaMovimento;
			}
			break
	}
	return matriz;
}


var penUltimoMovimento = '';
var ultimoMovimento = '';
while (calculaScore(matriz, matrizSucesso)) {

	console.clear()

	printMatriz(matriz);

	var melhorMovimento = calculaMelhorJogada(matriz , penUltimoMovimento, calculaScore(matriz, matrizSucesso))

	penUltimoMovimento = ultimoMovimento;
	ultimoMovimento = melhorMovimento;

	console.log(melhorMovimento)

	fazJogada(melhorMovimento, matriz);


	console.log(calculaScore(matriz, matrizSucesso))

}

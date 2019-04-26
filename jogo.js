function getRandomNumber() {
	var number = Math.floor(Math.random() * 9);
	if (!numeros.includes(number)) {
		numeros.push(number)
		return number;
	} else {
		return getRandomNumber()
	}
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


function calculaMelhorJogada(matriz) {

	return 'esquerda';
}

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

function fazJogada(melhorMovimento, matriz) {
	var { xPositionMe, yPositionMe } = pegaPosicaoMe(matriz);

	var numeroTrocaMovimento;

	switch (melhorMovimento) {
		case 'topo':
			if(matriz[xPositionMe+ 1][yPositionMe]) {
				numeroTrocaMovimento = matriz[xPositionMe + 1][yPositionMe];
				matriz[xPositionMe + 1][yPositionMe] = matriz[xPositionMe][yPositionMe];
				matriz[xPositionMe][yPositionMe] = numeroTrocaMovimento;
			}
			break
		case 'baixo':
			if(matriz[xPositionMe- 1][yPositionMe]) {
				numeroTrocaMovimento = matriz[xPositionMe - 1][yPositionMe];
				matriz[xPositionMe - 1][yPositionMe] = matriz[xPositionMe][yPositionMe];
				matriz[xPositionMe][yPositionMe] = numeroTrocaMovimento;
			}
			break
		case 'esquerda':
			if(matriz[xPositionMe][yPositionMe - 1]) {
				numeroTrocaMovimento = matriz[xPositionMe][yPositionMe - 1];
				matriz[xPositionMe][yPositionMe - 1] = matriz[xPositionMe][yPositionMe];
				matriz[xPositionMe][yPositionMe] = numeroTrocaMovimento;
			}
			break
		case 'direita':
			if(matriz[xPositionMe][yPositionMe + 1]) {
				numeroTrocaMovimento = matriz[xPositionMe][yPositionMe + 1];
				matriz[xPositionMe][yPositionMe + 1] = matriz[xPositionMe][yPositionMe];
				matriz[xPositionMe][yPositionMe] = numeroTrocaMovimento;
			}
			break
	}
	return matriz;
}

while(true){

	console.clear()

	console.log(matriz[0])
	console.log(matriz[1])
	console.log(matriz[2])

	console.log()

	var melhorMovimento = calculaMelhorJogada(matriz)

	fazJogada(melhorMovimento, matriz);

	console.log(matriz[0])
	console.log(matriz[1])
	console.log(matriz[2])


	break;
}

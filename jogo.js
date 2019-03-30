
var matriz = new Array(3)
matriz[0] = new Array(3)
matriz[1] = new Array(3)
matriz[2] = new Array(3)


var numeros = []

function getRandomNumber(){
  var number = Math.floor(Math.random() * 9);
  if(!numeros.includes(number)){
    numeros.push(number)
    return number;
  }else{
    return getRandomNumber()
  }
}

matriz[0][0] = getRandomNumber();
matriz[0][1] = getRandomNumber();
matriz[0][2] = getRandomNumber();
matriz[1][0] = getRandomNumber();
matriz[1][1] = getRandomNumber();
matriz[1][2] = getRandomNumber();
matriz[2][0] = getRandomNumber();
matriz[2][1] = getRandomNumber();
matriz[2][2] = getRandomNumber();

console.log(matriz[0])
console.log(matriz[1])
console.log(matriz[2])


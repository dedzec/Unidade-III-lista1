/* Questão: 5. Crie um script que pergunte 3 números ao usuário, coloque
 *      em um array, depois exiba tal array. Modifique os elementos do
 *      array de modo a sequência de números ficar do contrário. Ou seja,
 *      se digitou: 1,2,3 Vai aparecer: 3,2,1
 * Autor: Lucas Leal Magalhães
 * Data: 18/06/2023
 **/
const prompt = require('prompt-sync')();

function start() {
  const numeros = [];
  let i = 0;
  while (i < 3) {
    let num = parseFloat(prompt(`Digite o ${i + 1}º número: `));
    if (!isNaN(num)) {
      numeros.push(num);
      i++;
    } else {
      console.log('Você não digitou um número');
    }
  }

  console.log('--- Array ---');
  numeros.forEach((num) => {
    console.log(`${num}`);
  });

  console.log('--- Array Reverso ---');
  numeros.reverse().forEach((num) => {
    console.log(`${num}`);
  });
}

start();

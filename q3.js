/* Questão: 3. Elabore um algoritmo que armazene o nome e duas notas de
 *      5 alunos e imprima uma listagem contendo nome, as duas notas
 *      e a média de cada aluno.
 * Autor: Lucas Leal Magalhães
 * Data: 18/06/2023
 **/
const prompt = require('prompt-sync')();

function start() {
  const alunos = [];
  let i = 0;
  while (i < 5) {
    let nome = prompt('Digite o nome do aluno: ');
    let nota1 = parseFloat(prompt('Digite a primaira nota: '));
    let nota2 = parseFloat(prompt('Digite a segunda nota: '));
    if (!isNaN(nota1) && !isNaN(nota2)) {
      alunos.push({
        nome: nome,
        nota1: nota1,
        nota2: nota2,
        media: (nota1 + nota2) / 2.0,
      });
      i++;
    } else {
      console.log('Você não digitou um número');
    }
  }

  console.log('------- Alunos -------');
  alunos.forEach((aluno) => {
    console.log(`Nome: ${aluno.nome}`);
    console.log(`Nota 1: ${aluno.nota1}`);
    console.log(`Nota 2: ${aluno.nota2}`);
    console.log(`Média: ${aluno.media}`);
    console.log(`---------------------`);
  });
}

start();

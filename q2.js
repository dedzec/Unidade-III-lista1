/* Questão: 2. Implemente um algoritmo que leia as notas e os nomes
 *      de 5 alunos armazenando os dados em vetores de 5 posições, sendo
 *      que as notas serão armazenadas em um vetor de reais e os nomes em
 *      um outro vetor do tipo cadeia de caracteres. Ao final o algoritmo deve
 *      escrever na tela somente os nomes dos alunos que tiraram nota maior que 5.0.
 * Autor: Lucas Leal Magalhães
 * Data: 18/06/2023
 **/
const prompt = require('prompt-sync')();

function start() {
  const alunos = [];
  let i = 0;
  while (i < 5) {
    let nome = prompt('Digite o nome do aluno: ');
    let nota = parseFloat(prompt('Digite uma nota: '));
    if (!isNaN(nota)) {
      alunos.push({
        nome: nome,
        nota: nota,
      });
      i++;
    } else {
      console.log('Você não digitou um número');
    }
  }

  console.log('--- Alunos que tiraram notas maiores que 5 ---');
  alunos.forEach((aluno) => {
    if (aluno.nota > 5.0) console.log(`${aluno.nome}`);
  });
}

start();

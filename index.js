console.log(`trabalhando com condicionais.`);

console.log(`Destinos oferecidos: `);

const listaDeDestinos = new Array(
`Paris`,
`Tokyo`,
`Bali`,
`Bariloche`,
);

console.log(listaDeDestinos);

const idadeComprador = 19;
const menorAcompanhado = true;

if (idadeComprador < 18 && menorAcompanhado == true){


if (menorAcompanhado == true) {
  console.log(`O menor encontra-se acompanhado, então ele pode realizar a viagem.`)
 
console.log(`O destino escolhido foi: ${listaDeDestinos[0]}`);

}else if (idadeComprador<18 && menorAcompanhado == false){
  console.log(`O comprador é menor de idade e não está acompanhado.`);
}
}

if(idadeComprador>=18){
  console.log(`Comprador maior de idade, destino selecionado 
foi: ${listaDeDestinos[3]}`);
}
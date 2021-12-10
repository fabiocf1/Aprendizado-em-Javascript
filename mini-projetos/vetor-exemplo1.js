var num = [5,8,2,9,3]
num.push(1) // comando usado para adicionar um novo valor na VAR sem se preocupar com o slot
num.sort() //comando usado para organizar os valores em ordem crescente.
console.log(`Nosso vetor é o ${num} e ele tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
var pos = num.indexOf(8) // comando usado para pesquisar determinado valor dentro dos vetores
if (pos == -1) { // IF criado para mostrar uma mensagem caso o numero não exista no vetor
    console.log(`O valor não foi encontrado`)
} else {
console.log(`O valor 8 está na posição ${pos}`)
}
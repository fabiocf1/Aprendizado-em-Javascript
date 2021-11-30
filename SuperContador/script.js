function contar(){
var inicio = document.getElementById("txti")
var fim = document.getElementById("txtf")
var passo = document.getElementById("txtp")
var res = document.getElementById("res")

if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    
window.alert("[ERRO] Por favor, complete TODOS os dados") 
} else {
    res.innerHTML = `Contando: <br>`
    var inicio = Number(inicio.value) //tem que converter a para numero
    var fim = Number(fim.value)
    var passo = Number(passo.value)
    if (passo <= 0)
        window.alert('Passo INVALIDO')
        passo = 1

    // CONTAGEM CRESCENTE
    if (inicio < fim) {
        for(var c = inicio; c <= fim; c += passo)
        res.innerHTML += `${c}`
   // CONTAGEM DECRESCENTE
    } else {
        for (var c = inicio; c >= fim; c-= passo)
        res.innerHTML += `${c}`
    }
  
}

}

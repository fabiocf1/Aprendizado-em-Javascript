function contar(){
var inicio = document.getElementById("txti")
var fim = document.getElementById("txtf")
var passo = document.getElementById("txtp")
var res = document.getElementById("res")

if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    
window.alert("[ERRO] Por favor, complete TODOS os dados") 
} else {
    res.innerHTML = "Contando"
    var i = Number(inicio.value)
  
}

}
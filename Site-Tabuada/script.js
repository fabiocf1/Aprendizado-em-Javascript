function multiplicar(){
var n = document.getElementById("ntxt")
var res = document.querySelector(`div#res`)
var tab = document.getElementById("seltab")
var n1 = Number(n.value) // criei para colocar o valor de N em numero.

if (n.value.length == 0){
    window.alert("Por favor, digite um numero")
 } else {
    res.innerHTML = `Tabuada do numero <strong>${n1}</strong>: 
<p> ${n1} x 1= <strong>${ n1*1} </strong></p>
<p> ${n1} x 2= <strong>${ n1*2} </strong></p>
<p> ${n1} x 3= <strong>${ n1*3} </strong></p>
<p> ${n1} x 4= <strong>${ n1*4} </strong></p> 
<p> ${n1} x 5= <strong>${ n1*5} </strong></p>
<p> ${n1} x 6= <strong>${ n1*6} </strong></p>
<p> ${n1} x 7= <strong>${ n1*7} </strong></p>
<p> ${n1} x 8= <strong>${ n1*8} </strong></p>
<p> ${n1} x 9= <strong>${ n1*9} </strong></p>
<p> ${n1} x 10= <strong>${ n1*10} </strong></p>`
}

}


// CÓDIGO DO PROFESSOR \/

/* function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while ( c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
    
} */
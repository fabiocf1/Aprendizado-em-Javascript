function carregar() {
    var txtnome = window.document.querySelector("input#txtnome").value
    var nome = window.document.querySelector("div#nome")
    nome.innerHTML += `<p>Ola ${txtnome}, seja bem vindo ao site!</p>`
    nome.innerHTML += `<p>Seu nome tem ${txtnome.length} letras</p>`
    nome.innerHTML += `<p>Seu nome todo em <strong>MAIUSUCULO</strong> é: ${txtnome.toUpperCase()}</p>`
    nome.innerHTML += `<p>Seu nome todo em minusculo é: ${txtnome.toLowerCase()}</p>`
  }
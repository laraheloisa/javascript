const inputTexto = document.querySelector("[input-texto]")
const btnContar = document.querySelector("[btn-contar]")
const divcontador = document.querySelector("[txt-contador]")

let tipocontagem = "caracteres"
let ehContagemCaracteres = true
let palavra = " "

const handleBtnContar = (evento) => {
    console.log(evento.target.value) 
    if(ehContagemCaracteres){
        evento.target.innerText = "Contar palavras"
    
    }else {
        evento.target.innerText = "Contar Caracteres"
    }
    ehContagemCaracteres = !ehContagemCaracteres 
}

function contadorCaracter (palavra){
    console.log(palavra.contador.length)
    palavra.contador.length = "palavra"
    
}

btnContar.addEventListener("click", handleBtnContar) // capturar um evento 
//capturar através do evento 
//todos atributos que começa com on é um evento
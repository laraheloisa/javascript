const inputTexto = document.querySelector("[input-texto]")
const btnContar = document.querySelector("[btn-contar]")
const divcontador = document.querySelector("[txt-contador]")

let tipocontagem = "caracteres"
let ehContagemCaracteres = true

const handleBtnContar = (evento) => {
    console.log(evento.target.value) 
    if(ehContagemCaracteres){
        evento.target.innerText = "Contar palavras"
    
    }else {
        evento.target.innerText = "Contar Caracteres"
    }
    ehContagemCaracteres = !ehContagemCaracteres 
}

function handleInputTexto (evento)  {

}





btnContar.addEventListener("click", handleBtnContar) // capturar um evento 
inputTexto.addEventListener("input", handleInputTexto)
//capturar através do evento 
//todos atributos que começa com on é um evento
const inputTexto = document.querySelector("[input-texto]")
const btnContar = document.querySelector("[btn-contar]")
const divcontador = document.querySelector("[txt-contador]")

 
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

function handleInputTexto(evento){ 
   
    if(ehContagemCaracteres){
        let contadorCaracter = evento.target.value.length; // atribui variável, chama a função atribuindo o comprimento da string atualmente digitada no campo de texto à variável 
        divcontador.innerText = contadorCaracter  + "caracteres";} 

    else{
        let contadorPalavra = evento.target.value.trim().split(" ").length; //trim vai remover espaços extras
        divcontador.innerText = contadorPalavra  + "palavras";
    }
}

btnContar.addEventListener("click", handleBtnContar) // capturar um evento 
inputTexto.addEventListener("input", handleInputTexto)
//capturar através do evento 
//todos atributos que começa com on é um evento
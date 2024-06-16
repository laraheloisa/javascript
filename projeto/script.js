const inputNovaTarefa = document.getElementById('input')
const btnCriaTarefa = document.getElementById('btnCriaTarefa')
const hrlinha = document.getElementById('linha')
const ullistaTarefas = document.getElementById('listadeTarefas')
const btnDelete = document.getElementsByClassName('btnDelete')
const imgClipboard = document.getElementById('clipboard-img')
const divTexto1 = document.getElementById("texto1")
const divTexto2 = document.getElementById("texto2")


let lista = []
ullistaTarefas.textContent = ' '

btnCriaTarefa.addEventListener('click', function(){

    if (inputNovaTarefa.value.trim() === '') {
        alert('Por favor, digite uma task');
        return;
    }
    
    lista.push(inputNovaTarefa.value) //adiciona um novo elemento no meu array
    console.log(lista)
    mostraTarefas()
    divTexto1.textContent = " "
    divTexto2.textContent = " "
    hrlinha.parentNode.removeChild(linha) //localiza o pai do elemento linha e remove o elemento linha
    clipboard()
    
    
})

inputNovaTarefa.addEventListener('click', function(){
    inputNovaTarefa.value = ' ';
})

function mostraTarefas() {
    let novalista = []

    
    lista.forEach(tarefa => { //passa por cada item do array
        novalista = novalista + `
        <li class="task">
            <div>
                <button class="btnAcao">
                    <i class="material-icons">check</i>
                </button>
            </div>
            <div class="nomeTarefaCriada">${tarefa}</div>
            <div>
                <button class="btnDelete">
                    <i class="material-icons">delete_forever</i>
                </button>
            </div>
        </li> 
        `
    })

    ullistaTarefas.innerHTML = novalista
    
}
btnDelete.addEventListener("click", function(){
    ullistaTarefas.classList.remove('listadeTarefas')

    
})


function clipboard(){
    let task = inputNovaTarefa.value;
    if ( task !== ' ')
    imgClipboard.style.display = 'none'

}






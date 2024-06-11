const inputNovaTarefa = document.getElementById('input')
const btnCriaTarefa = document.getElementById('btnCriaTarefa')
const listaTarefas = document.getElementById('listadeTarefas')
const texto1 = document.getElementById("texto1")
const texto2 = document.getElementById("texto2")


let lista = []

btnCriaTarefa.addEventListener('click', function(){
    
    lista.push(inputNovaTarefa.value) //adiciona um novo elemento no meu array
    console.log(lista)
    mostraTarefas()
    texto1.textContent = " "
    texto2.textContent = " "


})

function mostraTarefas() {
    let novalista = ' '

    lista.forEach( tarefa => { //passa por cada item do array
        novalista = novalista + `
        <li class="task">
                <div>
                    <img src="Checked=true, Hover=false.png" alt="checked">
                </div>
                <div class='nomeTarefaCriada'>${tarefa}</div>
                <div>
                    <button class="btnAcao">
                        <img src="trash.png" alt="delete">
                    </button>
                </div>
           </li> 
        `
    })

    listaTarefas.innerHTML = novalista
    
}
const localStorageKey = 'CheckList'


function NovaTarefa(){
    let input = document.getElementById("input-new-task");
    input.style.border = ''

    if(!input.value){
        input.style.border = '1px solid red'
        alert('Digite algo para inserir em sua lista')
    }
    else if(ValidarInput()){
        alert('Já existe essa tarefa')
    }
    else{
        let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")

        values.push({
            name: input.value
        })

        localStorage.setItem(localStorageKey, JSON.stringify(values))
        exibirTarefa()
    }

    input.value = ""
}

function exibirTarefa(){
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let list = document.getElementById('toDoList')
    list.innerHTML = ''
    for(let i = 0; i < values.length; i++)
    {
        list.innerHTML += `<li><span>${values[i]['name']}</span><div class="botao">
        <button class='btnOk' onclick='checkTarefa("${values[i]['name']}", this)' tittle="Marcar como concluido">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16"><path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/></svg></button>
        </li>`
    }
}

function removeTarefa(tarefa){
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let index = values.findIndex(x => x.name == tarefa);

    
    values.splice(index, 1);

    localStorage.setItem(localStorageKey, JSON.stringify(values));
    exibirTarefa();
}

function ValidarInput(){
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
    let inputValue = document.getElementById('input-new-task').value

    let exists = values.find(x => x.name == inputValue);
    return !exists ? false : true 
}

function checkTarefa(tarefa, botao) {
    botao.style.border = '1.5px solid black'
    // Alterar o conteúdo do botão
    botao.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/></svg>';
    
    // Alterar a cor do botão
    botao.style.backgroundColor = "red"; // Aqui você pode definir a cor desejada

    botao.classList.remove("btnOk");
    botao.classList.add("btnClose");

    botao.addEventListener("click", function(){
        removeTarefa(tarefa);
    })
    
    // Encontrar o elemento pai (a <li>) do botão
    var liElement = botao.parentNode;
    
    let li = liElement.parentNode
    // Alterar a cor do background da <li>
    li.style.backgroundColor = "red"; // Aqui você pode definir a cor desejada
  }

exibirTarefa();
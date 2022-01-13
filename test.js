const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')
const form = document.getElementById('form')


todoButton.addEventListener('click', addSubmit)
todoList.addEventListener('click', deleteCheck)

function addSubmit(){
    form.addEventListener('submit', function(e){
        e.preventDefault();
        const todoValue = todoInput.value;
        if (todoValue){
            const todoDiv = document.createElement('div')
            todoDiv.classList.add('todo')
    
            const newTodo = document.createElement('li')
            newTodo.classList.add('todo-item')
            newTodo.innerText = todoValue
            todoDiv.appendChild(newTodo)
    
            const completedButton = document.createElement('button')
            completedButton.innerText = 'check'
            completedButton.classList.add('complete-btn')
            todoDiv.appendChild(completedButton)
    
            const trashButton = document.createElement('button')
            trashButton.innerText = 'delete'
            trashButton.classList.add('trash-btn')
            todoDiv.appendChild(trashButton)
    
            todoList.appendChild(todoDiv)
            todoInput.value = ""
                
        }
    })

}

function deleteCheck(event){
    const item = event.target;
    if(item.classList[0]=== 'trash-btn'){
        const todo = item.parentElement;
        todo.classList.add("fall")
        todo.addEventListener('transitionend', function(){
            todo.remove();
        })

    }

    if(item.classList[0]=== 'complete-btn'){
        // const todo = item.previousElementSibling
        const todo = item.parentElement;
        todo.classList.toggle('completed')
    }

}
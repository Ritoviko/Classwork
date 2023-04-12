//selector:
const addButton = document.querySelector(".add-btn");
const todoInput = document.querySelector(".todo-input");
const filterTodo = document.querySelector(".filter-todo");
const todoList = document.querySelector(".todo-list");

//Event Listener:
addButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterTodo.addEventListener("click", filterdTodo);

//Functions:
function addTodo(event){
    //prevent form from submitting
    event.preventDefault();

    

    //div -> List element
    //list element
    //Complete and trash button
    //add it to dom

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const todoItem = document.createElement("li");
    todoItem.classList.add("todo-item");
    todoItem.innerText = todoInput.value;

    const completeButton = document.createElement("button");
    completeButton.innerHTML = "<i class = 'fas fa-check'></i>";
    completeButton.classList.add("complete-btn");

    const trashButton = document.createElement("button");
    trashButton.innerHTML = "<i class = 'fas fa-trash'></i>";
    trashButton.classList.add("trash-btn");

    todoDiv.appendChild(todoItem);
    todoDiv.appendChild(completeButton);
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);

    todoInput.value = "";
}

function deleteCheck(e){
    //complete btn functionality
    //trash btn functionality

    const item = e.target;

    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.add("completed");
    }
}
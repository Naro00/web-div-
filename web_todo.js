const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");
const todoInput = todoForm.querySelector("input");

let toDos = [];
const TODOKEY ="todos"

function saveTodos() {
    localStorage.setItem(TODOKEY,JSON.stringify(toDos)); //value를 string으로 저장하고 싶을때 jason.stringify를 씀
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
    saveTodos();
}
//여기서 nweTodo = newTodoObj 
function paintTOdo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click",deleteTodo)
    li.appendChild(span);
    li.appendChild(button); //append는 마지막에 와야함
    todoList.appendChild(li);
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value; 
    todoInput.value = "";  // todoInput 값이 비워졌다고 해서 newTodo의 값이 비워지는건 아님. > 전에 이미 채웠기 때문    
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintTOdo(newTodoObj);
    saveTodos();
}

todoForm.addEventListener("submit",handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOKEY);

if(savedTodos !== null){
    const parsedTodos = JSON.parse(savedTodos);
    toDos = parsedTodos;
    parsedTodos.forEach(paintTOdo);
}
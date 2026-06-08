const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const savedTodos = localStorage.getItem("todos");

let toDos = [];

function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function deletTodo(event) { 
    const targetToRemove = event.target.parentElement;
    targetToRemove.remove();
    toDos = toDos.filter((item) => item.id != parseInt(targetToRemove.id));
    saveToDos();
}

function paintToDo(newTodo2) {
    const li = document.createElement("li");
    li.id = newTodo2.id;
    const span = document.createElement("span");
    span.innerText = newTodo2.text;
    li.appendChild(span);
    const button = document.createElement("button");
    button.innerText = "❎";
    button.addEventListener("click", deletTodo);
    li.appendChild(button); 
    toDoList.appendChild(li);

}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObject = {
        id: Date.now(),
        text: newTodo,
    }
    toDos.push(newTodoObject);
    paintToDo(newTodoObject);
    saveToDos();
}

toDoForm.addEventListener("submit", handleTodoSubmit);

if (savedTodos) {
    const parsedTodos = JSON.parse(savedTodos);
    toDos = parsedTodos;
    parsedTodos.forEach(paintToDo);
}

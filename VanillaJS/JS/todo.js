const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const savedTodos = localStorage.getItem("todos"); // 저장된 string을 가져오는것

let toDos = [];

function saveToDos() { // 브라우저 로컬저장소에 toDos[]를 string 형태로 저장하는것
    localStorage.setItem("todos", JSON.stringify(toDos)); // stringify() can convert any object into a string
    // JSON object provides a function that converts values to or from JavaScriopt Object Notation form(JSON)
    // in this part, toDos is saved in the localStorage of the browser as a string with the key "todos"
    // That would be looked array but actually a string
}

function deletTodo(event) {
    const targetToRemove = event.target.parentElement;
    targetToRemove.remove();
}

function paintToDo(newTodo2) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo2;
    li.appendChild(span);
    const button = document.createElement("button");
    button.innerText = "❎";
    button.addEventListener("click", deletTodo);
    toDoList.appendChild(li);
    li.appendChild(button);

}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleTodoSubmit);

if (savedTodos) { // display the to do list if the data still exists in the localStorage after refreshing the screen
    const parsedTodos = JSON.parse(savedTodos); // 브라우저에서 가져온 string을 array 형태로 풀어내는것
    toDos = parsedTodos; // 새로고침하며 initialize된 toDos array에 localStorage에서 가져온 기존 정보들 덮어씌는 것. const로 선언 시 불가능(어레이 내용 바꾸는게 아니라 덮어씌우기 이기때문)
    parsedTodos.forEach(paintToDo); // array에 있는 각 element 하나당 paintToDo를 실행시킴
}
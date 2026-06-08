const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); // the value in the input is saved in toDoInput when user presses the enter because this element is wraped by the form
const toDoList = document.getElementById("todo-list");

function deletTodo(event){ // with the event, this function can specify what and where the action(click) is
    // console.log(event.composedPath()); // show the path that event comes from. So user can find the target of the action 
    const targetToRemove = event.target.parentElement; // specify the element. In here, the target is parent element of the button which is 'li'
    targetToRemove.remove();
}

function paintToDo(newTodo){
    const li = document.createElement("li"); // create an element that wasn't defined in html file. li is just a dot. You can put some text in here directly.
    const span = document.createElement("span"); // To modifiy the text later, you need a span. You can seperate additional element by the span
    span.innerText = newTodo; // put text in the text area inside of span
    li.appendChild(span); // add the span into the li
    const button = document.createElement("button");
    button.innerText = "❎";
    button.addEventListener("click", deletTodo);
    toDoList.appendChild(li); // put the li element into the toDoList(input). The li wraps the span
    li.appendChild(button);
    // the result will be accumulated

}

function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleTodoSubmit);
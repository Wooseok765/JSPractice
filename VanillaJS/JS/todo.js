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
    // 현재 toDos 어레이이에 있는 element들과 x버튼 클릭으로 얻어진 targetToRemove의 id를 비교
    // html에서 가져온 id는 string 형태, toDos 내부의 id는 integer 이기 때문에 parseInt 필요
    // 이후 true가 나올 시 filter는 해당 element를 그대로 반환(새 어레이에 넣음)
    // false일 경우 해당 element는 건너뜀
    // filter()가 toDos의 구성 element를 전부 확인 하면 새로운 array를 반환함 이것을 기존의 toDos 어레이에 덮어씌우는것
    saveToDos();
    // 최신화 된 toDos를 localStorage에 저장, 즉 x버튼 눌러서 사라진 targetToRemove가 제외된 어레이로 대체되는것
}

function paintToDo(newTodo2) {
    const li = document.createElement("li");
    li.id = newTodo2.id; // 넘겨받은 오브젝트의 아이이디를 element의 아이디로 설정함(나중에 삭제할 때 사용하려고)
    const span = document.createElement("span");
    span.innerText = newTodo2.text; // 오브젝트에서 텍스트를 추출하여 span 영역에 작성
    li.appendChild(span); // 스판을 li의 영역에 '추가'
    const button = document.createElement("button");
    button.innerText = "❎";
    button.addEventListener("click", deletTodo); // 생성된 버튼이 클릭하는것을 기다리도록 설정(클리되면 deletTodo 실행)
    li.appendChild(button); // 새로 만든 버튼을 새로 추가된 span옆에 붙혀둠
    toDoList.appendChild(li); // todo-list라는 ul 공간에 새로 생긴 li를 추가

}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObject = {
        id: Date.now(),
        text: newTodo,
    } // 새로운 오브젝트를 생성
    toDos.push(newTodoObject);//어레이에 아이디와 텍스트가 포함된 오브젝트 넣는것
    paintToDo(newTodoObject);// 해당 오브젝트를 화면에 표시하는것
    saveToDos();
}

toDoForm.addEventListener("submit", handleTodoSubmit);

if (savedTodos) {
    const parsedTodos = JSON.parse(savedTodos);
    toDos = parsedTodos;
    parsedTodos.forEach(paintToDo);
}

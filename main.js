
//Model
let todoLst;
const storedTodo = JSON.parse(localStorage.getItem('todoList'));

if(Array.isArray(storedTodo)) {
    todoLst = storedTodo;
    todoLst.forEach(task => {addElement(task)});
}
else{
    todoLst = [];
}

function saveTodo() {
    localStorage.setItem('todoList', JSON.stringify(todoLst));
}

function deleteLstElement(element) {
    todoLst = todoLst.filter(todo => {
        if(todo === element)
            return false;
        else
            return true;
    });
    saveTodo();
}

//View 
function addElement(todo) {
    //div element
    const element = document.createElement('div');
    element.setAttribute('class', 'tasks');
    element.setAttribute('id', todo);
    //text inside div element
    const text = document.createElement('span');
    text.innerText = todo;
    text.setAttribute('class', 'task-item');
    element.appendChild(text);
    //delete button
    const deleteImg = document.createElement('img'); 
    deleteImg.setAttribute('id', 'delete-icon');
    deleteImg.setAttribute('onclick', 'delete-icon');
    deleteImg.setAttribute('src', 'images/delete.png');
    deleteImg.onclick = removeTodo;
    element.appendChild(deleteImg);
    //add div element to todo-list html element
    const todoList = document.getElementById('todo-list');
    todoList.appendChild(element);
}

function deleteElement(target){ //parent of deleteImg -> div : gets deleted
    const todoList = document.getElementById("todo-list");
    todoList.removeChild(target.parentNode);
}

//Controller
function addTodo() { //handles the button press to add todo
    const txt = document.getElementById("textbox");
    const todo = txt.value; 
    if(todo.length === 0)
        return;
    txt.value = "";
    addElement(todo);
    todoLst.push(todo);
    saveTodo();
}

function removeTodo(event) { //delete the div element 
    deleteLstElement(event.target.parentNode.id);
    deleteElement(event.target);
}


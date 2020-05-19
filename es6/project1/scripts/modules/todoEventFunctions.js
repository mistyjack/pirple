import manipulate from "./manipulateElems.js";
import insertHTML from "./insertHtml.js";
import mainEvent from "./mainEventFunctions.js";
import mTodo from "./todo.js";

const todoEventFunctions = {};
const wrapperDiv = document.getElementById("wrapper");

const appendToList = (e) => {
    e.preventDefault();
    let list = []
    let tempValue = document.getElementById("todo-item").value;
    let tempData = mainEvent.currentUser[0].email;
    let tempMain = mainEvent.allUsers[tempData];
    list.push(tempValue);
    tempMain.todolists.push();
    console.log(tempMain.todolists);
    manipulate.rmvChild(wrapperDiv, document.getElementById("add-todo"));
    let todo = mTodo.makeTodo(tempMain);
    wrapperDiv.append(todo);
    manipulate.addEvent("todo-items", "click", todoEventFunctions.editList);
    manipulate.addEvent("create-list", "click", todoEventFunctions.createList);
};

const appendToItem = (e) => {
    let tempValue = document.getElementById("todo-item").value;
    let tempData = mainEvent.currentUser[0].email;
    let tempMain = mainEvent.allUsers[tempData];
    tempMain.todolists.list.push(tempValue);
};

todoEventFunctions.createList = (e) => {
    e.stopPropagation();
    manipulate.rmvChild(wrapperDiv, document.getElementById("todo-div"));
    insertHTML.insertTodoView(wrapperDiv);
    manipulate.addEvent("add-todo", "submit", appendToList);
}

todoEventFunctions.editList = (e) => {
    e.stopPropagation();
    console.log(e);
    manipulate.rmvChild(wrapperDiv, document.getElementById("todo-div"));
    insertHTML.insertTodoHead(wrapperDiv, e.target.innerText);
    insertHTML.insertTodoView(wrapperDiv);
    manipulate.addEvent("append-item", "click", appendToItem);  // appendToItem appends a new item to a todo list
}

export default todoEventFunctions;
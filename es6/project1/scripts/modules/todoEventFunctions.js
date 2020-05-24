import manipulate from "./manipulateElems.js";
import insertHTML from "./insertHtml.js";
import mainEvent from "./mainEventFunctions.js";
import mTodo from "./todo.js";

const todoEventFunctions = {};
const wrapperDiv = document.getElementById("wrapper");

const checkTodo = (e) => {
    let tempData = mainEvent.currentUser[0].email;
    let tempMain = mainEvent.allUsers[tempData];
    let head = document.getElementById("list-head").innerText;
    if(e.target.checked) {
        e.target.parentElement.classList.add("completed");
        tempMain.todolists[head][parseInt(e.target.id)].completed = true;
    } else {
        e.target.parentElement.classList.remove("completed");
        tempMain.todolists[head][parseInt(e.target.id)].completed = false;
    }
};


const appendToList = (e) => {
    e.preventDefault();

    let tempValue = document.getElementById("todo-item").value;
    let tempData = mainEvent.currentUser[0].email;
    let tempMain = mainEvent.allUsers[tempData];

    tempMain.todolists[tempValue] = [];
    //console.log(tempMain.todolists);
    manipulate.rmvChild(wrapperDiv, document.getElementById("add-todo"));
    let todo = mTodo.makeTodo(tempMain);
    wrapperDiv.append(todo);
    manipulate.addEvent("todo-items", "click", todoEventFunctions.editList);
    manipulate.addEvent("create-list", "click", todoEventFunctions.createList);
};

const appendToItem = (e) => {
    e.preventDefault();

    //document.getElementById("check") ? manipulate.addEvent("todo-items", "click", checkTodo) : false;

    let tempValue = document.getElementById("todo-item").value;
    let tempData = mainEvent.currentUser[0].email;
    let tempMain = mainEvent.allUsers[tempData];
    let item = {value: tempValue, completed: false};

    let listHead = document.getElementById("list-head").innerText;
    tempValue !== "" ? tempMain.todolists[listHead].push(item) : false;
    let todo = mTodo.makeList(tempMain.todolists[listHead]);
    document.getElementById("lists-div") ? manipulate.rmvChild(wrapperDiv, document.getElementById("lists-div")) : true;
    wrapperDiv.append(todo);
    for(const item of document.getElementsByClassName("check")) {
        item.addEventListener("click", checkTodo);
    }
};

const backToLists = (e) => {
    e.preventDefault();

    let tempData = mainEvent.currentUser[0].email;
    let tempMain = mainEvent.allUsers[tempData];

    document.getElementById("lists-div") ? manipulate.rmvChild(wrapperDiv, document.getElementById("lists-div")) : false;
    manipulate.rmvChild(wrapperDiv, document.getElementById("list-head"));
    manipulate.rmvChild(wrapperDiv, document.getElementById("add-todo"));
    let todo = mTodo.makeTodo(tempMain);
    wrapperDiv.append(todo);

    manipulate.addEvent("todo-items", "click", todoEventFunctions.editList);
    manipulate.addEvent("create-list", "click", todoEventFunctions.createList);
};

todoEventFunctions.createList = (e) => {
    e.stopPropagation();
    manipulate.rmvChild(wrapperDiv, document.getElementById("todo-div"));
    insertHTML.insertTodoView(wrapperDiv);
    manipulate.addEvent("add-todo", "submit", appendToList);
}

todoEventFunctions.editList = (e) => {
    let tempData = mainEvent.currentUser[0].email;
    let tempMain = mainEvent.allUsers[tempData];

    e.stopPropagation();
    //console.log(e);
    manipulate.rmvChild(wrapperDiv, document.getElementById("todo-div"));
    insertHTML.insertTodoHead(wrapperDiv, e.target.innerText);
    insertHTML.insertTodoView(wrapperDiv);
    manipulate.addEvent("append-item", "click", appendToItem);  // appendToItem appends a new item to a todo list
    manipulate.addEvent("back-btn", "click", backToLists);
    //document.getElementById("check") ? manipulate.addEvent("todo-items", "click", checkTodo) : false;
    let listHead = document.getElementById("list-head").innerText;
    let todo = mTodo.makeList(tempMain.todolists[listHead]);
    wrapperDiv.append(todo);
    for(const item of document.getElementsByClassName("check")) {
        item.addEventListener("click", checkTodo);
    }
}

export default todoEventFunctions;
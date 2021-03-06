const mainEvent = require("./mainEventFunctions.js");
const manipulate = require("./manipulateElems.js");
const insertHTML = require("./insertHtml.js");
const mTodo = require("./todo.js");


const todoEventFunctions = {};
const wrapperDiv = document.getElementById("wrapper");


const checkTodo = (e) => {
    let head = document.getElementById("list-head").innerText;
    let currentUserEmail = JSON.parse(localStorage.getItem("currentUser"))[0].email;
    let tempMain = JSON.parse(localStorage.getItem(currentUserEmail));
    if(e.target.checked) {
        e.target.parentElement.classList.add("completed");
        tempMain.todolists[head][parseInt(e.target.id)].completed = true;
        localStorage.setItem(currentUserEmail, JSON.stringify(tempMain));
    } else {
        e.target.parentElement.classList.remove("completed");
        tempMain.todolists[head][parseInt(e.target.id)].completed = false;
        localStorage.setItem(currentUserEmail, JSON.stringify(tempMain));
    }
};

const saveName = (e) => {
    e.preventDefault();
    let newHead = document.getElementById("new-name").value;
    let formerHead = document.getElementById("list-head").innerText;
    let currentUserEmail = JSON.parse(localStorage.getItem("currentUser"))[0].email;
    let tempMain = JSON.parse(localStorage.getItem(currentUserEmail));

    if(newHead !== "" && !(newHead in tempMain.todolists)) {
        tempMain.todolists[newHead] = tempMain.todolists[formerHead];
        tempMain.todolists[formerHead] = null;
        document.getElementById("list-head").innerText = newHead;
        manipulate.rmvChild(document.getElementById("head-div"), document.getElementById("rename-list"));
        manipulate.unhideElem("list-head");
        manipulate.unhideElem("rename");
        localStorage.setItem(currentUserEmail, JSON.stringify(tempMain));
    } else {
        alert("Unacceptable Input! Try again");
    }
};

const renameList = (e) => {
    e.preventDefault();
    manipulate.hideElem("list-head");
    manipulate.hideElem("rename");
    insertHTML.insertRenameView(document.getElementById("head-div"));
    manipulate.addEvent("rename-list", "submit", saveName);
};

const appendToList = (e) => {
    e.preventDefault();
    let tempValue = document.getElementById("todo-item").value;
    let currentUserEmail = JSON.parse(localStorage.getItem("currentUser"))[0].email;
    let tempMain = JSON.parse(localStorage.getItem(currentUserEmail));

    if(tempValue !== "" && !(tempValue in tempMain.todolists)) {
        tempMain.todolists[tempValue] = [];
        //console.log(tempMain.todolists);
        manipulate.rmvChild(wrapperDiv, document.getElementById("add-todo"));
        let todo = mTodo.makeTodo(tempMain);
        wrapperDiv.append(todo);
        manipulate.addEvent("todo-items", "click", todoEventFunctions.editList);
        manipulate.addEvent("create-list", "click", todoEventFunctions.createList);
        localStorage.setItem(currentUserEmail, JSON.stringify(tempMain));
    } else {
        alert("Unacceptable Input! Try again");
    }

};

const appendToItem = (e) => {
    e.preventDefault();

    let tempValue = document.getElementById("todo-item").value;
    let currentUserEmail = JSON.parse(localStorage.getItem("currentUser"))[0].email;
    let tempMain = JSON.parse(localStorage.getItem(currentUserEmail));
    let item = {value: tempValue, completed: false};

    let listHead = document.getElementById("list-head").innerText;
    tempValue !== "" ? tempMain.todolists[listHead].push(item) : alert("Unacceptable Input! Try again");
    document.getElementById("todo-item").value = "";
    let todo = mTodo.makeList(tempMain.todolists[listHead]);
    document.getElementById("lists-div") ? manipulate.rmvChild(wrapperDiv, document.getElementById("lists-div")) : false;
    wrapperDiv.append(todo);
    for(const item of document.getElementsByClassName("check")) {
        item.addEventListener("click", checkTodo);
    }
    localStorage.setItem(currentUserEmail, JSON.stringify(tempMain));
};

const backToLists = (e) => {
    e.preventDefault();

    let currentUserEmail = JSON.parse(localStorage.getItem("currentUser"))[0].email;
    let tempMain = JSON.parse(localStorage.getItem(currentUserEmail));

    document.getElementById("lists-div") ? manipulate.rmvChild(wrapperDiv, document.getElementById("lists-div")) : false;
    manipulate.rmvChild(wrapperDiv, document.getElementById("head-div"));
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
    let currentUserEmail = JSON.parse(localStorage.getItem("currentUser"))[0].email;
    let tempMain = JSON.parse(localStorage.getItem(currentUserEmail));

    e.stopPropagation();
    //console.log(e);
    manipulate.rmvChild(wrapperDiv, document.getElementById("todo-div"));
    insertHTML.insertTodoHead(wrapperDiv, e.target.innerText);
    insertHTML.insertTodoView(wrapperDiv);
    manipulate.addEvent("append-item", "click", appendToItem);  // appendToItem appends a new item to a todo list
    manipulate.addEvent("back-btn", "click", backToLists);
    manipulate.addEvent("rename", "click", renameList);
    let listHead = document.getElementById("list-head").innerText;
    let todo = mTodo.makeList(tempMain.todolists[listHead]);
    wrapperDiv.append(todo);
    for(const item of document.getElementsByClassName("check")) {
        item.addEventListener("click", checkTodo);
    }
}

module.exports = todoEventFunctions;
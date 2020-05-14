import manipulate from "./manipulateElems.js";
import insertHTML from "./insertHtml.js";
import mainEvent from "./mainEventFunctions.js";
import mTodo from "./todo.js";
import eFunc from "./todoEventFunctions.js";

const todoEventFunctions = {};
const wrapperDiv = document.getElementById("wrapper");

const appendToList = (e) => {
    e.preventDefault();
    let tempValue = document.getElementById("todo-item").value;
    let tempData = mainEvent.currentUser[0].email;
    let tempMain = mainEvent.allUsers[tempData];
    tempMain.todolists.push(tempValue);
    console.log(tempMain.todolists);
    manipulate.rmvChild(wrapperDiv, document.getElementById("add-todo"));
    let todo = mTodo.makeTodo(tempMain);
    wrapperDiv.append(todo)
    manipulate.addEvent("todo-div", "click", eFunc.editList);
    manipulate.addEvent("create-list", "click", eFunc.createList);
}

todoEventFunctions.createList = (e) => {
    manipulate.rmvChild(wrapperDiv, document.getElementById("todo-div"));
    insertHTML.insertTodoView(wrapperDiv);
    manipulate.addEvent("add-todo", "submit", appendToList);
}

todoEventFunctions.editList = (e) => {
    e.stopPropagation();
    console.log(e);
}

export default todoEventFunctions;
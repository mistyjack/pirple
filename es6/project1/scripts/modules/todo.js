import {createElem} from "./form.js";

const todo = {};

const addClassesToElem = (elem, ...classes) => {
    for(const currentClass of classes) {
        elem.classList.add(currentClass);
    }
}

todo.makeTodo = (data) => {
    let todoDiv = createElem("DIV");
    todoDiv.id = "todo-div";
    let createListBtn = createElem("BUTTON");
    createListBtn.id = "create-list";
    createListBtn.innerText = "Create new list";
    createListBtn.classList.add("btn--t-margin");

    for(const todoList of data.todolists) {
        let tempItem = document.createElement("span");
        tempItem.innerText = todoList;
        tempItem.classList.add("main-body__todo-list");
        todoDiv.append(tempItem);
    }
    addClassesToElem(todoDiv, "todo", "main-body", "main-body-wide");
    todoDiv.append(createListBtn);
    // todoDiv.classList.add("main-body--white-bg");
    return todoDiv;
}

export default todo;
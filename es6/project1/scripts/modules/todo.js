import {createElem} from "./form.js";

const todo = {};

const addClassesToElem = (elem, ...classes) => {
    for(const currentClass of classes) {
        elem.classList.add(currentClass);
    }
}

todo.makeTodo = (data) => {
    let todoDiv = createElem("DIV");
    let listItems = createElem("DIV");
    listItems.id = "todo-items";
    todoDiv.id = "todo-div";
    let createListBtn = createElem("BUTTON");
    createListBtn.id = "create-list";
    createListBtn.innerText = "Create new list";
    createListBtn.classList.add("btn--t-margin");

    for(const todoList in data.todolists) {
        let tempItem = document.createElement("span");
        tempItem.innerText = todoList;
        tempItem.classList.add("main-body__todo-list");
        listItems.append(tempItem);
    }
    addClassesToElem(todoDiv, "todo", "main-body", "main-body-wide");
    todoDiv.append(listItems);
    todoDiv.append(createListBtn);
    // todoDiv.classList.add("main-body--white-bg");
    return todoDiv;
}

todo.makeList = (data) => {
    let todoDiv = createElem("DIV");
    let listItems = createElem("DIV");
    
    listItems.id = "todo-items";
    todoDiv.id = "lists-div";

    for(const todoList of data) {
        let tempItem = document.createElement("span");
        tempItem.innerHTML = `<input type="checkbox" class="check"> ${todoList.value}`;
        tempItem.firstChild.id = data.indexOf(todoList);
        if(todoList.completed) {
            tempItem.classList.add("completed");
            tempItem.firstChild.checked = true;
        }
        tempItem.classList.add("main-body__todo-list");
        listItems.append(tempItem);
    }
    addClassesToElem(todoDiv, "todo", "main-body", "main-body--no-top-margin", "main-body--no-t-padding", "main-body-wide");
    todoDiv.append(listItems);
    // todoDiv.classList.add("main-body--white-bg");
    return todoDiv;
}

export default todo;
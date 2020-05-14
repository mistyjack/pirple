import {createSignUpForm, createLogInForm} from "./form.js";
import {obtainSignUpData, obtainChangesData, obtainLogInData} from "./UserData.js";
import insertHTML from "./insertHtml.js";
import manipulate from "./manipulateElems.js";
import mTodo from "./todo.js";
import eFunc from "./todoEventFunctions.js";

const mainEvent = {};
const wrapperDiv = document.getElementById("wrapper");
const navLinks = document.getElementById("links");
const users = {};
const signUpBtn = document.getElementById("signup");
const logInBtn = document.getElementById("login");

let currentUser = [];

const saveChanges = (e) => {
    e.preventDefault();
    let tempVar = currentUser[0].email;
    let tempVar1 = obtainChangesData();
    tempVar1.todolists = users[tempVar].todolists;
    users[tempVar1.email] = tempVar1;
    tempVar1.email !== tempVar ? users[tempVar] = null : true;
    currentUser[0] = users[tempVar1.email];
    console.log(users[tempVar1.email]);
    manipulate.rmvChild(wrapperDiv, document.getElementById("account-settings"));
    insertHTML.insertWelcomeMsg(wrapperDiv, users[tempVar1.email]);
    let todo = mTodo.makeTodo(users[tempVar1.email]);
    wrapperDiv.append(todo)
    manipulate.addEvent("settings", "click", accountSettings);
    manipulate.addEvent("logout", "click", logOut);
};

const logOut = () => {
    if(document.getElementById("app-title--inserted")) {
        manipulate.rmvChild(wrapperDiv, document.getElementById("app-title--inserted"));
        manipulate.rmvChild(wrapperDiv, document.getElementById("todo-div"));
        manipulate.hideElem("ul-exit-links");
        manipulate.unhideElem("ul-enter-links");
        manipulate.unhideElem("app-title");
        currentUser = [];
        logInBtn.addEventListener("click", mainEvent.logIn);
        signUpBtn.addEventListener("click", mainEvent.signUp);
    } else {
        manipulate.rmvChild(wrapperDiv, document.getElementById("account-settings"));
        manipulate.hideElem("ul-exit-links");
        manipulate.unhideElem("app-title");
        manipulate.unhideElem("ul-enter-links");
        currentUser = [];
        logInBtn.addEventListener("click", mainEvent.logIn);
        signUpBtn.addEventListener("click", mainEvent.signUp);
    }
};

const accountSettings = () => {
    manipulate.rmvChild(wrapperDiv, document.getElementById("app-title--inserted"));
    manipulate.rmvChild(wrapperDiv, document.getElementById("todo-div"));
    insertHTML.insertSettings(wrapperDiv, currentUser[0]);
    manipulate.rmvEvent("settings", "click", accountSettings);
    manipulate.addEvent("account-settings", "submit", saveChanges);
};

const processUser = (e) => {
    e.preventDefault();
    let data = obtainSignUpData();
    data.todolists = [];
    users[data.email] = data;
    currentUser.push(data);
    manipulate.hideElem("app-title");
    manipulate.rmvChild(wrapperDiv, document.getElementById("sign-up-form"));
    insertHTML.insertWelcomeMsg(wrapperDiv, data);
    let todo = mTodo.makeTodo(data);
    wrapperDiv.append(todo)
    manipulate.addEvent("todo-div", "click", eFunc.editList);
    manipulate.addEvent("create-list", "click", eFunc.createList);
    manipulate.hideElem("ul-enter-links");
    insertHTML.insertExitLinks(navLinks);
    manipulate.addEvent("logout", "click", logOut);
    manipulate.addEvent("settings", "click", accountSettings);
};

const checkLogin = (e) => {
    e.preventDefault();
    let data = obtainLogInData();
    currentUser.push(users[data.email]);
    if(data.email in users && data.password === users[data.email].password) {
        document.getElementById("log-in-password").setCustomValidity("");
        manipulate.hideElem("app-title");
        manipulate.rmvChild(wrapperDiv, document.getElementById("log-in-form"));
        insertHTML.insertWelcomeMsg(wrapperDiv, users[data.email]);
        let todo = mTodo.makeTodo(users[data.email]);
        wrapperDiv.append(todo)
        manipulate.addEvent("create-list", "click", updateList);
        manipulate.hideElem("ul-enter-links");
        insertHTML.insertExitLinks(navLinks);
        manipulate.addEvent("logout", "click", logOut);
        manipulate.addEvent("settings", "click", accountSettings);    
    } else {
        manipulate.unhideElem("error-msg");
        document.getElementById("log-in-password").valid = false;
    }
};


mainEvent.signUp = () => {
    if(document.getElementById("log-in-form") == null) {
        wrapperDiv.append(createSignUpForm());
        signUpBtn.removeEventListener("click", mainEvent.signUp);
        const form = document.getElementById("sign-up-form");
        form.addEventListener("submit", processUser);
    } else if(document.getElementById("log-in-form") && document.getElementById("sign-up-form") == null) {
        manipulate.hideElem("log-in-form");
        wrapperDiv.append(createSignUpForm());
        logInBtn.addEventListener("click", mainEvent.logIn);
        signUpBtn.removeEventListener("click", mainEvent.signUp);
        manipulate.addEvent("sign-up-form", "submit", processUser);
    }
    else {
        manipulate.hideElem("log-in-form");
        manipulate.unhideElem("sign-up-form");
        logInBtn.addEventListener("click", mainEvent.logIn);
        signUpBtn.removeEventListener("click", mainEvent.signUp);
        manipulate.addEvent("sign-up-form", "submit", processUser);
    }
}


mainEvent.logIn = () => {
    if(document.getElementById("sign-up-form") == null) {
        wrapperDiv.append(createLogInForm());
        logInBtn.removeEventListener("click", mainEvent.logIn);
        const form = document.getElementById("log-in-form");
        form.addEventListener("submit", checkLogin);
    } else if(document.getElementById("sign-up-form") && document.getElementById("log-in-form") == null) {
        manipulate.hideElem("sign-up-form");
        wrapperDiv.append(createLogInForm());
        signUpBtn.addEventListener("click", mainEvent.signUp);
        logInBtn.removeEventListener("click", mainEvent.logIn);
        const form = document.getElementById("log-in-form");
        form.addEventListener("submit", checkLogin);
    } else {
        manipulate.hideElem("sign-up-form");
        manipulate.unhideElem("log-in-form");
        signUpBtn.addEventListener("click", mainEvent.signUp);
        logInBtn.removeEventListener("click", mainEvent.logIn);
        const form = document.getElementById("log-in-form");
        form.addEventListener("submit", checkLogin);
    } 
}

mainEvent.returnUsers = () => {
    return users;
}

mainEvent.allUsers = users;
mainEvent.currentUser = currentUser;

export default mainEvent;
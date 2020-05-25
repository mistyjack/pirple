import {createSignUpForm, createLogInForm} from "./form.js";
import {obtainSignUpData, obtainChangesData, obtainLogInData} from "./UserData.js";
import insertHTML from "./insertHtml.js";
import manipulate from "./manipulateElems.js";
import mTodo from "./todo.js";
import eFunc from "./todoEventFunctions.js";

const mainEvent = {};
const wrapperDiv = document.getElementById("wrapper");
const navLinks = document.getElementById("links");
const signUpBtn = document.getElementById("signup");
const logInBtn = document.getElementById("login");

let currentUser = [];

const saveChanges = (e) => {
    e.preventDefault();
    let tempVar = currentUser[0].email;
    let tempVar1 = obtainChangesData();
    tempVar1.todolists = JSON.parse(localStorage.getItem(tempVar)).todolists;
    localStorage.setItem(tempVar1.email, JSON.stringify(tempVar1));
    tempVar1.email !== tempVar ? localStorage.setItem(tempVar, "") : true;
    currentUser[0] = JSON.parse(localStorage.getItem(tempVar1.email));
    //console.log(users[tempVar1.email]);
    manipulate.rmvChild(wrapperDiv, document.getElementById("account-settings"));
    insertHTML.insertWelcomeMsg(wrapperDiv, JSON.parse(localStorage.getItem(tempVar1.email)));
    let todo = mTodo.makeTodo(JSON.parse(localStorage.getItem(tempVar1.email)));
    wrapperDiv.append(todo);
    manipulate.addEvent("todo-items", "click", eFunc.editList);
    manipulate.addEvent("create-list", "click", eFunc.createList);
    manipulate.addEvent("settings", "click", accountSettings);
    manipulate.addEvent("logout", "click", logOut);
};

const logOut = () => {
    if(document.getElementById("app-title--inserted")) {
        document.getElementById("app-title--inserted") ? manipulate.rmvChild(wrapperDiv, document.getElementById("app-title--inserted")) : false;
        document.getElementById("todo-div") ? manipulate.rmvChild(wrapperDiv, document.getElementById("todo-div")) : false;
        document.getElementById("add-todo") ? manipulate.rmvChild(wrapperDiv, document.getElementById("add-todo")) : false;
        document.getElementById("list-head") ? manipulate.rmvChild(wrapperDiv, document.getElementById("list-head")) : false;
        document.getElementById("lists-div") ? manipulate.rmvChild(wrapperDiv, document.getElementById("lists-div")) : false;
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
    data.todolists = {};
    if(!(data.email in localStorage)) {
        localStorage.setItem(data.email, JSON.stringify(data));
        currentUser.push(data);
        manipulate.hideElem("app-title");
        manipulate.rmvChild(wrapperDiv, document.getElementById("sign-up-form"));
        insertHTML.insertWelcomeMsg(wrapperDiv, data);
        let todo = mTodo.makeTodo(data);
        wrapperDiv.append(todo)
        manipulate.addEvent("todo-items", "click", eFunc.editList);
        manipulate.addEvent("create-list", "click", eFunc.createList);
        manipulate.hideElem("ul-enter-links");
        insertHTML.insertExitLinks(navLinks);
        manipulate.addEvent("logout", "click", logOut);
        manipulate.addEvent("settings", "click", accountSettings);
        localStorage.setItem(data.email, JSON.stringify(data));
     } else {
         alert("Email is taken");
     }
};

const checkLogin = (e) => {
    e.preventDefault();
    let data = obtainLogInData();
    currentUser.push(JSON.parse(localStorage.getItem(data.email)));
    if(data.email in localStorage && data.password === JSON.parse(localStorage.getItem(data.email)).password) {
        document.getElementById("log-in-password").setCustomValidity("");
        manipulate.hideElem("app-title");
        manipulate.rmvChild(wrapperDiv, document.getElementById("log-in-form"));
        insertHTML.insertWelcomeMsg(wrapperDiv, JSON.parse(localStorage.getItem(data.email)));
        let todo = mTodo.makeTodo(JSON.parse(localStorage.getItem(data.email)));
        wrapperDiv.append(todo);
        manipulate.addEvent("todo-items", "click", eFunc.editList);
        manipulate.addEvent("create-list", "click", eFunc.createList);
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

mainEvent.currentUser = currentUser;

export default mainEvent;
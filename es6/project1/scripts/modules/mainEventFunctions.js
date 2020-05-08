import {createSignUpForm, createLogInForm} from "./form.js";
import {obtainSignUpData, obtainChangesData, obtainLogInData} from "./UserData.js";
import {insertWelcomeMsg, insertExitLinks, insertSettings} from "./insertHtml.js";
import {hideElem, unhideElem, rmvChild, addEvent, rmvEvent} from "./manipulateElems.js";
import {makeTodo} from "./todo.js";
import {updateList} from "./todoEventFunctions.js";

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
    users[tempVar] = null;
    users[tempVar1.email] = tempVar1
    currentUser[0] = users[tempVar1.email];
    console.log(users[tempVar1.email]);
    rmvChild(wrapperDiv, document.getElementById("account-settings"));
    insertWelcomeMsg(wrapperDiv, users[tempVar1.email]);
    addEvent("settings", "click", accountSettings);
    addEvent("logout", "click", logOut);
};

const logOut = () => {
    if(document.getElementById("app-title--inserted")) {
        rmvChild(wrapperDiv, document.getElementById("app-title--inserted"));
        hideElem("ul-exit-links");
        unhideElem("ul-enter-links");
        unhideElem("app-title");
        currentUser = [];
        logInBtn.addEventListener("click", logIn);
        signUpBtn.addEventListener("click", signUp);
    } else {
        rmvChild(wrapperDiv, document.getElementById("account-settings"));
        hideElem("ul-exit-links");
        unhideElem("app-title");
        unhideElem("ul-enter-links");
        currentUser = [];
        logInBtn.addEventListener("click", logIn);
        signUpBtn.addEventListener("click", signUp);
    }
};

const accountSettings = () => {
    rmvChild(wrapperDiv, document.getElementById("app-title--inserted"));
    insertSettings(wrapperDiv, currentUser[0]);
    rmvEvent("settings", "click", accountSettings);
    addEvent("account-settings", "submit", saveChanges);
};

const processUser = (e) => {
    e.preventDefault();
    let data = obtainSignUpData();
    data.todolists = [];
    users[data.email] = data;
    currentUser.push(data);
    hideElem("app-title");
    rmvChild(wrapperDiv, document.getElementById("sign-up-form"));
    insertWelcomeMsg(wrapperDiv, data);
    let todo = makeTodo(data);
    wrapperDiv.append(todo)
    addEvent("create-list", "click", updateList);
    hideElem("ul-enter-links");
    insertExitLinks(navLinks);
    addEvent("logout", "click", logOut);
    addEvent("settings", "click", accountSettings);
};

const checkLogin = (e) => {
    e.preventDefault();
    let data = obtainLogInData();
    currentUser.push(users[data.email]);
    if(data.email in users && data.password === users[data.email].password) {
        document.getElementById("log-in-password").setCustomValidity("");
        hideElem("app-title");
        rmvChild(wrapperDiv, document.getElementById("log-in-form"));
        insertWelcomeMsg(wrapperDiv, users[data.email]);
        let todo = makeTodo(data);
        wrapperDiv.append(todo)
        addEvent("create-list", "click", updateList);
        hideElem("ul-enter-links");
        insertExitLinks(navLinks);
        addEvent("logout", "click", logOut);
        addEvent("settings", "click", accountSettings);    
    } else {
        unhideElem("error-msg");
        document.getElementById("log-in-password").valid = false;
    }
};


export function signUp() {
    if(document.getElementById("log-in-form") == null) {
        wrapperDiv.append(createSignUpForm());
        signUpBtn.removeEventListener("click", signUp);
        const form = document.getElementById("sign-up-form");
        form.addEventListener("submit", processUser);
    } else if(document.getElementById("log-in-form") && document.getElementById("sign-up-form") == null) {
        hideElem("log-in-form");
        wrapperDiv.append(createSignUpForm());
        logInBtn.addEventListener("click", logIn);
        signUpBtn.removeEventListener("click", signUp);
        addEvent("sign-up-form", "submit", processUser);
    }
    else {
        hideElem("log-in-form");
        unhideElem("sign-up-form");
        logInBtn.addEventListener("click", logIn);
        signUpBtn.removeEventListener("click", signUp);
        addEvent("sign-up-form", "submit", processUser);
    }
}


export function logIn() {
    if(document.getElementById("sign-up-form") == null) {
        wrapperDiv.append(createLogInForm());
        logInBtn.removeEventListener("click", logIn);
        const form = document.getElementById("log-in-form");
        form.addEventListener("submit", checkLogin);
    } else if(document.getElementById("sign-up-form") && document.getElementById("log-in-form") == null) {
        hideElem("sign-up-form");
        wrapperDiv.append(createLogInForm());
        signUpBtn.addEventListener("click", signUp);
        logInBtn.removeEventListener("click", logIn);
        const form = document.getElementById("log-in-form");
        form.addEventListener("submit", checkLogin);
    } else {
        hideElem("sign-up-form");
        unhideElem("log-in-form");
        signUpBtn.addEventListener("click", signUp);
        logInBtn.removeEventListener("click", logIn);
        const form = document.getElementById("log-in-form");
        form.addEventListener("submit", checkLogin);
    } 
}

export function returnUsers() {
    return users;
}
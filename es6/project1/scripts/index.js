import mainEvent from "./modules/mainEventFunctions.js";

const signUpBtn = document.getElementById("signup");
const logInBtn = document.getElementById("login");

signUpBtn.addEventListener("click", mainEvent.signUp);
logInBtn.addEventListener("click", mainEvent.logIn);

setTimeout(function() {
    console.log(mainEvent.returnUsers());
}, 20000);
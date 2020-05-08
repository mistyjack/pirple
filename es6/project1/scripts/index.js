import {signUp, returnUsers, logIn} from "./modules/mainEventFunctions.js";

const signUpBtn = document.getElementById("signup");
const logInBtn = document.getElementById("login");

signUpBtn.addEventListener("click", signUp);
logInBtn.addEventListener("click", logIn);


setTimeout(function() {
    console.log(returnUsers());
}, 20000);
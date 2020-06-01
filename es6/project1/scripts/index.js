const mainEvent = require("./modules/mainEventFunctions.js");

const appTitle = document.getElementById("app-title");
const navBar = document.getElementById("nav-bar");

appTitle.innerHTML = (`
    <h1 class="main-body__title">TODO-LIST Application</h1>
    <h2 class="main-body__subtitle">Plan your day for optimum productivity</h2>
`);

navBar.innerHTML = (`
    <svg class="navbar__logo" height="30" width="120">
    <text x="0" y="15">TODO-LIST</text>
    </svg>
    <div id="links" class="navbar__links">
    <ul id="ul-enter-links">
        <li><button id="signup">Sign Up</button></li>
        <li><button id="login">Log In</button></li>
    </ul>
    </div>
`);

const signUpBtn = document.getElementById("signup");
const logInBtn = document.getElementById("login");

signUpBtn.addEventListener("click", mainEvent.signUp);
logInBtn.addEventListener("click", mainEvent.logIn);
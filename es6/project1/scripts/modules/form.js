const form = {};

const appendElements = (mainElem, ...elems) => {
    for(const elem of elems) {
        mainElem.append(elem);
    }
};

function addToClassList(classToAdd, ...elems) {
    for(const elem of elems) {
        elem.classList.add(classToAdd);
    }
};

form.createElem = (elem) => {
    return document.createElement(elem);
};

const createLabel = (inputId, text="") => {
    let newLabel = form.createElem("LABEL");
    newLabel.innerText = text;
    newLabel.htmlFor = inputId;
    return newLabel;
};

const createInput = (id, placeholder, type="text", value="") => {
    let newInput = form.createElem("INPUT");
    newInput.id = id;
    newInput.required = true;
    newInput.placeholder = placeholder;
    newInput.value = value;
    newInput.type = type
    return newInput;
};

form.createSignUpForm = () => {
    const signUpForm = form.createElem("FORM");
    signUpForm.id = "sign-up-form";
    
    let firstNameLabel = createLabel("sign-up-first-name", "first name");
    let firstNameInput = createInput("sign-up-first-name", " first name")
    
    let lastNameLabel = createLabel("sign-up-last-name", "last name");
    let lastNameInput = createInput("sign-up-last-name", " last name");

    let emailLabel = createLabel("sign-up-email", "email");
    let emailInput = createInput("sign-up-email", " yourname@example.com", "email")
    
    let passwordLabel = createLabel("sign-up-password", "password");
    let passwordInput = createInput("sign-up-password", "  **********", "password");
    
    let checkBoxInput = createInput("sign-up-checkbox", "", "checkbox");
    let checkBoxLabel = createLabel("sign-up-checkbox", " I agree to the Terms of Use")
    
    let submitBtn = createInput("submit-sign-up-form", "", "submit", "Sign Up");
    
    appendElements(signUpForm, firstNameLabel, firstNameInput, 
        lastNameLabel, lastNameInput, emailLabel, emailInput,
        passwordLabel, passwordInput, checkBoxInput, checkBoxLabel);
    appendElements(signUpForm, submitBtn);
        
    addToClassList("main-body__input", firstNameInput,
        lastNameInput, emailInput, passwordInput, submitBtn);
    addToClassList("main-body__input--submit", submitBtn);
    addToClassList("main-body", signUpForm);
    return signUpForm;
};

form.createLogInForm = () => {
    const logInForm = form.createElem("FORM");
    logInForm.id = "log-in-form";

    let errorMsg = form.createElem("P");
    addToClassList("main-body__error-msg", errorMsg);
    errorMsg.innerText = "Wrong email or password! Try again";
    errorMsg.id = "error-msg";
    errorMsg.hidden = true;

    let emailLabel = createLabel("log-in-email", "email");
    let emailInput = createInput("log-in-email", " yourname@example.com", "email")
    
    let passwordLabel = createLabel("log-in-password", "password");
    let passwordInput = createInput("log-in-password", "  **********", "password");

    let submitBtn = createInput("submit-log-in-form", "", "submit", "Log In");

    appendElements(logInForm, errorMsg, emailLabel, emailInput, passwordLabel,
        passwordInput);
    appendElements(logInForm, submitBtn);

    addToClassList("main-body__input", emailInput, passwordInput, submitBtn);
    addToClassList("main-body__input--submit", submitBtn);
    addToClassList("main-body", logInForm);
    return logInForm;
}

module.exports = form;
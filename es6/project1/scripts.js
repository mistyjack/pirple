const wrapperDiv = document.getElementById("wrapper");
const signUpBtn = document.getElementById("signup");

const appendElements = (mainElem, ...elems) => {
    for(const elem of elems) {
        mainElem.append(elem);
    }
};

const addToClassList = (classToAdd, ...elems) => {
    for(const elem of elems) {
        elem.classList.add(classToAdd);
    }
};

const createElem = (elem) => {
    return document.createElement(elem);
};

const createSignUpForm = () => {
    const signUpForm = createElem("FORM");
    
    let firstNameLabel = createElem("LABEL");
    let firstNameInput = createElem("INPUT");
    firstNameLabel.innerText = "first name";
    firstNameInput.placeholder = "first name";
    firstNameInput.required = true;
    
    let lastNameLabel = createElem("LABEL");
    let lastNameInput = createElem("INPUT");
    lastNameLabel.innerText = "last name";
    lastNameInput.placeholder = "last name";
    lastNameInput.required = true;
    
    let passwordLabel = createElem("LABEL");
    let passwordInput = createElem("INPUT");
    passwordLabel.innerText = "password";
    passwordInput.type = "password";
    passwordInput.placeholder = "**********";
    passwordInput.required = true;
    
    let checkBoxInput = createElem("INPUT");
    let checkBoxLabel = createElem("LABEL");
    checkBoxLabel.innerText = " I agree to the Terms of Use";
    checkBoxInput.type = "checkbox";
    checkBoxInput.required = true;
    
    let submitBtn = createElem("BUTTON");
    submitBtn.innerText = "Sign Up";
    
    appendElements(signUpForm, firstNameLabel, firstNameInput, 
        lastNameLabel, lastNameInput, passwordLabel, passwordInput,
        checkBoxInput, checkBoxLabel);
    appendElements(signUpForm, submitBtn);
        
    addToClassList("sign-up-form__input", firstNameInput,
        lastNameInput, passwordInput);
    addToClassList("sign-up-form__submit", submitBtn);
    addToClassList("sign-up-form", signUpForm);
    return signUpForm;
};

const signUp = (e) => {
    wrapperDiv.append(createSignUpForm());
    signUpBtn.removeEventListener("click", signUp);
};

signUpBtn.addEventListener("click", signUp);


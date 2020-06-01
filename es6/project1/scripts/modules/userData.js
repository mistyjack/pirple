function User(firstName, lastName, email, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password
}

const passwordHash = require('password-hash');

const dataFuncs = {}

dataFuncs.obtainSignUpData = () => {
    const firstName = document.getElementById("sign-up-first-name").value;
    const lastName = document.getElementById("sign-up-last-name").value;
    const email = document.getElementById("sign-up-email").value;
    const password = document.getElementById("sign-up-password").value;
    const hashedPassword = passwordHash.generate(password);
    return new User(firstName, lastName, email, hashedPassword);
};

dataFuncs.obtainChangesData = () => {
    const firstName = document.getElementById("changes-firstname").value;
    const lastName = document.getElementById("changes-lastname").value;
    const email = document.getElementById("changes-email").value;
    if(document.getElementById("changes-password").value !== "" ) {
        const password = document.getElementById("changes-password").value;
        const hashedPassword = passwordHash.generate(password);
        return new User(firstName, lastName, email, hashedPassword);
    } else {
        console.log("No password change");
        return new User(firstName, lastName, email);
    }    
};

dataFuncs.obtainLogInData = () => {
    const email = document.getElementById("log-in-email").value;
    const password = document.getElementById("log-in-password").value;
    return {"email": email, "password": password};
}

module.exports = dataFuncs;
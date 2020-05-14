const insertHTML = {};

insertHTML.insertWelcomeMsg = (elem, data) => {
    elem.insertAdjacentHTML("afterbegin", `
        <div id="app-title--inserted" class="main-body main-body--white-bg main-body--wide main-body--centered">
            <h3 class="main-body__text-content">Welcome ${data.firstName}!</h3>
            <h3 class="main-body__text-content main-body__text-content--blue">Here are your todos</h3>
        </div>
    `);
};

insertHTML.insertExitLinks = (elem) => {
    elem.insertAdjacentHTML("afterbegin", `
        <ul id="ul-exit-links">
            <li><button id="logout">Logout</button></li>
            <li><button id="settings">Account Settings</button></li>
        </ul>
    `);
};

insertHTML.insertSettings = (elem, data) => {
    elem.insertAdjacentHTML("afterbegin", `
        <form id="account-settings" class="main-body main-body--wide main-body--white-bg">
            <h3 class="main-body__text-content main-body--centered">Account Settings</h3>
            <p class="account-settings">First name: <input id="changes-firstname" class="account-settings__data" value=${data.firstName} required></p>
            <p class="account-settings">Last name: <input id="changes-lastname" class="account-settings__data" value=${data.lastName} required></p>
            <p class="account-settings">Email: <input id="changes-email" class="account-settings__data" type="email" value=${data.email} required></p>
            <p class="account-settings">Password: <input id="changes-password" class="account-settings__data" type="password" value=${data.password} required></p>
            <input id="change-settings" type="submit" value="Save & Exit" required>
        </form>
    `);
};

insertHTML.insertTodoView = (elem) => {
    elem.insertAdjacentHTML("beforeend", `
        <form id="add-todo" class="main-body">
            <input id="todo-item" class="main-body__input" required>
            <input id="append-item" type="submit" value="Add">
        </form>
    `);
};

export default insertHTML
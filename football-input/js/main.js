let name = document.querySelector("#input-name");
let age = document.querySelector("#input-age");
let submit = document.querySelector("#submit-btn");

let users = {};

function User(name, age) {
    this.name = name;
    this.age = age;
}

function createId(users) {
    return Object.keys(users).length;
}

submit.addEventListener("click", () => {
        var nameUser = name.value;
        var ageUser = age.value;

        var user = new User(nameUser, ageUser);

        var userId = 'User' + createId(users);
        users[userId] = user;

        console.log(users);

        alert("Ma'lumotlar saqlandi!")
})
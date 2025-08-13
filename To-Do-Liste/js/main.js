//variables
let input = document.querySelector("#inputField");
let button = document.querySelector("#btn");
let list = document.querySelector("#list");

//Event

document.addEventListener("DOMContentLoaded", ()=> {
    button.addEventListener("click", function() {
        let newTask = document.createElement("li");
        newTask.textContent = input.value;
        list.appendChild(newTask);
        input.value = "";
    })
});


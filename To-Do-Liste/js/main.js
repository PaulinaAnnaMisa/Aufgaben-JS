//variables
let input = document.querySelector("#inputField");
let button = document.querySelector("#btn");
let list = document.querySelector("#list");

//Event


//Überprüfung fehlt wenn ich nichts eingebe -> er fügt was leeres ein
document.addEventListener("DOMContentLoaded", ()=> {
    button.addEventListener("click", function() {
        let newTask = document.createElement("li"); //ist korrekt so, würde hier aber innerhtml nutzen
        newTask.textContent = input.value;
        list.appendChild(newTask);
        input.value = "";
    })
});

//aber alles super!!



//viariables

let button = document.querySelector("#btn");
let result = document.querySelector("#result");

//function
function randomNumber () {
    return Math.floor(Math.random() * 100);
};

//generate

button.addEventListener("click", function() {
    result.innerHTML = `Deine Zahl: ${randomNumber(100)}`;
});
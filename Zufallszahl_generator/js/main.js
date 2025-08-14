
//viariables

let button = document.querySelector("#btn");
let result = document.querySelector("#result");

//function
function randomNumber () { //hier in der () klammer erwartest du kein Parameter
    return Math.floor(Math.random() * 100); //Hier setzt du die 100 als grenze - korrekt!
};

//generate

button.addEventListener("click", function() {
    result.innerHTML = `Deine Zahl: ${randomNumber(100)}`; //Hier in der klammer übergibst du ein parameter erwartest oben aber keinen, kannst du also weglassen einfach ${randomNumber()}
});
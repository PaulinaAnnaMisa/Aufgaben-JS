//Variable

let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
let button = document.querySelector("#btn");
let result = document.querySelector("#result");

function summe(a,b) {
    return a + b;
}

// calculate

button.addEventListener("click", function (){   

    let ergebnis = summe(Number(input1.value), Number(input2.value));

    result.innerHTML = `Ergebnis: ${ergebnis}`;

    console.log(ergebnis);
});
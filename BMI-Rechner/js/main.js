
//Variable
let weight = document.querySelector("#weight");
let height = document.querySelector("#height");
let button = document.querySelector("#btn");
let result = document.querySelector("#result");

function quotient (a,b) {
   return a/b;
};
   
// calculate

button.addEventListener("click", function (){    
    let ergebnis = quotient(weight.value, height.value * height.value * 0.0001)
    let ergebnisParse = Number(ergebnis.toFixed(2));

    result.innerHTML = `Dein BMI: ${ergebnisParse}`;

    console.log(ergebnis);
});
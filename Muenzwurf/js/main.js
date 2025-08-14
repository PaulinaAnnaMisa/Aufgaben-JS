let button = document.querySelector("#btn");
let result = document.querySelector("#result");

function coinFlip() {
  let randomNumber = Math.random();
  if (randomNumber < 0.5) {
    return "Kopf";
  } else {
    return "Zahl";
  }
}

document.addEventListener("DOMContentLoaded", () => { //brauchst du hier nicht
    
  button.addEventListener("click", function () {
    let ergebnis = coinFlip();

    result.textContent = ergebnis;
  });
});

//passt!

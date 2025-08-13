let button = document.querySelector("#btn");
let quote = document.querySelector("#result");

let arrQuote = [
  "„Jeder Tag ist ein neuer Anfang.“",
  "„Mut beginnt mit einem Schritt.“",
  "„Wähle Freude, immer und immer wieder.“",
  "„Kleine Schritte führen zu großen Zielen.“",
  "„Sei freundlich – es kostet nichts.“",
  "„Träume groß, starte klein.“",
  "„Heute ist die Chance, besser zu werden.“",
  "„Geduld ist der Schlüssel zum Erfolg.“",
  "„Lächle, es verändert alles.“",
  "„Veränderung beginnt bei dir.“",
  "„Wer aufgibt, sieht nie, was möglich ist.“",
  "„Mach das Beste aus jedem Moment.“",
  "„Dankbarkeit verwandelt Gedanken.“",
  "„Kreativität braucht Mut.“",
  "„Glaube an dich – weil ich es tue.“",
];

document.addEventListener("DOMContentLoaded", () => {
  button.addEventListener("click", function () {
    let randomQuote = Math.floor(Math.random() * arrQuote.length);
    quote.textContent = arrQuote[randomQuote];
  });
});

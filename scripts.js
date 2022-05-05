var cont = 0;
var text = String("enter your text here");
var textAr = text.split(" ");

document.querySelectorAll(".card__inner").forEach(card => {
  card.addEventListener("click", function () {
    card.classList.toggle('flip');
    displayText();
    cont++;
  });
});

function displayText() {
  if (cont % 2 != 0) {
    document.getElementById("text_front").innerHTML = textAr[cont];
  } else {
    document.getElementById("text_back").innerHTML = textAr[cont];
  }
}

import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
const suits = ["♥", "♦", "♠", "♣"];
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
function getRandomItem(array) {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}
function generateRandomCard(){
  const suit = getRandomItem(suits);
  const value = getRandomItem(values);
  const card = document.querySelector(".card");
  const top = document.querySelector(".suit.top");
  const bottom = document.querySelector(".suit.bottom");
  const center = document.querySelector(".value");
  top.textContent = suit;
  bottom.textContent = suit;
  center.textContent = value;
  top.classList.remove("red");
  bottom.classList.remove("red");
  card.classList.remove("red");
  if (suit === "♥" || suit === "♦" ){
    top.classList.add("red");
    bottom.classList.add("red");

  }
}
window.onload = generateRandomCard;


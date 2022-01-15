"use strict";

var buttonOne = document.getElementById("button1");
var buttonTwo = document.getElementById("button2");
var reset = document.getElementById("reset");
var playerOneScore = document.getElementById("player1");
var playerTwoScore = document.getElementById("player2");
var input = document.getElementById("inputMain");

var zero1 = 0;
playerOneScore.textContent = `${zero1}`;

var zero2 = 0;
playerTwoScore.textContent = `${zero2}`;

var playtill = 0;
input.value = `${playtill}`;
//-------------------Counter-----------------------------------

var input1 = input;
const log = document.getElementById("till");

input1.addEventListener("input", update);

function update(x) {
  log.textContent = ` ${x.target.value}`;
}
//-------------------Player1-----------------------------------
buttonOne.addEventListener("click", function () {
  if (zero1 < input.value) {
    zero1++;
    playerOneScore.textContent = `${zero1}`;
  } else {
    playerOneScore.style.color = "red";
    document.getElementById("button2").disabled = true;
  }
});
//-------------------Player2-----------------------------------
buttonTwo.addEventListener("click", function () {
  if (zero2 < input.value) {
    zero2++;
    playerTwoScore.textContent = `${zero2}`;
  } else {
    playerTwoScore.style.color = "red";
    document.getElementById("button1").disabled = true;
  }
});
//-------------------RESET-----------------------------------
reset.addEventListener("click", function () {
  playerOneScore.style.color = "black";
  playerTwoScore.style.color = "black";
  playerOneScore.textContent = 0;
  playerTwoScore.textContent = 0;
  zero1 = 0;
  zero2 = 0;
  input.value = 0;
  document.getElementById("button1").disabled = false;
  document.getElementById("button2").disabled = false;
  log.textContent = 0;
});

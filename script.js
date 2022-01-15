"use strict";

var buttonOne = document.getElementById("button1");
var buttonTwo = document.getElementById("button2");
var reset = document.getElementById("reset");
// var playerOneScore = document.getElementById("player1").textContent;???????????
var playerOneScore = document.getElementById("player1");
var playerTwoScore = document.getElementById("player2");
var input = document.getElementById("inputMain");

var numberOne = Number(playerOneScore.textContent);
var numberTwo = Number(playerTwoScore.textContent);
var max = Number(input.value); //?????????? scope?
var text = document.getElementsByTagName("p")[1];

text.innerText = `Playing to: ${input.value}`;

//-------------------Player1-----------------------------------
buttonOne.addEventListener("click", function () {
  var max = Number(input.value);

  if (numberOne < max) {
    // kai <=  leidzia skaicius iki 1+???
    numberOne++;
    console.log(`1.${numberOne}`);
    playerOneScore.textContent = numberOne;
  } else {
    playerOneScore.style.color = "green";
    document.getElementById("button2").disabled = true;
  }
});
//-------------------Player2-----------------------------------
buttonTwo.addEventListener("click", function () {
  var max = Number(input.value);
  if (numberTwo < max) {
    numberTwo++;
    playerTwoScore.textContent = numberTwo;
  } else {
    playerTwoScore.style.color = "green";
    document.getElementById("button1").disabled = true;
  }
});
//-------------------RESET-----------------------------------
reset.addEventListener("click", function () {
  playerOneScore.style.color = "black";
  playerTwoScore.style.color = "black";
  playerOneScore.textContent = 0;
  playerTwoScore.textContent = 0;
  input.value = 0;
  numberOne = 0;
  numberTwo = 0;
  max = 0;
  document.getElementById("button1").disabled = false;
  document.getElementById("button2").disabled = false;
});
document.getElementById("lable").createTextNode(max);

// var numberOne = parseInt(playerOneScore.textContent);
// var max = number(input1.value);

// buttonOne.addEventListener("click", function () {
//   if (numberOne < max) {
//     // max = input1.value;
//     console.log(max);
//     numberOne++;
//     // playerOneScore.textContent = numberOne;
//   }
// });

// reset.addEventListener("click", function () {
//   numberOne = 0;
//   playerOneScore.textContent = numberOne;
// });

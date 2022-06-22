const toggle = document.querySelector(".toggle");
const clockButton = document.querySelector(".clockButton");
const timerButton = document.querySelector(".timerButton");

const timer = document.querySelector(".timer");
const clock = document.querySelector(".clock");

const setDate = document.querySelector(".setDate");
const setMinutes = document.querySelector(".setMinutes");


timerButton.addEventListener("click",moveToRight);
clockButton.addEventListener("click",moveToLeft);

function moveToRight(){
  toggle.style.left = "50%";
  setMinutes.style.display = "block";
  setDate.style.display = "none"

  timer.style.left = "0px";
  clock.style.left = "450px"
}
function moveToLeft(){
  toggle.style.left = "0";
  setMinutes.style.display = "none";
  setDate.style.display = "block";

  timer.style.left = "-450px";
  clock.style.left = "0px"
}
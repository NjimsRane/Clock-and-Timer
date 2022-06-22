const setClock = document.querySelector(".setClock");

function time(){

  let setTime = new Date();

  let hrs = setTime.getHours();
  let mins = setTime.getMinutes();
  let secs = setTime.getSeconds();

  let ampm = hrs > 12 ? 'pm' : 'am';

  if(hrs > 12)hrs = hrs - 12;
  if(hrs < 10 )hrs = `0${hrs}`;
  if(mins < 10 )mins = `0${mins}`;
  if(secs < 10 )secs= `0${secs}`;

  setClock.innerText = `${hrs}:${mins}:${secs} ${ampm}`;
}
let intervalTime = setInterval(time,1000)
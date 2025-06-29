const timerTextElem = document.getElementById("timer-text");
let timeInSec = 0;
let intervalId = setInterval(timerFunc, 1000);

function timerFunc() {
  timeInSec++;

  const sec = timeInSec % 60;
  let min = Math.floor(timeInSec / 60) % 60;
  const hrs = Math.floor(timeInSec / 3600);

  timerTextElem.innerText = `${hrs.toString().padStart(2, "0")}:${min
    .toString()
    .padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
}

function handleReset() {
  timeInSec = 0;
  clearInterval(intervalId);
  timerTextElem.innerText = "00:00:00";
  document.getElementById("root").innerHTML = "";
}

function handlePause() {
  clearInterval(intervalId);
}

function handleResume() {
  clearInterval(intervalId);
  intervalId = setInterval(timerFunc, 1000);
}

function handleLap() {
  const para = document.createElement("p");
  para.innerText = timerTextElem.innerText;
  document.getElementById("root").appendChild(para);
}

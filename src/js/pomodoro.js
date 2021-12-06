import sound from '../assets/sound.mp3';

let workStatus = true;
let interval;
let time = 10;
const audio = new Audio();
audio.src = `${sound}`

const audioStartFunc = () => {
  audio.play();
}

const audioStopFunc = () => {
  audio.pause();
}

function printOnScreenTine(time) {
  let hours = Math.floor(time / 3600);
  let minutes = Math.floor((time - hours * 3600) / 60);
  let seconds = Math.floor((time - hours * 3600 - minutes * 60) % 60);
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  timeCountdown.innerHTML = `${hours}:${minutes}:${seconds}`;
}

const timeCountdown = document.getElementById("demo");
printOnScreenTine(time);
shortBreak.addEventListener("click", () => {
  audioStopFunc();
  clearInterval(interval);
  if (workStatus == false) {
    workStatus = true;
  }
  time = 300;
  let hours = Math.floor(time / 3600);
  let minutes = Math.floor((time - hours * 3600) / 60);
  let seconds = Math.floor((time - hours * 3600 - minutes * 60) % 60);
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  timeCountdown.innerHTML = `${hours}:${minutes}:${seconds}`;
  startButton.innerHTML = "START";
  mainPomodoro.style.backgroundColor = 'rgb(240, 17, 17)';
  shortBreak.style.backgroundColor = ' rgb(110, 10, 10)';
});

mainPomodoro.addEventListener("click", () => {
  audioStopFunc();
  clearInterval(interval);
  if (workStatus == false) {
    workStatus = true;;
  }
  time = 600;
  printOnScreenTine(time);
  startButton.innerHTML = "START";
  shortBreak.style.backgroundColor = 'rgb(240, 17, 17)';
  mainPomodoro.style.backgroundColor = ' rgb(110, 10, 10)';
});

function countTime() {
  if (time >= 0) {
    printOnScreenTine(time);
    time--;
  } else {
    audioStopFunc();
    timeCountdown.innerHTML = 'Time out!';
    startButton.innerHTML = "NEW STEP";
    workStatus = false;
    clearInterval(interval);
  }
}

startButton.addEventListener("click", () => {
  if (time == -1) {
    time = 100;
    workStatus = false;
    audioStartFunc();
    clearInterval(interval);
    startButton.innerHTML = "STOP";
  }
  if (workStatus == true) {
    audioStartFunc();
    interval = setInterval(countTime, 1000);
    startButton.innerHTML = "STOP";
    workStatus = false;
  } else {
    audioStopFunc();
    clearInterval(interval);
    startButton.innerHTML = "START";
    workStatus = true;
  }
});

increaseHours.addEventListener("click", () => {
  time += 3600;
  printOnScreenTine(time);
});

decreaseHours.addEventListener("click", () => {
  if (time > 3600) {
    time -= 3600;
    printOnScreenTine(time);
  }
});

increaseMinutes.addEventListener("click", () => {
  time += 60;
  printOnScreenTine(time);
});

decreaseMinutes.addEventListener("click", () => {
  if (time > 59) {
    time -= 60;
    printOnScreenTine(time);
  }
});

increaseSeconds.addEventListener("click", () => {
  time += 1;
  printOnScreenTine(time);
});

decreaseSeconds.addEventListener("click", () => {
  if (time > 0) {
    time -= 1;
    printOnScreenTine(time);
  }
});
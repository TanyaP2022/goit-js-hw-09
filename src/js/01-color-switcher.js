const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

const CHANGE_DELAY = 1000;

startBtn.setAttribute('disabled', 'true');

startBtn.addEventListener('click', onStartClick);
stopBtn.addEventListener('click', onStopClick);

let intervalId = null;

function onStartClick() {
  intervalId = setInterval(getRandomHexColor, CHANGE_DELAY, CHANGE_DELAY);
  startBtn.setAttribute('disabled', 'true');
  stopBtn.removeAttribute('disabled', 'true');
}
function onStopClick() {
  clearInterval(intervalId);
  startBtn.removeAttribute('disabled', 'true');
  stopBtn.setAttribute('disabled', 'true');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

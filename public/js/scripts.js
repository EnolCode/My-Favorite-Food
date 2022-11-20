const timer = document.querySelector(".time__container__timer");
const button = document.querySelector(".time__button");
const textTime = document.querySelector(".time__paragraph");
let minutes = 9;
let seconds = 0;
let duration = minutes * 60 + seconds;

function addZeroInSeconds(num) {
  return num < 10 ? "0" + num : num;
}
function stopCountdown(interval, time) {
  if (time < 0) {
    clearInterval(interval);
  }
}
function urPizzaReadyText(element, minutes, seconds) {
  element.innerHTML = `Su pizza estará lista en ${minutes} minutos y ${seconds} segundos.`;
}
function startCountDown() {
  let secondsRemaining = duration;
  let min = 0;
  let sec = 0;

  let countInterval = setInterval(function () {
    min = parseInt(secondsRemaining / 60);
    sec = parseInt(secondsRemaining % 60);
    timer.innerHTML = `${addZeroInSeconds(min)}:${addZeroInSeconds(sec)}`;

    urPizzaReadyText(textTime, min, sec);
    secondsRemaining = secondsRemaining - 1;

    stopCountdown(countInterval, secondsRemaining);
  }, 1000);
}

button.addEventListener("click", (e) => {
  timer.innerHTML = `${addZeroInSeconds(minutes)}:${addZeroInSeconds(seconds)}`;
  startCountDown(--duration, timer);
  addVisibility(timer, "none");
});

function addVisibility(element, clase) {
  document.querySelector(element.classList.remove(clase));
}

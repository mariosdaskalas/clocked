// Global Vars
let timerSeconds = 0;
let futureTimeBySeconds = 0;
let intervalTimer;

let audio;

/* CSS DOM Manipulation */

function increase() {
  document.getElementById('timer').style.fontSize = '650%';
}

function decrease() {
  document.getElementById('timer').style.fontSize = '350%';
}

function changefont() {
  document.getElementById('timer').style.fontFamily = 'cursive';
}

function refresh() {
  location.reload();
}

/* Select  timer*/
let stopwatch = document.getElementById('timer');

// Set the Timer Vars and the Watchface to the new Timer
function setTimer() {
  getHours = parseInt(document.getElementById('gethours').value);
  getMinutes = parseInt(document.getElementById('getminutes').value);
  getSeconds = parseInt(document.getElementById('getseconds').value);

  timerSeconds = getSeconds + getMinutes * 60 + getHours * 60 * 60;
  document.getElementById('start').style.display = 'inline';
  setWatchfaceTime(timerSeconds);
}

// Changes the visible time
function setWatchfaceTime(newTime) {
  let date = new Date(null);
  date.setSeconds(newTime);
  stopwatch.innerHTML = date.toISOString().slice(11, 19);
}

// Starts the timer
function startTimer() {
  let currentDate = new Date();
  let seconds = Math.floor(Date.now() / 1000);
  futureTimeBySeconds = seconds + timerSeconds;

  document.getElementById('start').style.display = 'none';
  document.getElementById('set').style.display = 'none';
  document.getElementById('stop').style.display = 'inline';
  document.getElementById('reset').style.display = 'none';

  // calculates the time difference every Second
  intervalTimer = setInterval(renewTimeDifference, 100);
}

// calculate the time difference and renews the Watchface,
// until diff is smaller equal 0
function renewTimeDifference() {
  let seconds = Math.floor(Date.now() / 1000);
  diffTime = futureTimeBySeconds - seconds;
  setWatchfaceTime(diffTime);

  if (diffTime < 0) {
    playAlarm();
    resetTimer();
  }
}

// Stops the timer
function stopTimer() {
  let seconds = Math.floor(Date.now() / 1000);
  timerSeconds = futureTimeBySeconds - seconds;
  clearInterval(intervalTimer);

  document.getElementById('start').style.display = 'inline';
  document.getElementById('stop').style.display = 'none';
  document.getElementById('reset').style.display = 'inline';
}

function playAlarm() {
  audio = new Audio('./music/piano.mp3');
  audio.play();
  setTimeout(function () {
    window.confirm('Time is Over! Artist: Alexander Blu // Song: Soft Piano Song');
    audio.pause();
  }, 500);
}

function resetTimer() {
  setTimer();
  clearInterval(intervalTimer);
}

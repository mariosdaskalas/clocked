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

// // Get data from input fields
// let getHours = parseInt(document.getElementById('gethours').value);
// let getMinutes = parseInt(document.getElementById('getminutes').value);
// let getSeconds = parseInt(document.getElementById('getseconds').value);

// Time Vars
let timerSeconds = 0;
let futureTimeBySeconds = 0;
let intervalTimer;

// Use Else and display it as <p> not an alert
/*
if (!isNan(getHours) || !isNan(getMinutes) || !isNan(getSeconds) ) {
    alert("Please input only numbers");
*/

/* Select  timer*/
let stopwatch = document.getElementById('timer');

// Set the Timer Vars and the Watchface to the new Timer
function setTimer() {
  getHours = parseInt(document.getElementById('gethours').value);
  getMinutes = parseInt(document.getElementById('getminutes').value);
  getSeconds = parseInt(document.getElementById('getseconds').value);

  timerSeconds = getSeconds + getMinutes * 60 + getHours * 60 * 60;
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

  // calculates the time difference every Second,
  intervalTimer = setInterval(renewTimeDifference, 100);
}

// calculate the time difference and renews the Watchface,
// until diff is smaller equal 0
function renewTimeDifference() {
  let seconds = Math.floor(Date.now() / 1000);
  diffTime = futureTimeBySeconds - seconds;
  setWatchfaceTime(diffTime);

  if (diffTime <= 0) {
    clearInterval(intervalTimer);
  }
}

// Stops the timer
function stopTimer() {
  let seconds = Math.floor(Date.now() / 1000);
  timerSeconds = futureTimeBySeconds - seconds;
  clearInterval(intervalTimer);
}

function resetTimer() {
  setTimer();
  clearInterval(intervalTimer);
}

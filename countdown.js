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
let timer;

// Use Else and display it as <p> not an alert
/*
if (!isNan(getHours) || !isNan(getMinutes) || !isNan(getSeconds) ) {
    alert("Please input only numbers");
*/

/* Select  timer*/
let stopwatch = document.getElementById('timer');

// Declare variables
let stop = true;

// Starts the timer
function startTimer() {
  if (stop == true) {
    stop = false;
  }
  cycleTimer();
}

// Stops the timer
function stopTimer() {
  if (stop == false) {
    stop = true;
  }
}
function setTimer() {
  getHours = parseInt(document.getElementById('gethours').value);
  getMinutes = parseInt(document.getElementById('getminutes').value);
  getSeconds = parseInt(document.getElementById('getseconds').value);

  timerSeconds = getSeconds + getMinutes * 60 + getHours * 60 * 60;
  setTime(timerSeconds);
  console.log(timerSeconds);
  // Display data
  //   stopwatch.innerHTML = getHours + ':' + getMinutes + ':' + getSeconds;
}

function cycleTimer() {
  let currentDate = new Date();
  let seconds = Math.floor(Date.now() / 1000);
  futureTimeBySeconds = seconds + timerSeconds;
  timer = setInterval(refreshTime, 1000);
}

function refreshTime() {
  let seconds = Math.floor(Date.now() / 1000);
  diffTime = futureTimeBySeconds - seconds;
  console.log(diffTime);
  setTime(diffTime);
  if (diffTime <= 0) {
    console.log('hi');
    clearInterval(timer);
  }
}

function setTime(newTime) {
  var date = new Date(null);
  date.setSeconds(newTime); // specify value for SECONDS here
  var result = date.toISOString().substr(11, 8);

  stopwatch.innerHTML = result;
}

// Resets the timer
function resetTimer() {
  getHours = parseInt(getHours);
  getMinutes = parseInt(getMinutes);
  getSeconds = parseInt(getSeconds);

  stopwatch.innerHTML = getHours + ':' + getMinutes + ':' + getSeconds;
}

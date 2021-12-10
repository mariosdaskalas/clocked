/* CSS DOM Manipulation */

function increase() {
    document.getElementById("timer").style.fontSize = "650%";
}

function decrease() {
    document.getElementById("timer").style.fontSize = "350%";
}

function changefont() {
    document.getElementById("timer").style.fontFamily = "cursive";
}

function refresh() {
    location.reload();
}

/* Select  timer*/
let stopwatch = document.getElementById("timer");

// Declare variables

let hours = 0;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;
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

function cycleTimer() {
    if (stop == false) {

        // Parse to Int
        hours = parseInt(hours);
        minutes = parseInt(minutes);
        seconds = parseInt(seconds);
        miliseconds = parseInt(miliseconds);

        // Start counting miliseconds
        miliseconds = miliseconds + 1;
        
        /* Append "0", so it display such as :00 */
        if (hours < 10 || hours == 0) {
            hours = "0" + hours;
        }
        if (minutes < 10 || minutes == 0) {
            minutes = "0" + minutes;
        }
        if (seconds < 10 || seconds == 0) {
            seconds = "0" + seconds;
        }
        if (miliseconds < 10 || miliseconds == 0) {
            miliseconds = "0" + miliseconds;
        }

        /* When target is reached increment values */
        if (miliseconds == 100) {
            miliseconds = 0;
            seconds++;
        }
        if (seconds == 60) {
            miliseconds = 0;
            seconds = 0;
            minutes++;
        }
        if (minutes == 60) {
            miliseconds = 0;
            minutes = 0;
            seconds = 0;
            hours++;
        }

        // Display data
        stopwatch.innerHTML = hours + ":" + minutes + ":" + seconds + ":" + miliseconds;

        // Call cycleTimer() every 10ms
        setTimeout("cycleTimer()", 10);
    }
}

// Resets the timer
function resetTimer() {
    hours = 0;
    minutes = 0;
    seconds = 0;
    miliseconds = 0;
    stopwatch.innerHTML = hours + ":" + minutes + ":" + seconds + ":" + miliseconds;
}
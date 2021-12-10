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

let stopwatch = document.getElementById("timer");

let hours = 0;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let stop = true;

function startTimer() {
    if (stop == true) {
        stop = false;
    }
    cycleTimer();
}

function stopTimer() {
    if (stop == false) {
        stop = true;
    }
}

function cycleTimer() {
    if (stop == false) {
        hours = parseInt(hours);
        minutes = parseInt(minutes);
        seconds = parseInt(seconds);
        miliseconds = parseInt(miliseconds);

        miliseconds = miliseconds + 1;
        
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
        if (miliseconds == 100) {
            miliseconds = 0;
            seconds++;
        }
        if (seconds == 60) {
            seconds = 0;
            minutes++;
        }
        if (minutes == 60) {
            minutes = 0;
            seconds = 0;
            hours++;
        }

        stopwatch.innerHTML = hours + ":" + minutes + ":" + seconds + ":" + miliseconds;

        setTimeout("cycleTimer()", 10);
    }
}

function resetTimer() {
    hours = 0;
    minutes = 0;
    seconds = 0;
    miliseconds = 0;
    stopwatch.innerHTML = hours + ":" + minutes + ":" + seconds + ":" + miliseconds;
}
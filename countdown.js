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

// Get data from input fields
let getHours = parseInt(document.getElementById("gethours").value);
let getMinutes = parseInt(document.getElementById("getminutes").value);
let getSeconds = parseInt(document.getElementById("getseconds").value);

console.log(`Hours: ${getHours}`);
console.log(`Minutes: ${getMinutes}`);
console.log(`Seconds: ${getSeconds}`);

/* Select  timer*/
let stopwatch = document.getElementById("timer");

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
    getHours = parseInt(document.getElementById("gethours").value);
    getMinutes = parseInt(document.getElementById("getminutes").value);
    getSeconds = parseInt(document.getElementById("getseconds").value);

    // Display data
    stopwatch.innerHTML = getHours + ":" + getMinutes + ":" + getSeconds;
}

function cycleTimer() {
    if (stop == false) {

        // Parse to Int
        /*
        getHours = parseInt(getHours);
        getMinutes = parseInt(getMinutes);
        getSeconds = parseInt(getSeconds);
        */

        // Start counting miliseconds
        getSeconds--;

        /*
        <audio id="myAudio">
            <source src="/music/piano.mp3" type="audio/mpeg">
            Your browser does not support this type of audio.
            </source>
        </audio>
        */

        
        
        /* When target is reached increment values */
        if (getHours == 0 && getMinutes == 0 && getSeconds == 0) {
            let audio = new Audio("/music/piano.mp3");
            audio.play();
            setTimeout(function(){
                alert("Time is Over! Artist: Alexander Blu // Song: Soft Piano Song")
            }, 500);
            timer.innerHTML = "00:00:00";
            // location.reload();
        }
        if (getMinutes && getSeconds == 0) {
            getMinutes--;
            getSeconds = 59;
        }
        /*
        if (getMinutes < 10) {
            getMinutes = "0" + getMinutes;
        }
        */
        if (getSeconds < 10) {
            getSeconds = "0" + getSeconds;
        }
    
        // Display data
        stopwatch.innerHTML = getHours + ":" + getMinutes + ":" + getSeconds;

        // Call cycleTimer() every 10ms
        setTimeout("cycleTimer()", 1000);
    }
}

// Resets the timer
function resetTimer() {
    getHours = 0;
    getMinutes = 0;
    getSeconds = 0;
    stopwatch.innerHTML = getHours + ":" + getMinutes + ":" + getSeconds;
}
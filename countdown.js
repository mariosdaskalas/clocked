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
// let getHours = parseInt(document.getElementById("gethours").value);
let getMinutes = parseInt(document.getElementById("getminutes").value);
let getSeconds = parseInt(document.getElementById("getseconds").value);

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
    // getHours = parseInt(document.getElementById("gethours").value);
    getMinutes = parseInt(document.getElementById("getminutes").value);
    getSeconds = parseInt(document.getElementById("getseconds").value);

    // Display data
    stopwatch.innerHTML = getMinutes + ":" + getSeconds;
}

function cycleTimer() {
    if (stop == false) {

        // Start counting seconds
        getSeconds--;
    
        /* When target is reached increment values */
        if (getMinutes == 0 && getSeconds == 0) {
            let audio = new Audio("./music/piano.mp3");
            audio.play();
            setTimeout(function(){
                alert("Time is Over! Artist: Alexander Blu // Song: Soft Piano Song");
            }, 500);
            document.getElementById("countdown-container").innerHTML = "Time Is Over!";
            document.getElementById("countdown-container").style.fontSize = "200%";
        }

        // Parse to Int
        // getHours = parseInt(getHours);
        getMinutes = parseInt(getMinutes);
        getSeconds = parseInt(getSeconds);
        /*
        if (getHours && getMinutes == 0) {
            // Delay 1 second
            setTimeout(function(){
                getHours--;
                getMinutes--;
                getSeconds = 60; 
            }, 1000); 
        }
        */
       /*
        if (getHours && getMinutes && getSeconds == 0) {
            // Delay 1 second
            setTimeout(function() {
                getMinutes--;
            }, 1000);
            setTimeout(function(){
                getHours;
                getSeconds = 60;
            }, 1000); 
            console.log(`Runs: getHours && getMinutes && getSeconds == 0`);
        }
        */
        if (getMinutes && getSeconds == 0) {
            // Delay 1 second    
            setTimeout(function(){
                getMinutes--; 
                getSeconds = 60; 
                console.log(`Runs getMinutes && getSeconds == 0`);
            }, 1000);      
        }
        if (getSeconds < 10 || getSeconds == 0) {
            getSeconds = "0" + getSeconds;
        }
        if (getMinutes < 10 || getMinutes == 0) {
            getMinutes = "0" + getMinutes;
        }
        /*
        if (getHours < 10 || getHours == 0) {
            getHours = "0" + getHours;
        }
        */
    
        // Display data
        stopwatch.innerHTML =  getMinutes + ":" + getSeconds;
       
        // Call cycleTimer() every 10ms
        setTimeout("cycleTimer()", 1000);
    }
}

// Resets the timer
function resetTimer() {
    // getHours = 0;
    getMinutes = 0;
    getSeconds = 0;

    // getHours = parseInt(getHours);
    getMinutes = parseInt(getMinutes);
    getSeconds = parseInt(getSeconds);

    stopwatch.innerHTML = getMinutes + ":" + getSeconds;
}
function tenMinutes() {
    getMinutes = 10;
    getSeconds = 1;

    // Display data
    stopwatch.innerHTML = getMinutes + ":" + getSeconds;
}
function thirtyMinutes() {
    getMinutes = 30;
    getSeconds = 1;
    
    // Display data
    stopwatch.innerHTML = getMinutes + ":" + getSeconds;
}
function fiftyMinutes() {
    getMinutes = 50;
    getSeconds = 1;
    
    // Display data
    stopwatch.innerHTML = getMinutes + ":" + getSeconds;
}
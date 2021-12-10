const getCurrentDateTime = () => {
    let today = new Date();

    // Assign weekdays
    let weekDay = new Array(7);
    weekDay[0] = "SUNDAY";
    weekDay[1] = "MONDAY";
    weekDay[2] = "TUESDAY";
    weekDay[3] = "WEDNESDAY";
    weekDay[4] = "THURSDAY";
    weekDay[5] = "FRIDAY";
    weekDay[6] = "SATURDAY";

    // Assign months
    let months = new Array(12);
    months[0] = "JAN";
    months[1] = "FEB";
    months[2] = "MAR";
    months[3] = "APR";
    months[4] = "MAY";
    months[5] = "JUN";
    months[6] = "JUL";
    months[7] = "AUG";
    months[8] = "SEP";
    months[9] = "OCT";
    months[10] = "NOV";
    months[11] = "DEC";

    // Get hours
    let hours = today.getHours();

    // Get minutes
    let minutes = today.getMinutes();

    // Append 0 if minutes < 10
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    else {
        minutes = minutes;
    }

    // Get seconds
    let seconds = today.getSeconds();

    // Append 0 if seconds < 10
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    else {
        seconds = seconds;
    }

    // Set current Time
    let currentTime = `${hours}:${minutes}:${seconds}`;

    let currentDay = weekDay[today.getDay()];
    let currentDate = today.getDate();
    let currentMonth = months[today.getMonth()];
    let currentYear = today.getFullYear();
    let fullDate = `${currentDate}-${currentMonth}-${currentYear}`;

    document.getElementById("date").innerHTML = fullDate;
    document.getElementById("day").innerHTML = currentDay;
    document.getElementById("time").innerHTML = currentTime;

    setTimeout(getCurrentDateTime, 1);
}

function increase() {
    document.getElementById("date").style.fontSize = "450%";
    document.getElementById("day").style.fontSize = "350%";
    document.getElementById("time").style.fontSize = "550%";
}

function decrease() {
    document.getElementById("date").style.fontSize = "300%";
    document.getElementById("day").style.fontSize = "200%";
    document.getElementById("time").style.fontSize = "400%";
}

function changefont() {
    document.getElementById("date-container").style.fontFamily = "cursive";
}

function refresh() {
    location.reload();
}

getCurrentDateTime();
function startTime() {
    var today = new Date();
    var endOfYear = new Date(today.getFullYear(), 11, 31, 23, 59, 59);
    var timeDiff = endOfYear - today;

    var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    hours = checkTime(hours);
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);

    document.getElementById('clock').innerHTML = "Remaining this year " + days + " days - " + hours + " hours - " + minutes + " mins and " + seconds + " secs and counting..";

    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

window.onload = function() {
    startTime();
};

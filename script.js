var mins = 00;
var secs = 00;
var tens = 00;
var appendMins = document.getElementById("mins");
var appendSecs = document.getElementById("secs");
var appendTens = document.getElementById("tens");
var buttonStart = document.getElementById("button-start");
var buttonStop = document.getElementById("button-stop");
var buttonReset = document.getElementById("button-reset");

let intervalId;

buttonStart.onclick = function() {
    clearInterval(intervalId) 
    intervalId = setInterval(startTimer, 10)
}

buttonStop.onclick = function() {
    clearInterval(intervalId)
}

buttonReset.onclick = function() {
    clearInterval(intervalId)
    tens = 00;
    secs = 00;
    mins = 00;
    appendTens.textContent = "00";
    appendSecs.textContent = "00";
    appendMins.textContent = "00";
}

function startTimer() {
    tens++;
    appendTens.textContent = tens > 9 ? tens : '0' + tens;
    if(tens > 99) {
        secs++;
        appendSecs.textContent = secs > 9 ? secs : '0' + secs;
        tens = 00;
        appendTens.textContent = "00"
    }
    if(secs > 59) {
        mins++;
        appendMins.textContent = mins > 9 ? mins : '0' + mins;
        secs = 00;
        appendSecs.textContent = "00"
    }
}
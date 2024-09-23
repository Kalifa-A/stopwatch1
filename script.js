let startTime;
let updatedTime;
let difference;
let tInterval;
let running = false;

const display = document.getElementById("display");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);

function startTimer() {
    if (!running) {
        startTime = new Date().getTime();
        tInterval = setInterval(updateTimer, 1000);
        running = true;
    }
}

function updateTimer() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;
    
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    display.innerHTML = 
        (hours < 10 ? "0" : "") + hours + ":" + 
        (minutes < 10 ? "0" : "") + minutes + ":" + 
        (seconds < 10 ? "0" : "") + seconds;
}

function stopTimer() {
    clearInterval(tInterval);
    running = false;
}

function resetTimer() {
    clearInterval(tInterval);
    display.innerHTML = "00:00:00";
    running = false;
}

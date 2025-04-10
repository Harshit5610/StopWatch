let timeDisplay = document.querySelector('.time-display');
let stopButton = document.getElementById('stopBtn');
let startButton = document.getElementById('startBtn');
let resetButton = document.getElementById('resetBtn');

let msecs = 00;
let secs = 00;
let min = 00;

let timerId = null;

function startTimer(){
    msecs++;
    if(msecs == 100) {
        msecs = 0;
        secs++;
        if(secs == 60){
            secs = 0;
            min++;
        }
    }
    let msecString = msecs < 10 ? `0${msecs}` : msecs;
    let secString = secs < 10 ? `0${secs}` : secs;
    let minString = min < 10 ? `0${min}` : min;

    timeDisplay.innerHTML = `${minString} : ${secString} : ${msecString}`;
}

startButton.addEventListener('click', function(){
    if(timerId !== null){
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
});

stopButton.addEventListener('click', function(){
    clearInterval(timerId);
});

resetButton.addEventListener('click', function(){
    clearInterval(timerId);
    timeDisplay.innerHTML = `00 : 00 : 00`;
    msecs = secs = msecs = 00;
});
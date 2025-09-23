let start = document.querySelector('#start');
let stop = document.querySelector('#stop');
let reset = document.querySelector('#reset');
let display = document.querySelector('.stopwatch-screen');

let isRunning = false;
let hours = 0;
let minutes = 0;
let seconds = 0;
let timer = null;

start.addEventListener('click', () => {
    if(!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes += 1;
            }
            if (minutes === 60) {
                minutes = 0;
                hours += 1;
            }
            updateDisplay()
        }, 1000)
    }
});

stop.addEventListener('click', () => {
    isRunning = false;
    clearInterval(timer);
});

reset.addEventListener('click', function(){
    clearInterval(timer);
    isRunning = false;
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateDisplay()
})

function updateDisplay () {
    let h = hours < 10 ? "0" + hours: hours;
    let m = minutes < 10 ? "0" + minutes: minutes;
    let s = seconds < 10 ? "0" + seconds: seconds;
    display.innerHTML = `${h}:${m}:${s}`
}

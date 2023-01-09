const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const millisecondEl = document.querySelector('.millisecond');

const buttonStart = document.querySelector('.button_Start');
const buttonStop = document.querySelector('.button_Stop');
const buttonPause = document.querySelector('.button_Pause');

buttonStart.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10)
});

buttonPause.addEventListener('click', () => {
    clearInterval(interval);
});

buttonStop.addEventListener('click', () => {
    clearInterval(interval);
    minute = 00;
    second = 00;
    millisecond = 00;
    interval;
    minuteEl.textContent = '00:';
    secondEl.textContent = '00:';
    millisecondEl.textContent = '00';
});

document.onkeydown = function (event) {
    if (event.keyCode == 13) {
        clearInterval(interval);
        interval = setInterval(startTimer, 10)
    }
}
document.onkeyup = function (event) {
    if (event.keyCode == 32) {
        clearInterval(interval);
    }
}





document.onkeypress = function (event) {
    console.log(event.keyCode)
}

let minute = 00,
    second = 00,
    millisecond = 00,
    interval;

function startTimer() {
    millisecond++;

    //MILLISECOND
    if (millisecond < 9) {
        millisecondEl.innerText = '0' + millisecond
    }
    if (millisecond > 9) {
        millisecondEl.innerText = millisecond;
    }
    if (millisecond > 99) {
        second++;
        secondEl.innerText = '0' + second + ':';
        millisecond = 0;
        millisecondEl.innerText = '0' + millisecond;
    }

    //SECOND
    if (second < 9) {
        secondEl.innerText = '0' + second + ':';
    }
    if (second > 9) {
        secondEl.innerText = second + ':';
    }
    if (second > 59) {
        minute++;
        minuteEl.innerText = '0' + minute + ':';
        second = 0;
        secondEl.innerText = '0' + second;
    }

    //MINUTE

    if (minute < 9) {
        minuteEl.innerText = '0' + minute + ':';
    }

    if (minute > 9) {
        minuteEl.innerText = minute + ':';
    }

}
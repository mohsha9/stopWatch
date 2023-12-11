const startButton = document.querySelector('.js-start-button')

document.querySelector('.js-start-button')
  .addEventListener('click', () => {
    if (startButton.innerHTML === 'Start') {
      startButton.classList.add('stop-button');
      startButton.classList.remove('start-button');
      startButton.innerHTML = 'Stop';
    } else {
      startButton.classList.add('start-button');
      startButton.innerHTML = 'Start';
    }
  });

const time = {
  hours: 0,
  minutes: 0,
  seconds: 0,
  miliSeconds: 0
};

let intervalId;
let intervalId1;
let intervalId2;
let intervalId3;

document.querySelector('.js-start-button')
  .addEventListener('click', () => {
    if (startButton.innerHTML === 'Stop') {
      startTimer();
    } else {
      clearInterval(intervalId);
      clearInterval(intervalId1);
      clearInterval(intervalId2);
      clearInterval(intervalId3);
    }
  });

startTimer = () => {

  intervalId = setInterval(() => {
    time.miliSeconds += 1;
    document.querySelector('.js-timer').innerHTML = `${time.hours}:${time.minutes}:${time.seconds}:${time.miliSeconds}`;
    if (time.miliSeconds === 60) {
      time.miliSeconds = 0;
      document.querySelector('.js-timer').innerHTML = `${time.hours}:${time.minutes}:${time.seconds}:${time.miliSeconds}`;
    };
  }, 100);

  intervalId1 = setInterval(() => {
    time.seconds += 1;
    document.querySelector('.js-timer').innerHTML = `${time.hours}:${time.minutes}:${time.seconds}:${time.miliSeconds}`;
    if (time.seconds === 60) {
      time.seconds = 0;
      document.querySelector('.js-timer').innerHTML = `${time.hours}:${time.minutes}:${time.seconds}:${time.miliSeconds}`;
    };
  }, 1000);

  intervalId2 = setInterval(() => {
    time.minutes += 1;
    document.querySelector('.js-timer').innerHTML = `${time.hours}:${time.minutes}:${time.seconds}:${time.miliSeconds}`;
    if (time.minutes === 60) {
      time.minutes = 0;
      document.querySelector('.js-timer').innerHTML = `${time.hours}:${time.minutes}:${time.seconds}:${time.miliSeconds}`;
    };
  }, 60000);

  intervalId3 = setInterval(() => {
    time.hours += 1;
    document.querySelector('.js-timer').innerHTML = `${time.hours}:${time.minutes}:${time.seconds}:${time.miliSeconds}`;
    if (time.hours === 24) {
      time.hours = 0;
      document.querySelector('.js-timer').innerHTML = `${time.hours}:${time.minutes}:${time.seconds}:${time.miliSeconds}`;
    };
  }, 3600000);
};


document.querySelector('.js-reset-button')
  .addEventListener('click', () => {
    time.hours = 0;
    time.minutes = 0;
    time.seconds = 0;
    time.miliSeconds = 0;
    document.querySelector('.js-timer').innerHTML = `${time.hours}:${time.minutes}:${time.seconds}:${time.miliSeconds}`;
  });
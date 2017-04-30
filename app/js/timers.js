import appData from './appData';
import { attemptNextQuestion } from './functions';
import { questionCorrectAnswerView } from './views';
import { root } from '../index';


const SHOW_CORRECT_ANSWER_DURATION = 3000;

const stopTimer = (showCorrect) => {
    appData.allowChooseAnswer = false;
    clearTimers();
    if (showCorrect) {
        showCorrectAnswerTimer();
    } else {
        attemptNextQuestion();
    }
};

const setTimerWidth = () => {
    let timer = document.getElementById('timer');

    appData.currentTimerWidth -= 1;
    timer.style.width = `${appData.currentTimerWidth}%`;
};

export const clearTimers = () => {
    clearTimeout(appData.timeout);
    clearInterval(appData.interval);
};

export const startInterval = () => {
    appData.interval = setInterval(() => setTimerWidth(), appData.timePerQuestion / 100);
};

export const runTimer = (duration, showCorrect) => {
    appData.timeout = setTimeout(() => stopTimer(showCorrect), duration);
};

export const showCorrectAnswerTimer = () => {
    runTimer(SHOW_CORRECT_ANSWER_DURATION, false);
    root(questionCorrectAnswerView);
};
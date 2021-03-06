import { root } from '../index';
import { appData } from './appData';
import { fetchData } from './fetchData';
import { startView } from './views/startView';
import { resultView } from './views/resultView';
import { questionView } from './views/questionView';
import { questionCorrectAnswerView } from './views/questionCorrectAnswerView';
import { clearTimers, runTimer, showCorrectAnswerTimer, startInterval } from './timers';

const resetQuizData = () => {
    appData.quizStarted = false;
    appData.showResult = false;
    appData.allowChooseAnswer = false;
    appData.userScore = 0;
    appData.currentQuestion = 0;
    appData.currentTimerWidth = 100;
    clearTimers();
};

const nextQuestion = () => {
    appData.allowChooseAnswer = true;
    appData.currentTimerWidth = 100;
    incrementQuestion();
    runTimer(appData.timePerQuestion, true);
    startInterval();
    root(questionView);
};

const validateAnswer = (isCorrect) => (isCorrect) ? appData.userScore += 1 : null;

const incrementQuestion = () =>
    appData.currentQuestion += 1;

export const runQuiz = () => {
    appData.showResult = false;
    appData.quizStarted = true;
    appData.allowChooseAnswer = true;
    runTimer(appData.timePerQuestion, true);
    startInterval();
    root(questionView);
};

export const attemptNextQuestion = () => {
    if (appData.currentQuestion < appData.fetchedQuestions.length - 1) {
        nextQuestion();
    } else {
        clearTimers();
        root(resultView);
    }
};

export const restartQuiz = () => {
    resetQuizData();
    root(startView);
};

export const chosenAnswer = (isCorrect) => {
    if (appData.allowChooseAnswer) {
        appData.allowChooseAnswer = false;
        clearTimers();
        validateAnswer(isCorrect);
        showCorrectAnswerTimer();
        root(questionCorrectAnswerView);
    }
};

export const attemptToRunQuiz = () => appData.fetchedQuestions.length === 0 ? fetchData() : runQuiz();

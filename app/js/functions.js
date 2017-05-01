import appData from './appData';
import fetchData from './fetchData';
import { root } from '../index';
import { clearTimers, runTimer, showCorrectAnswerTimer, startInterval } from './timers';
import { questionView } from './views/questionView';
import { resultView } from './views/resultView';
import { startView } from './views/startView';
import { questionCorrectAnswerView } from './views/questionCorrectAnswerView';


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

const validateAnswer =
    (isCorrect) => (isCorrect) ?
        appData.userScore += 1 : null;

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
    let {currentQuestion, fetchedQuestions} = appData;

    if (currentQuestion < fetchedQuestions.length - 1) {
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
    let {allowChooseAnswer} = appData;

    if (allowChooseAnswer) {
        appData.allowChooseAnswer = false;
        clearTimers();
        validateAnswer(isCorrect);
        showCorrectAnswerTimer();
        root(questionCorrectAnswerView);
    }
};

export const attemptToRunQuiz = () => {
    let {fetchedQuestions} = appData;

    if (fetchedQuestions.length === 0) {
        fetchData();
    } else {
        runQuiz();
    }
};

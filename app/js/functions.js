import appData from './appData';
import fetchData from './fetchData';
import { root } from '../index';
import { questionView, resultView, startView } from './views';


const stopTimer = () => {
    appData.allowChooseAnswer = false;
    incrementCurrentQuestion();
    clearInterval(appData.interval);
    attemptNextQuestion();
};

const runTimer = () => {
    appData.interval = setTimeout(() => stopTimer(), appData.timeSeconds * 10)
};

const runQuiz = () => {
    appData.showResult = false;
    appData.quizStarted = true;
    appData.allowChooseAnswer = true;
    runTimer();
    root(questionView);
};

const resetQuizData = () => {
    appData.quizStarted = false;
    appData.showResult = false;
    appData.allowChooseAnswer = false;
    appData.userScore = 0;
    appData.currentQuestion = 0;
    clearInterval(appData.interval);
};

const nextQuestion = () => {
    appData.allowChooseAnswer = true;
    runTimer();
    root(questionView);
};

const validateAnswer = (isCorrect) => (isCorrect) ? appData.userScore += 1 : null;

const incrementCurrentQuestion = () => appData.currentQuestion += 1;

const attemptNextQuestion = () => (appData.currentQuestion < appData.fetchedQuestions.length) ?
    nextQuestion() : root(resultView);

export const restartQuiz = () => {
    resetQuizData();
    root(startView);
};

export const chosenAnswer = (isCorrect) => {
    let {allowChooseAnswer} = appData;

    if (allowChooseAnswer) {
        clearInterval(appData.interval);
        validateAnswer(isCorrect);
        incrementCurrentQuestion();
        attemptNextQuestion();
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

export const setFetchedData = (data) => {
    let {questions, time_seconds} = data;

    appData.fetchedQuestions = questions;
    appData.timeSeconds = time_seconds;
    runQuiz();
};

import appData from './appData';
import fetchData from './fetchData';
import { root } from '../index';
import { questionView, resultView, startView } from './views';


const SHOW_CORRECT_ANSWER_DURATION = 3000;

const stopTimer = (showCorrect) => {
    appData.allowChooseAnswer = false;
    incrementCurrentQuestion();
    clearInterval(appData.interval);
    if (showCorrect) {
        showCorrectAnswer();
    } else {
        attemptNextQuestion();
    }
};

const runTimer = (duration, showCorrect) => {
    appData.interval = setTimeout(() => stopTimer(showCorrect), duration)
};

const showCorrectAnswer = () => runTimer(SHOW_CORRECT_ANSWER_DURATION, false);

const runQuiz = () => {
    appData.showResult = false;
    appData.quizStarted = true;
    appData.allowChooseAnswer = true;
    // TODO: * 1000
    runTimer(appData.timeSeconds * 10, true);
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
    // TODO: * 1000
    runTimer(appData.timeSeconds * 10, true);
    root(questionView);
};

const validateAnswer =
    (isCorrect) => (isCorrect) ?
        appData.userScore += 1 : null;

const incrementCurrentQuestion = () =>
    appData.currentQuestion += 1;

const attemptNextQuestion = () =>
    (appData.currentQuestion < appData.fetchedQuestions.length) ?
        nextQuestion() : root(resultView);

export const restartQuiz = () => {
    resetQuizData();
    root(startView);
};

export const chosenAnswer = (isCorrect) => {
    let {allowChooseAnswer} = appData;

    if (allowChooseAnswer) {
        appData.allowChooseAnswer = false;
        clearInterval(appData.interval);
        validateAnswer(isCorrect);
        showCorrectAnswer();
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

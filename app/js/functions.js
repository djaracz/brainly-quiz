import appData from './appData';
import fetchData from './fetchData';
import { root } from '../index';
import { questionView, resultView, startView } from './views';


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

const runQuiz = () => {
    console.log('run');
    appData.showResult = false;
    appData.quizStarted = true;
    appData.allowChooseAnswer = true;
    root(questionView);
};

export const restartQuiz = () => {
    appData.quizStarted = false;
    appData.showResult = false;
    appData.allowChooseAnswer = false;
    appData.userScore = 0;
    appData.currentQuestion = 0;

    root(startView);
};

const nextQuestion = () => {
    appData.allowChooseAnswer = true;
    root(questionView);
};

const validateAnswer = (isCorrect) => (isCorrect) ? appData.userScore += 1 : null;

const incrementCurrentQuestion = () => appData.currentQuestion += 1;

const attemptNextQuestion = () => (appData.currentQuestion < appData.fetchedQuestions.length) ?
    nextQuestion() : root(resultView);

export const chosenAnswer = (isCorrect) => {
    let {allowChooseAnswer} = appData;

    if (allowChooseAnswer) {
        appData.allowChooseAnswer = false;
        validateAnswer(isCorrect);
        incrementCurrentQuestion();
        attemptNextQuestion();
    }
};
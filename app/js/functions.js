import appData from './appData';
import fetchData from './fetchData';
import { root } from '../index';
import { questionCorrectAnswerView, questionView, resultView, startView } from './views';
import { runTimer, showCorrectAnswerTimer, startInterval } from './timers';


const resetQuizData = () => {
    appData.quizStarted = false;
    appData.showResult = false;
    appData.allowChooseAnswer = false;
    appData.userScore = 0;
    appData.currentQuestion = 0;
    appData.currentTimerWidth = 100;
    clearTimeout(appData.timeout);
    clearInterval(appData.interval);
};

const nextQuestion = () => {
    appData.allowChooseAnswer = true;
    appData.currentTimerWidth = 100;
    incrementCurrentQuestion();
    runTimer(appData.timePerQuestion, true);
    startInterval();
    root(questionView);
};

const validateAnswer =
    (isCorrect) => (isCorrect) ?
        appData.userScore += 1 : null;

const incrementCurrentQuestion = () =>
    appData.currentQuestion += 1;

export const runQuiz = () => {
    appData.showResult = false;
    appData.quizStarted = true;
    appData.allowChooseAnswer = true;
    runTimer(appData.timePerQuestion, true);
    startInterval();
    root(questionView);
};

export const attemptNextQuestion = () =>
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
        clearTimeout(appData.timeout);
        clearInterval(appData.interval);
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

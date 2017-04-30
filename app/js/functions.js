import appData from './appData';
import fetchData from './fetchData';
import { root } from '../index';


export const runQuiz = () => {
    console.log('run');
    appData.quizStarted = true;
    if (appData.questions.length === 0) {
        fetchData();
    }
    // root();
};

export const restartQuiz = () => {
    console.log('restart');
    appData.quizStarted = false;
    appData.showResult = false;
};
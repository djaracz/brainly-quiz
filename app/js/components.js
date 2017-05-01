import appData from './appData';
import { chosenAnswer } from './functions';


export const createButtonComponent = (text, cb, className) => {
    let btnToRender = document.createElement('button');
    btnToRender.className = className;
    btnToRender.innerHTML = text;
    btnToRender.addEventListener('click', () => cb());

    return btnToRender;
};

export const headerComponent = (text, className) => {
    let headerToRender = document.createElement('h1');
    headerToRender.className = className;
    headerToRender.innerHTML = text;

    return headerToRender;
};

export const questionComponent = () => {
    let {fetchedQuestions, currentQuestion} = appData;
    let {question} = fetchedQuestions[currentQuestion];

    let questionToRender = document.createElement('h2');
    questionToRender.className = 'question-container';
    questionToRender.innerHTML = `Q: ${question}`;

    return questionToRender;
};

const answerComponent = (correct, answer) => {
    let answerToRender = document.createElement('li');
    answerToRender.className = 'answer-container';

    if (answer) {
        answerToRender.addEventListener('click', () => chosenAnswer(correct));
        answerToRender.innerHTML = `${answer}`;
    }

    return answerToRender;
};

export const answersComponent = (showAnswer) => {
    let {fetchedQuestions, currentQuestion} = appData;
    let {answers} = fetchedQuestions[currentQuestion];

    let answersToRender = document.createElement('ul');
    answersToRender.className = 'answers-container';

    if (showAnswer) {
        answers.map(ans =>
            answersToRender.appendChild((ans.correct) ?
                answerComponent(ans.correct, ans.answer) : answerComponent()));
    } else {
        answers.map(ans =>
            answersToRender.appendChild(answerComponent(ans.correct, ans.answer)));
    }

    return answersToRender;
};

export const paragraphComponent = (text) => {
    let paragraphToRender = document.createElement('p');
    paragraphToRender.innerHTML = text;

    return paragraphToRender;
};

export const timerComponent = () => {
    let timerToRender = document.createElement('div');
    timerToRender.id = 'timer';

    return timerToRender;
};

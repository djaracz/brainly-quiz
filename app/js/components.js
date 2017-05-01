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

export const questionComponent = (className) => {
    let {fetchedQuestions, currentQuestion} = appData;
    let {question} = fetchedQuestions[currentQuestion];

    let questionToRender = document.createElement('h2');
    questionToRender.className = className;
    questionToRender.innerHTML = `Q: ${question}`;

    return questionToRender;
};

const answerComponent = (correct, answer) => {
    let answerToRender = document.createElement('li');
    answerToRender.className = 'sg-list__element sg-list__element--position sg-list__element--pointer';
    answerToRender.innerHTML = `
        <div class="sg-list__icon sg-list__icon--x32 sg-list__icon--align-top">
            <svg class="sg-icon sg-icon--x18">
                <use xlink:href="#icon-arrow_right"></use>
            </svg>
        </div>
        <div class="sg-text sg-text--headline">${(answer) ? answer : ''}</div>
    `;

    if (answer) {
        answerToRender.addEventListener('click', () => chosenAnswer(correct));
    }

    return answerToRender;
};

export const boxComponent = (child) => {
    let boxToRender = document.createElement('div');
    boxToRender.className = 'sg-box sg-box--border-dashed sg-box--mint-secondary sg-box--overlay';
    boxToRender.appendChild(child);

    return boxToRender;
};

export const answersComponent = (showAnswer) => {
    let {fetchedQuestions, currentQuestion} = appData;
    let {answers} = fetchedQuestions[currentQuestion];

    let answersToRender = document.createElement('ul');
    answersToRender.className = 'sg-list sg-list--position';

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

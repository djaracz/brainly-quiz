import { chosenAnswer } from '../functions';

export const answer = (className, correct, answer) => {
    let answerToRender = document.createElement('li');
    answerToRender.className = className;
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

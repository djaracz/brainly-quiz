import { restartQuiz, attemptToRunQuiz } from './functions';
import {
    answersComponent,
    createButtonComponent,
    headerComponent,
    paragraphComponent,
    questionComponent,
    timerComponent
} from './components';
import appData from './appData';


const mainView = (child) => {
    let view = document.createElement('div');
    view.appendChild(timerComponent());
    view.appendChild(createButtonComponent('restart quiz', restartQuiz));
    view.appendChild(child);

    return view;
};

export const startView = () => {
    let view = document.createElement('div');
    view.appendChild(headerComponent('brainly quiz!'));
    view.appendChild(createButtonComponent('start quiz', attemptToRunQuiz));

    // return mainView(view);
    return view;
};

export const questionView = () => {
    let view = document.createElement('div');
    view.appendChild(questionComponent());
    view.appendChild(answersComponent(false));

    return mainView(view);
};

export const questionCorrectAnswerView = () => {
    let view = document.createElement('div');
    view.appendChild(questionComponent());
    view.appendChild(answersComponent(true));

    return mainView(view);
};

export const resultView = () => {
    let {userScore} = appData;
    let view = document.createElement('div');
    view.appendChild(headerComponent('Score'));
    view.appendChild(paragraphComponent(`Your result is ${userScore}`));

    return mainView(view);
};

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
    view.className = 'main-container';
    view.appendChild(timerComponent());
    view.appendChild(createButtonComponent('restart quiz', restartQuiz));
    view.appendChild(child);

    return view;
};

export const startView = () => {
    let view = document.createElement('div');
    view.className = "start-container";
    view.appendChild(headerComponent(
        'czy jestes gotowy sprawdźić swoja wiedzę?',
        'sg-text-bit'
    ));
    view.appendChild(headerComponent(
        'czy jestes gotowy sprawdźić swoja wiedzę?',
        'sg-text-bit sg-text-bit--not-responsive sg-text-bit--small sg-text-bit--gray'
    ));
    view.appendChild(headerComponent(
        'rozpocznij test już teraz!',
        'sg-text-bit sg-text-bit--not-responsive sg-text-bit--warning'
    ));
    view.appendChild(createButtonComponent(
        'start quiz',
        attemptToRunQuiz,
        'sg-button-primary sg-button-primary--full-width sg-button-primary--size sg-button-primary--size__text'
    ));

    return view;
};

export const questionView = () => {
    let view = document.createElement('div');
    // view.className = "main-container main-container--sub-gray";
    view.appendChild(questionComponent());
    view.appendChild(answersComponent(false));

    return mainView(view);
};

export const questionCorrectAnswerView = () => {
    let view = document.createElement('div');
    // view.className = "main-container main-container--sub-gray";
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

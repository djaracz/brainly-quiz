import { restartQuiz, attemptToRunQuiz } from './functions';
import appData from './appData';
import { timer } from './components/timer';
import { createButton } from './components/createButton';
import { header } from './components/header';
import { question } from './components/question';
import { answers } from './components/answers';
import { box } from './components/box';
import { paragraph } from './components/paragraph';


const mainView = (child) => {
    let view = document.createElement('div');
    view.className = 'main-container';
    view.appendChild(timer());
    view.appendChild(createButton(
        `<svg class="sg-icon sg-icon--x24">
            <use xlink:href="#icon-reload"></use>
        </svg>`,
        restartQuiz,
        'sg-button-primary-round--fixed sg-button-primary-round--no-border sg-button-primary-round__icon'
    ));
    view.appendChild(child);

    return view;
};

export const startView = () => {
    let view = document.createElement('div');
    view.className = "start-container";
    view.appendChild(header(
        'czy jestes gotowy sprawdźić swoja wiedzę?',
        'sg-text-bit'
    ));
    view.appendChild(header(
        'czy jestes gotowy sprawdźić swoja wiedzę?',
        'sg-text-bit sg-text-bit--not-responsive sg-text-bit--small sg-text-bit--gray'
    ));
    view.appendChild(header(
        'rozpocznij test już teraz!',
        'sg-text-bit sg-text-bit--not-responsive sg-text-bit--warning'
    ));
    view.appendChild(createButton(
        'start quiz',
        attemptToRunQuiz,
        'sg-button-primary sg-button-primary--full-width sg-button-primary--size sg-button-primary--size__text'
    ));

    return view;
};

export const questionView = () => {
    let view = document.createElement('div');
    view.className = "question-container";
    view.appendChild(
        question('sg-text-bit sg-text-bit--small sg-text-bit--font-size sg-text-bit--light sg-text-bit--wrap')
    );
    view.appendChild(box(
        answers(false)
    ));

    return mainView(view);
};

export const questionCorrectAnswerView = () => {
    let view = document.createElement('div');
    view.className = "question-container";
    view.appendChild(
        question('sg-text-bit sg-text-bit--small sg-text-bit--font-size sg-text-bit--light sg-text-bit--wrap')
    );
    view.appendChild(box(
        answers(true)
    ));

    return mainView(view);
};

export const resultView = () => {
    let {userScore} = appData;
    let view = document.createElement('div');
    view.appendChild(header('Score'));
    view.appendChild(paragraph(`Your result is ${userScore}`));

    return mainView(view);
};

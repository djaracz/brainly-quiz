import { timer } from '../components/timer';
import { createButton } from '../components/createButton';
import { restartQuiz } from '../functions';

export const mainView = (child) => {
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
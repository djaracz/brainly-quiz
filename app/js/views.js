import { restartQuiz, runQuiz } from './functions';
import { createButton, header } from './components';


const mainView = (child) => {
    let view = document.createElement('div');
    view.appendChild(createButton('restart quiz', restartQuiz));
    view.appendChild(child);
    return view;
};

export const startView = () => {
    let view = document.createElement('div');
    view.appendChild(header('brainly quiz!'));
    view.appendChild(createButton('start quiz', runQuiz));
    return mainView(view);
};

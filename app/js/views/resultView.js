import { appData } from '../appData';
import { header } from '../components/header';
import { mainView } from './mainView';

export const resultView = () => {
    const score = (appData.userScore !== 0) ? Math.floor(appData.userScore / appData.fetchedQuestions.length * 100) : 0;
    const view = document.createElement('div');
    const viewScore = document.createElement('div');

    view.className = 'result-container';
    viewScore.className = 'result-container__show-result';
    viewScore.appendChild(header(
        `twój wynik to: ${score}%`,
        'sg-text-bit'
    ));
    view.appendChild(viewScore);

    return mainView(view);
};

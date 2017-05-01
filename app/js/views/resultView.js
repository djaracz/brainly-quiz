import appData from '../appData';
import { header } from '../components/header';
import { mainView } from './mainView';


export const resultView = () => {
    let {userScore, fetchedQuestions} = appData;

    let score = (userScore !== 0) ? Math.floor(userScore / fetchedQuestions.length * 100) : 0;
    let view = document.createElement('div');
    let viewScore = document.createElement('div');

    view.className = 'result-container';
    viewScore.className = 'result-container__show-result';
    viewScore.appendChild(header(
        `twój wynik to: ${score}%`,
        'sg-text-bit'
    ));
    view.appendChild(viewScore);

    return mainView(view);
};

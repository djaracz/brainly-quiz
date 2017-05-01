import appData from '../appData';
import { header } from '../components/header';
import { paragraph } from '../components/paragraph';
import { mainView } from './mainView';


export const resultView = () => {
    let {userScore} = appData;
    let view = document.createElement('div');
    view.appendChild(header('Score'));
    view.appendChild(paragraph(`Your result is ${userScore}`));

    return mainView(view);
};

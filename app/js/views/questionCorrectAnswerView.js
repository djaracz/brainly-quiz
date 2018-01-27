import { question } from '../components/question';
import { answers } from '../components/answers';
import { mainView } from './mainView';
import { box } from '../components/box';


export const questionCorrectAnswerView = () => {
    const view = document.createElement('div');
    view.className = "question-container";
    view.appendChild(
        question('sg-text-bit sg-text-bit--small sg-text-bit--font-size sg-text-bit--light sg-text-bit--wrap')
    );
    view.appendChild(box(
        answers(true)
    ));

    return mainView(view);
};

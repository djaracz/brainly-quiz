import { question } from '../components/question';
import { box } from '../components/box';
import { answers } from '../components/answers';
import { mainView } from './mainView';

export const questionView = () => {
    const view = document.createElement('div');
    view.className = "question-container";
    view.appendChild(
        question('sg-text-bit sg-text-bit--small sg-text-bit--font-size sg-text-bit--light sg-text-bit--wrap')
    );
    view.appendChild(box(
        answers(false)
    ));

    return mainView(view);
};

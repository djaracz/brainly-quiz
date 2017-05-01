import appData from '../appData';
import { answer } from './answer';

export const answers = (showAnswer) => {
    let {fetchedQuestions, currentQuestion} = appData;
    let {answers} = fetchedQuestions[currentQuestion];

    let answerClassName = 'sg-list__element sg-list__element--position sg-list__element--pointer';
    let answersToRender = document.createElement('ul');
    answersToRender.className = 'sg-list sg-list--position';

    if (showAnswer) {
        answers.map(ans =>
            answersToRender.appendChild((ans.correct) ?
                answer(
                    answerClassName,
                    ans.correct,
                    ans.answer
                ) : answer(answerClassName)));
    } else {
        answers.map(ans =>
            answersToRender.appendChild(answer(
                answerClassName,
                ans.correct,
                ans.answer
            )));
    }

    return answersToRender;
};
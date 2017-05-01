import appData from '../appData';

export const question = (className) => {
    let {fetchedQuestions, currentQuestion} = appData;
    let {question} = fetchedQuestions[currentQuestion];

    let questionToRender = document.createElement('h2');
    questionToRender.className = className;
    questionToRender.innerHTML = `Q: ${question}`;

    return questionToRender;
};

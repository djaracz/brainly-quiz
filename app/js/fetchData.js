import { appData } from './appData';
import { runQuiz } from './functions';

export const fetchData = () => {
    const url = 'https://cdn.rawgit.com/kdzwinel/cd08d08002995675f10d065985257416/raw/811ad96a0567648ff858b4f14d0096ba241f28ef/quiz-data.json';
    const request = new XMLHttpRequest();
    request.open(
        'GET',
        url,
        true
    );
    request.send();
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status === 200) {
                let data = JSON.parse(request.responseText);
                setFetchedData(data);
            } else {
                console.error('smthing gone wrong');
            }
        }
    }
};

const setFetchedData = (data) => {
    appData.fetchedQuestions = data.questions;
    appData.timePerQuestion = Math.floor(data.time_seconds * 1000 / data.questions.length);
    runQuiz();
};

import appData from './appData';


const fetchData = () => {
    const url = 'https://cdn.rawgit.com/kdzwinel/cd08d08002995675f10d065985257416/raw/811ad96a0567648ff858b4f14d0096ba241f28ef/quiz-data.json';
    const request = new XMLHttpRequest();
    request.open(
        'GET',
        url,
        true
    );
    request.send();
    request.onreadystatechange = () => {
        console.log(request.readyState);
        if (request.readyState === 4) {
            if (request.status === 200) {
                let response = JSON.parse(request.responseText);
                appData.timeSeconds = response.timeSeconds;
                appData.questions = response.questions;
            } else {
                console.error('smthing gone wrong');
            }
        }
    }
};

export default fetchData;

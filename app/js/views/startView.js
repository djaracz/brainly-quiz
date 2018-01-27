import { header } from '../components/header';
import { button } from '../components/button';
import { attemptToRunQuiz } from '../functions';

export const startView = () => {
    const view = document.createElement('div');
    view.className = "start-container";
    view.appendChild(header(
        'czy jestes gotowy sprawdźić swoja wiedzę?',
        'sg-text-bit'
    ));
    view.appendChild(header(
        'czy uda ci się zdać?',
        'sg-text-bit sg-text-bit--not-responsive sg-text-bit--small sg-text-bit--gray'
    ));
    view.appendChild(header(
        'rozpocznij test już teraz!',
        'sg-text-bit sg-text-bit--warning'
    ));
    view.appendChild(button(
        'start quiz',
        attemptToRunQuiz,
        'sg-button-primary sg-button-primary--full-width sg-button-primary--size sg-button-primary--size__text'
    ));

    return view;
};

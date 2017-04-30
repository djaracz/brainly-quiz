import './styles/style.scss';
import { startView } from './js/views';


export const root = (view) => {
    let rootComponent = document.getElementById('root');
    rootComponent.appendChild(view());
};

(function () {
    root(startView);
})();

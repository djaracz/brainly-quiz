import './styles/style.scss';
import './styles/containers.scss';
import './styles/button.scss';
import { startView } from './js/views/startView';

export const root = (view) => {
    const rootComponent = document.getElementById('root');
    rootComponent.innerHTML = '';
    rootComponent.appendChild(view());
};

root(startView);


export const button = (text, cb, className) => {
    let btnToRender = document.createElement('button');
    btnToRender.className = className;
    btnToRender.innerHTML = text;
    btnToRender.addEventListener('click', () => cb());

    return btnToRender;
};
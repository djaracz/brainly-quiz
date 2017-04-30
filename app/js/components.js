
export const createButton = (text, cb) => {
    let btn = document.createElement('button');
    btn.innerHTML = text;
    btn.addEventListener('click', () => cb());
    return btn;
};

export const header = (text) => {
    let header = document.createElement('h1');
    header.innerHTML = text;
    return header;
};

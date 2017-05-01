
export const header = (text, className) => {
    let headerToRender = document.createElement('h1');
    headerToRender.className = className;
    headerToRender.innerHTML = text;

    return headerToRender;
};
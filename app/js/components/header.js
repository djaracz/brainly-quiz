export const header = (text, className) => {
    const headerToRender = document.createElement('h1');
    headerToRender.className = className;
    headerToRender.innerHTML = text;

    return headerToRender;
};
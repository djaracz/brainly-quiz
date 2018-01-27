export const paragraph = (text) => {
    const paragraphToRender = document.createElement('p');
    paragraphToRender.innerHTML = text;

    return paragraphToRender;
};
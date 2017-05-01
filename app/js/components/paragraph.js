
export const paragraph = (text) => {
    let paragraphToRender = document.createElement('p');
    paragraphToRender.innerHTML = text;

    return paragraphToRender;
};
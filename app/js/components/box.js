
export const box = (child) => {
    let boxToRender = document.createElement('div');
    boxToRender.className = 'sg-box sg-box--border-dashed sg-box--mint-secondary sg-box--overlay';
    boxToRender.appendChild(child);

    return boxToRender;
};
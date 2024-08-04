// import opentype from 'https://cdn.jsdelivr.net/npm/opentype.js/dist/opentype.module.js';

export function convertFunction(element) {
    let fontSize = getComputedStyle(element).fontSize;
    let text = element.text;
    let fontFamily = getComputedStyle(element).fontFamily;
    console.log(fontFamily)

    element.ctx.font = `40px serif`;
    for (let i = 0; i < text.length; i++) {
        let delay = i * 300; 
        setTimeout(function () {
            element.ctx.fillText(text[i], element.x, element.y);
            element.x += element.ctx.measureText(text[i]).width; 
        }, delay);
    }
}
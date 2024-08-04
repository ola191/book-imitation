// import opentype from 'https://cdn.jsdelivr.net/npm/opentype.js/dist/opentype.module.js';

export function convertFunction(element) {
    let fontSize = parseInt(getComputedStyle(element).fontSize);
    let text = element.text;
    let fontFamily = getComputedStyle(element).fontFamily;
    console.log(fontFamily)

    element.ctx.font = `40px serif`;
    
    let textCurrentWidth = 0;
    
    for (let i = 0; i < text.length; i++) {
        let IDelay = i + 1;
        let TDelay = 250
        let delay = IDelay * TDelay; 
        setTimeout(function () {
            element.ctx.fillText(text[i], textCurrentWidth, fontSize);

            let width = element.ctx.measureText(text[i]).width;
            let imageData = element.ctx.getImageData(textCurrentWidth, 0, width, fontSize);

            element.ctx.clearRect(textCurrentWidth, 0, width, fontSize);

            console.log("######### letter " + text[i] + " #########");
            let newDelay = 0
            for (let y = 0; y < imageData.height; y++) {
                for (let x = 0; x < width; x++) {
                    newDelay += 1;
                    let index = (y * width + x) * 4;
                    let a = imageData.data[index + 3];

                    if (a > 0) {
                        // Rysuj pojedynczy piksel
                        setTimeout(function () {
                            element.ctx.fillRect(textCurrentWidth + x, y, 1, 1);
                        }, newDelay);
                    }
                }
            }
        }, delay);
    }
}
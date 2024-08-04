export async function convertFunction(element) {
    let fontSize = parseInt(getComputedStyle(element).fontSize);
    let text = element.text;
    let fontFamily = getComputedStyle(element).fontFamily;

    element.ctx.font = `40px serif`;
    
    let textCurrentWidth = 0;
    
    for (let i = 0; i < text.length; i++) {

        let delay = (i + 1) * 250;

        await new Promise(resolve => setTimeout(resolve, delay));

        element.ctx.fillText(text[i], textCurrentWidth, fontSize);

        let width = element.ctx.measureText(text[i]).width;
        console.log("width: " + width);
        let imageData = element.ctx.getImageData(textCurrentWidth, 0, width, fontSize);
        element.ctx.clearRect(textCurrentWidth, 0, width, fontSize);
        textCurrentWidth += width;
        console.log(textCurrentWidth)

        let newDelay = 0
        for (let y = 0; y < imageData.height; y++) {
            for (let x = 0; x < width; x++) {
                let index = (y * width + x) * 4;
                let a = imageData.data[index + 3];

                if (a > 0) {
                    setTimeout(function () {
                        element.ctx.fillRect(textCurrentWidth + x, y, 1, 1);
                    }, newDelay);
                }
            }
        }
    }
}
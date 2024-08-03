class WriteLikeRealText extends HTMLElement {
    connectedCallback() {
        this.elemWidth = this.offsetWidth
        this.elemHeight = this.offsetHeight
        this.text = this.textContent;
        let computedStyle = window.getComputedStyle(this);
        this.fontSize = parseFloat(computedStyle.fontSize);
        this.style.position = 'relative';
        // this.textContent = '';
        this.createCanvas();
        this.drawText();
        // this.animateText(text);
    }

    createCanvas(elemWidth, elemHeight) {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.appendChild(this.canvas);

        this.canvas.style.position = 'absolute';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.width = this.elemWidth;
        this.canvas.height = this.elemHeight;
        this.canvas.style.backgroundColor = 'white';
        this.canvas.style.border = "1px solid black";
        this.canvas.style.color = "black";
        this.ctx.font = `${this.fontSize}px Arial`; 

    }

    drawText() {
        let index = 0;
        const drawNextChar = () => {
            if (index < this.text.length) {
                this.drawChar(this.text[index], index);
                index++;
                setTimeout(drawNextChar, 200); 
            }
        };
        drawNextChar();
    }

    drawChar(char, index) {
        console.log(char);
        let x = this.canvas.width / 2 - 10;
        let y = this.canvas.height / 2 - 10;
        this.ctx.fillText(char, x, y);
    }
}

customElements.define('writereal-text', WriteLikeRealText);


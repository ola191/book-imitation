class WriteLikeRealText extends HTMLElement {
    connectedCallback() {
        this.elemWidth = this.offsetWidth
        this.elemHeight = this.offsetHeight
        this.text = this.textContent;
        let computedStyle = window.getComputedStyle(this);
        this.fontSize = parseFloat(computedStyle.fontSize);
        this.style.position = 'relative';
        this.textContent = '';
        this.createCanvas();
        this.drawText();
        // this.animateText(text);
        this.revealText();
    }

    createCanvas(elemWidth, elemHeight) {
        this.canvas = document.createElement('canvas');
        this.canvas.style.zIndex = "10";
        this.ctx = this.canvas.getContext('2d');
        this.appendChild(this.canvas);

        this.canvas.style.position = 'absolute';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0 ';
        this.canvas.width = this.elemWidth;
        this.canvas.height = this.elemHeight;
        // this.canvas.style.backgroundColor = 'white';
        this.canvas.style.border = "1px solid black";
        this.canvas.style.color = "black";
        this.ctx.font = `${this.fontSize}px Arial`; 

        this.y = this.canvas.height / 2 + this.fontSize / 2 - 7.5;
    }

    drawText() {
        let index = 0;
        let x = 10;
        const drawNextChar = () => {
            if (index < this.text.length) {
                this.drawChar(this.text[index], x);
                x += this.ctx.measureText(this.text[index]).width;
                index++;
                setTimeout(drawNextChar, 35); 
            }
        };
        drawNextChar();
    }

    drawChar(char, x) {
        this.ctx.fillText(char, x, this.y);
    }

    revealText() {
        this.classList.add('reveal');
    }
}

customElements.define('writereal-text', WriteLikeRealText);


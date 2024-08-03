class WriteLikeRealText extends HTMLElement {
    connectedCallback() {
        let elemWidth = this.offsetWidth
        let elemHeight = this.offsetHeight
        let text = this.textContent;
        this.style.position = 'relative';
        // this.textContent = '';
        this.createCanvas(elemWidth, elemHeight);
        // this.animateText(text);
    }

    createCanvas(elemWidth, elemHeight) {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.appendChild(this.canvas);

        this.canvas.style.position = 'absolute';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.width = elemWidth;
        this.canvas.height = elemHeight;
        this.canvas.style.backgroundColor = 'orange';
    }

    animateText(text) {
        // let index = 0;
        // const interval = setInterval(() => {
        //     this.textContent += text[index];
        //     index++;
        //     if (index === text.length) {
        //         clearInterval(interval);
        //     }
        // }, 100);
    }
}

customElements.define('writereal-text', WriteLikeRealText);


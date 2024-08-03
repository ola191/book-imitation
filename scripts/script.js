class WriteLikeRealText extends HTMLElement {
    connectedCallback() {
        let text = this.textContent;
        this.textContent = '';
        this.animateText(text);
    }

    animateText(text) {
        let index = 0;
        const interval = setInterval(() => {
            this.textContent += text[index];
            index++;
            if (index === text.length) {
                clearInterval(interval);
            }
        }, 100);
    }
}

customElements.define('writereal-text', WriteLikeRealText);
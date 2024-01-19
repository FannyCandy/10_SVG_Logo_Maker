class Text {
    constructor(text, textColor) {
        this.text = text;
        this.textColor = textColor;
    }

    render() {
        return `<text x="0" y="55" font-size="55" text-anchor="middle" font-family="monospace" fill="${this.textColor}">${this.text}</text>`
    }
}

module.exports = Text;

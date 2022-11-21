export class CopyToClipBoard {
    constructor(text, event) {
        this.text = text
        this.event = event
    }
    async copy() {
        try {
            await navigator.clipboard.writeText(this.text)
            alert("Copiedo")
        } catch (error) {
            console.error('error :>> ', error)
        }
    }
}


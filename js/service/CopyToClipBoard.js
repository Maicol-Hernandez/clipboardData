export class CopyToClipBoard {
    constructor(text) {
        this.text = text
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


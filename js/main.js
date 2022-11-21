import { CopyToClipBoard } from './service/CopyToClipBoard.js'
const text = document.querySelector('.contenido-texto').innerText
const btnCopy = document.getElementById('btn-copy')

btnCopy.onclick = (event) => {
    const clipboard = new CopyToClipBoard(text, event)
    clipboard.copy()
}



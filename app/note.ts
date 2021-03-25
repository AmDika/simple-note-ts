import {Text} from './text'
export class Note implements Text {
    text: string;

    constructor(text: string) {}

    displayNote(): void {
       
        const textArea = (document.querySelector('#noteText') as HTMLInputElement).value;
        const notes = document.querySelector('.notes');
        // const colorInput =document.querySelector('#color');
        // const sizeInput = document.querySelector('#size');
        const box = document.createElement('div');
        const text = document.createElement('p');
        const closeBtn = document.createElement('button')

        box.className = 'box';
        notes?.appendChild(box);
        box.appendChild(text);
        box.appendChild(closeBtn);
        closeBtn.innerHTML = 'X';
        
        closeBtn.addEventListener('click', () => {
            box.remove()
        })

        text.innerHTML = textArea;
    }
}







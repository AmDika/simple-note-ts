import {Text} from './text'
export class Note {

    constructor( ) {}

    displayNote(): void {
        console.log('ljdlsjls')
        let addBtn = document.querySelector('#add');
        // let textArea = document.querySelector('.text-area text-area')
        // const addBtn = document.querySelector('#add');
        const textArea = <HTMLInputElement> document.querySelector('.text-area textarea');
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
        
        console.log(textArea.value)
        

    }
}







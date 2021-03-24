import { Note } from './note';
import { getValue } from './utility';

let noteApp: Note;
let add = <HTMLElement> document.getElementById('add');

// add click handler to the start game button
document.addEventListener('DOMContentLoaded', () => {

    // let noteApp = new Note();
    // noteApp.displayNote();
});


add.addEventListener('click', () => {
    console.log('lkjdls')
    noteApp.displayNote();
})

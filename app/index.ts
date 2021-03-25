import { Note } from './note';
import { getValues, logger } from './utility';

let noteApp: Note;
let add = <HTMLElement> document.getElementById('add');

// add click handler to the start game button
// document.addEventListener('DOMContentLoaded', () => {
// });


add.addEventListener('click', () => {
    let theNotes = (document.getElementById('noteText') as HTMLInputElement).value;
    logger(theNotes)
    let notes = new Note(theNotes);
    notes.displayNote()

})

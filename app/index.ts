import { Note } from './note';

// let newGame: Game;

// add click handler to the start game button
document.addEventListener('DOMContentLoaded', () => {
//   const player: Player = new Player();
//   player.name = Helpers.getValue('playername');

//   const problemCount: number = Number(Helpers.getValue('problemCount'));
//   const factor: number = Number(Helpers.getValue('factor'));

//   newGame = new Game(player, problemCount, factor);
//   newGame.displayGame();
    // console.log('tslsks')
    let noteApp = new Note();
    noteApp.displayNote();
});

// add click handler to the calculate score button
// document.getElementById('calculate')!.addEventListener('click', () => {
//   newGame.calculateScore();
// });
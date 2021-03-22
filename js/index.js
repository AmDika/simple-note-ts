"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { Player } from './player';
// import { Game } from './game';
// import * as Helpers from './utility';
var note_1 = require("./note");
// let newGame: Game;
// add click handler to the start game button
document.getElementById('notes').addEventListener('DOMContentLoaded', function () {
    //   const player: Player = new Player();
    //   player.name = Helpers.getValue('playername');
    //   const problemCount: number = Number(Helpers.getValue('problemCount'));
    //   const factor: number = Number(Helpers.getValue('factor'));
    //   newGame = new Game(player, problemCount, factor);
    //   newGame.displayGame();
    var noteApp = new note_1.Note;
    noteApp.displayNote();
});
// add click handler to the calculate score button
// document.getElementById('calculate')!.addEventListener('click', () => {
//   newGame.calculateScore();
// });
//# sourceMappingURL=index.js.map
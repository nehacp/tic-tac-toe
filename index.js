const box = $('.one-box');
let currentPlayer = 'player1';

let values = {
  player1: 'X',
  player2: 'O'
};

let grid = [
              [undefined, undefined, undefined], 
              [undefined, undefined, undefined], 
              [undefined, undefined, undefined]
            ]

box.on('click', (e) => {
  console.log('value', e);
  if (!e.target.innerText) {
    this.text(values[currentPlayer]);
    currentPlayer = 'pla'
  }

  // make a check for if matches found;

});




